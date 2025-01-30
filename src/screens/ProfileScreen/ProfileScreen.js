import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  ImageBackground,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../../../styles/global.js";
import PostCardItem from "../../components/PostCardItem.js";
import CircleDelete from "../../../icons/CircleDelete.js";
import { useNavigation } from "@react-navigation/native";
import LogoutButton from "../../components/LogoutButton.js";

const dataProfile = [
  {
    id: 1,
    title: "Ліс",
    messages: 8,
    like: 153,
    location: "Ukraine",
    picture: require("../../../assets/images/Forest.png"),
  },
  {
    id: 2,
    title: "Захід на Чорному морі",
    messages: 3,
    like: 200,
    location: "Ukraine",
    picture: require("../../../assets/images/Sunset.png"),
  },
  {
    id: 3,
    title: "Старий будиночок у Венеції",
    messages: 50,
    like: 200,
    location: "Italy",
    picture: require("../../../assets/images/House.png"),
  },
];

const ProfileScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");
  const noImageAvatar = require("../../../assets/images/noImageAvatar.png");

  const navigation = useNavigation();

  const [user, setUser] = useState({
    avatarUri:
      "https://cdn.pixabay.com/photo/2018/11/07/13/24/wild-duck-3800387_1280.jpg",
    screen: "Home",
  });

  const handleUserState = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddAvatar = () => {
    Alert.alert("Add New Photo", "Choose whatever you want to load", [
      { text: "Maybe", onPress: () => console.log("Maybe pressed") },
      { text: "No", onPress: () => console.log("No pressed") },
      { text: "Yes", onPress: () => console.log("Yes pressed") },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground source={imageBG} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.wrapperContainer}>
            <LogoutButton />
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageAvatar}
                source={
                  user.avatarUri ? { uri: user.avatarUri } : noImageAvatar
                }
              ></Image>
              <Pressable
                accessible={true}
                accessibilityLabel="Add Avatar"
                onPress={handleAddAvatar}
                style={({ pressed }) => [
                  styles.buttonAdd,
                  pressed && styles.pressed,
                ]}
              >
                <View>
                  <CircleDelete width="25" height="25" />
                </View>
              </Pressable>
            </View>
            <Text style={styles.textTitle}>Donald Duck</Text>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <PostCardItem screen={user.screen} data={dataProfile} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: colors.black_primary,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    right: "50%",
    left: "50%",
    top: "-60",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 147,
  },
  buttonAdd: {
    position: "absolute",
    bottom: 14,
    left: 47,
    position: "absolute",
  },
  wrapperContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  imageAvatar: {
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
  },
  textTitle: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    color: colors.black_primary,
    marginTop: 46,
    marginBottom: 32,
  },
  pressed: {
    opacity: 0.6,
  },
  buttonSignInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 45,
  },
  buttonText: {
    color: colors.blue,
  },
  buttonSignInText: {
    color: colors.blue,
    marginLeft: 5,
  },
  containerInput: {
    marginTop: 32,
    marginBottom: 43,
    gap: 16,
  },
});
