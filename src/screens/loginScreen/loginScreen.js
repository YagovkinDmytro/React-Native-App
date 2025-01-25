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
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import styles from "./LoginStylesScreen.js";
import ShowPasswordButton from "../../components/ShowPasswordButton.js";
import Input from "../../components/Input.js";

import Button from "../../components/Button.js";

const LoginScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");

  const [user, setUser] = useState({
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
    if (!user.email.trim() || !user.password.trim()) {
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
    const userInfo = { email: user.email };
    console.log("User Info:", userInfo);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Pressable onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={imageBG} style={styles.imageBackground}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.containerSignIn}>
              <Text style={styles.textTitle}>Увійти</Text>
              <View style={styles.containerInput}>
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
              <Button onPress={handleSubmit} buttonTitle="Увійти" />
              <View style={styles.buttonSignInContainer}>
                <Text style={[styles.baseText, styles.buttonText]}>
                  Немає акаунту?
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => console.log("Зареєструватися")}
                >
                  <Text style={[styles.baseText, styles.buttonSignInText]}>
                    Зареєструватися
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

export default LoginScreen;
