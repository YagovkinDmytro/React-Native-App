import { use, useState } from "react";
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
import styles from "./stylesRegistrationScreen";
import ShowPasswordButton from "../../components/ShowPasswordButton.js";
import Input from "../../components/Input";

import CirclePlusSvg from "../../../icons/CirclePlusSvg";
import Button from "../../components/Button.js";

const registrationScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");

  const [user, setUser] = useState({
    login: "",
    email: "",
    password: "",
    isPasswordVisible: true,
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

  const handleSubmit = () => {
    const userInfo = { login: user.login, email: user.email };
    console.log("User Info:", userInfo);
  };

  const handleShowAlertMessage = () => {
    Alert.alert("Title", "Message", [
      { text: "Maybe", onPress: () => console.log("Maybe pressed") },
      { text: "No", onPress: () => console.log("No pressed") },
      { text: "Yes", onPress: () => console.log("Yes pressed") },
    ]);
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Pressable onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={imageBG} style={styles.imageBackground}>
          <View style={styles.containerSignUp}>
            <View style={styles.imageContainer}>
              <Image style={styles.imageAvatar}></Image>
              <Pressable
                onPress={handleShowAlertMessage}
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
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
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
            </KeyboardAvoidingView>
            <Button onPress={handleSubmit} buttonTitle="Зареєстуватися" />
            <View style={styles.buttonSignInContainer}>
              <Text style={[styles.baseText, styles.buttonText]}>
                Вже є акаунт?
              </Text>
              <TouchableWithoutFeedback onPress={() => console.log("Увійти")}>
                <Text style={[styles.baseText, styles.buttonSignInText]}>
                  Увійти
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </SafeAreaView>
  );
};

export default registrationScreen;
