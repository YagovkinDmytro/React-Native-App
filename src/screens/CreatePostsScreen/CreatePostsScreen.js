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
import * as Location from "expo-location";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route?.params;

  const picture = require("../../../assets/images/noImagePicture.png");

  const [post, setPost] = useState({
    title: "",
    nameLocation: "",
    pictureUri: "",
    currentLocation: null,
    errorMsg: null,
    photo: null,
  });

  const isButtonDisabled = !post.title.trim() || !post.nameLocation.trim();

  const handlePostChange = (name, value) => {
    setPost((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!params?.photo) return;

    handlePostChange("photo", params.photo);
  }, [params]);

  const navigateToCameraScreen = () => {
    navigation.navigate("CameraScreen");
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      handlePostChange("errorMsg", "Permission to access location was denied");
      Alert.alert("Permission", post.errorMsg, [
        { text: "Ok", onPress: () => console.log("Ok") },
      ]);
      return;
    }

    let coordinates = await Location.getCurrentPositionAsync({});
    return coordinates;
  };

  const handleSubmit = async () => {
    const coordinates = await getCurrentLocation();
    handlePostChange("currentLocation", coordinates);
    navigation.navigate("Posts");

    const userPost = {
      title: post.title,
      nameLocation: post.nameLocation,
      currentLocation: post.currentLocation,
    };
    console.log("User Post:", userPost);

    handlePostChange("title", "");
    handlePostChange("nameLocation", "");
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
                  source={post.photo ? { uri: post.photo } : picture}
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
                <Text style={styles.imgDescription}>Завантажте фото</Text>
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
                onPress={handleSubmit}
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
