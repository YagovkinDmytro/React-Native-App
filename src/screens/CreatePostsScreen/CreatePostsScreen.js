import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Button from "../../components/Button";
import { colors } from "../../../styles/global";
import InputCreatePost from "../../components/InputCreatePost";
import { useEffect, useState } from "react";
import MapPinIcon from "../../../icons/MapPinIcon";
import TrashIcon from "../../../icons/TrashIcon";
import CameraIcon from "../../../icons/CameraIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { addPost, getPosts, uploadImage } from "../../utils/firestore";
import { useDispatch, useSelector } from "react-redux";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { setPostsInfo } from "../../redux/reducers/postsSlice";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const params = route?.params;

  const noImagePicture = require("../../../assets/images/noImagePicture.png");

  const [post, setPost] = useState({
    title: "",
    nameLocation: "",
    currentLocation: null,
    errorMsg: null,
    photoUri: "",
    uploadedImageUri: "",
  });

  const user = useSelector((state) => state.user.userInfo);

  const commentsInfo = useSelector((state) => state.comments.commentsInfo);
  console.log("commentsInfo in PostScreen:", commentsInfo);

  const isButtonDisabled = !post.title.trim() || !post.nameLocation.trim();

  const handlePostChange = (name, value) => {
    setPost((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission", "Permission to access location was denied", [
        {
          text: "Ok",
          onPress: () =>
            console.log("Permission to access location was denied"),
        },
      ]);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: false,
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      handlePostChange("uploadedImageUri", uri);
    }
  };

  const uploadImageToStorage = async () => {
    if (!post.uploadedImageUri) return;

    try {
      const response = await fetch(post.uploadedImageUri);
      const file = await response.blob();
      const fileName = post.uploadedImageUri.split("/").pop(); // Отримуємо ім'я файлу з URI
      const fileType = file.type; // Отримуємо тип файлу
      const imageFile = new File([file], fileName, { type: fileType });

      const uploadedImageUri = await uploadImage(user.uid, imageFile, fileName);

      return uploadedImageUri;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const navigateToCameraScreen = () => {
    navigation.navigate("CameraScreen");
  };

  useEffect(() => {
    if (!params?.photoUri) return;

    handlePostChange("photoUri", params.photoUri);

    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        handlePostChange(
          "errorMsg",
          "Permission to access location was denied"
        );
        Alert.alert("Permission", "Permission to access location was denied", [
          {
            text: "Ok",
            onPress: () =>
              console.log("Permission to access location was denied"),
          },
        ]);
        return;
      }

      let coordinates = await Location.getCurrentPositionAsync({});
      handlePostChange("currentLocation", coordinates);
    };

    getCurrentLocation();
  }, [params?.photoUri]);

  const onClearData = () => {
    handlePostChange("title", "");
    handlePostChange("nameLocation", "");
    handlePostChange("photoUri", "");
    handlePostChange("uploadedImageUri", "");
  };

  const onPublish = async () => {
    if (!user) return;

    try {
      const uploadedImageUri = await uploadImageToStorage();
      const postId = nanoid();

      await addPost(
        user?.uid,
        {
          id: postId,
          userId: user.uid,
          title: post.title,
          address: post.nameLocation,
          image: uploadedImageUri,
        },
        postId
      );

      const postsData = await getPosts(user.uid);

      dispatch(
        setPostsInfo({
          ...postsData,
        })
      );
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Posts");

    onClearData();
  };

  const handleDeletePost = () => {
    Alert.alert("Delete Post", "Have you thought about it well?", [
      { text: "Maybe", onPress: () => console.log("Maybe pressed") },
      { text: "No", onPress: () => console.log("No pressed") },
      { text: "Yes", onPress: () => console.log("Yes pressed") },
    ]);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <StatusBar style="auto" />
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.containerGroup}>
              <View style={styles.containerImage}>
                <Image
                  style={styles.img}
                  source={
                    post.photoUri || post.uploadedImageUri
                      ? { uri: post.photoUri || post.uploadedImageUri }
                      : noImagePicture
                  }
                />
                <Pressable
                  accessible={true}
                  accessibilityLabel="Take a photo"
                  onPress={navigateToCameraScreen}
                  style={({ pressed }) => [
                    styles.containerCameraIcon,
                    pressed && styles.pressed,
                  ]}
                >
                  <CameraIcon width={24} height={24} />
                </Pressable>
                <Pressable
                  accessible={true}
                  accessibilityLabel="Upload a photo"
                  onPress={pickImage}
                  style={({ pressed }) => [pressed && styles.pressed]}
                >
                  <Text style={styles.imgDescription}>Завантажте фото</Text>
                </Pressable>
              </View>
              <InputCreatePost
                value={post.title}
                placeholder="Назва..."
                onChangeText={(value) => handlePostChange("title", value)}
              />
              <InputCreatePost
                value={post.nameLocation}
                placeholder="Місцевість..."
                onChangeText={(value) =>
                  handlePostChange("nameLocation", value)
                }
                outerStyles={{ paddingLeft: 28 }}
              >
                <MapPinIcon style={styles.iconLoation} width="24" height="24" />
              </InputCreatePost>
              <Button
                onPress={onPublish}
                buttonTitle="Опубліковати"
                disabled={isButtonDisabled}
              />
            </View>
          </KeyboardAvoidingView>
          <Pressable
            accessible={true}
            accessibilityLabel="Delete Post"
            onPress={handleDeletePost}
            style={({ pressed }) => [
              styles.containerTrashIcon,
              pressed && styles.pressed,
            ]}
          >
            <TrashIcon width={24} height={24} />
          </Pressable>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    justifyContent: "space-between",
  },
  containerGroup: {
    gap: 32,
  },
  containerImage: {
    marginLeft: 16,
    marginRight: 16,
  },
  img: {
    width: "100%",
    height: "240",
    borderRadius: 8,
  },
  imgDescription: {
    marginTop: 8,
    color: colors.text_gray,
  },
  iconLoation: {
    position: "absolute",
  },
  containerTrashIcon: {
    width: 70,
    height: 40,
    margin: 18,
    backgroundColor: colors.light_gray,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCameraIcon: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 90,
  },
  pressed: {
    opacity: 0.6,
  },
});
