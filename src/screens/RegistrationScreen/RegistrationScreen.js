import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import styles from "./RegistrationStylesScreen.js";
import ShowPasswordButton from "../../components/ShowPasswordButton.js";
import Input from "../../components/Input.js";
import CirclePlusSvg from "../../../icons/CirclePlusSvg.js";
import Button from "../../components/Button.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { registerDB } from "../../utils/auth.js";

const RegistrationScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");
  const noImageAvatar = require("../../../assets/images/noImageAvatar.png");

  const navigation = useNavigation();

  const { params } = useRoute();
  const email = params?.email || "";
  const password = params?.password || "";

  const [user, setUser] = useState({
    login: "",
    email,
    password,
    isPasswordVisible: true,
    avatarUri: "",
  });

  const handleInputChange = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const showPassword = (name) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: !prevUser[name],
    }));
  };

  const onSignUp = () => {
    if (!user.login.trim() || !user.email.trim() || !user.password.trim()) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      Alert.alert("Error", "Invalid email format!");
      return;
    }
    if (user.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long!");
      return;
    }
    const userInfo = {
      login: user.login,
      email: user.email,
      password: user.password,
    };
    console.log("User Info:", userInfo);
    registerDB(userInfo);
  };

  const handleAddAvatar = () => {
    Alert.alert("Add New Photo", "Choose whatever you want to load", [
      { text: "Maybe", onPress: () => console.log("Maybe pressed") },
      { text: "No", onPress: () => console.log("No pressed") },
      { text: "Yes", onPress: () => console.log("Yes pressed") },
    ]);
  };

  const onSignIn = () => {
    navigation.navigate("Login", {
      email: user.email,
      password: user.password,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Pressable onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={imageBG} style={styles.imageBackground}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.containerSignUp}>
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
                    <CirclePlusSvg width="25" height="25" />
                  </View>
                </Pressable>
              </View>
              <Text style={styles.textTitle}>Реєстрація</Text>
              <View style={styles.containerInput}>
                <Input
                  value={user.login}
                  placeholder="Логін"
                  onChangeText={(value) => handleInputChange("login", value)}
                />
                <Input
                  value={user.email}
                  placeholder="Адреса електронної пошти"
                  onChangeText={(value) => handleInputChange("email", value)}
                />
                <Input
                  value={user.password}
                  placeholder="Пароль"
                  onChangeText={(value) => handleInputChange("password", value)}
                  secureTextEntry={user.isPasswordVisible}
                >
                  <ShowPasswordButton
                    showPassword={() => showPassword("isPasswordVisible")}
                    isPasswordVisible={user.isPasswordVisible}
                  />
                </Input>
              </View>
              <Button onPress={onSignUp} buttonTitle="Зареєстуватися" />
              <View style={styles.buttonSignInContainer}>
                <Text style={[styles.baseText, styles.buttonText]}>
                  Вже є акаунт?
                </Text>
                <TouchableWithoutFeedback onPress={onSignIn}>
                  <Text style={[styles.baseText, styles.buttonSignInText]}>
                    Увійти
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Pressable>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
