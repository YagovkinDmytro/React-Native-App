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
} from "react-native";
import styles from "./stylesRegistrationScreen";
import ShowPasswordButton from "../../components/ShowPasswordButton.js";
import Input from "../../components/Input";

import CirclePlusSvg from "../../../icons/CirclePlusSvg";

const registrationScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");

  const [user, setUser] = useState({
    login: "",
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleInputChange = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log("User Info:", user);
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
              secureTextEntry={isPasswordVisible}
            >
              <ShowPasswordButton
                showPassword={showPassword}
                isPasswordVisible={isPasswordVisible}
              />
            </Input>
          </View>
          <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonSignUpText}>Зареєстуватися</Text>
          </Pressable>
          <TouchableWithoutFeedback
            onPress={() => console.log("Вже є акаунт? Увійти")}
          >
            <Text style={styles.buttonText}>Вже є акаунт? Увійти</Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default registrationScreen;
