import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Alert,
} from "react-native";

import Button from "../../components/Button";
import { colors } from "../../../styles/global";
import InputCreatePost from "../../components/InputCreatePost";
import { useState } from "react";
import MapPinIcon from "../../../icons/MapPinIcon";
import TrashIcon from "../../../icons/TrashIcon";
import CameraIcon from "../../../icons/CameraIcon";

const CreatePostsScreen = () => {
  const picture = require("../../../assets/images/noImagePicture.png");

  const [post, setPost] = useState({
    title: "",
    location: "",
    pictureUri: "",
  });

  const handleInputChange = (name, value) => {
    setPost((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const userPost = { title: post.title, location: post.location };
    console.log("User Post:", userPost);
  };

  const handleAddPicture = () => {
    Alert.alert("Add New Picture", "Choose whatever you want to load", [
      { text: "Maybe", onPress: () => console.log("Maybe pressed") },
      { text: "No", onPress: () => console.log("No pressed") },
      { text: "Yes", onPress: () => console.log("Yes pressed") },
    ]);
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
      <View style={styles.container}>
        <View style={styles.containerGroup}>
          <View style={styles.containerImage}>
            <Image style={styles.img} source={picture} />
            <Pressable
              accessible={true}
              accessibilityLabel="Add Picture"
              onPress={handleAddPicture}
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
            onChangeText={(value) => handleInputChange("title", value)}
          />
          <InputCreatePost
            value={post.location}
            placeholder="Місцевість..."
            onChangeText={(value) => handleInputChange("location", value)}
            outerStyles={{ paddingLeft: 28 }}
          >
            <MapPinIcon style={styles.iconLoation} width="24" height="24" />
          </InputCreatePost>
          <Button onPress={handleSubmit} buttonTitle="Опубліковати" />
        </View>
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
