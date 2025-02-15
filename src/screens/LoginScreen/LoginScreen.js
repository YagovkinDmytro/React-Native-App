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
import { useNavigation, useRoute } from "@react-navigation/native";
import { loginDB } from "../../utils/auth.js";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { params } = useRoute();
  const email = params?.email || "";
  const password = params?.password || "";

  const [user, setUser] = useState({
    email,
    password,
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

  const onLogin = () => {
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
    const userInfo = { email: user.email, password: user.password };
    console.log("User Info:", userInfo);
    loginDB(userInfo, dispatch);
  };

  const onSignUp = () => {
    navigation.navigate("Registration", {
      email: user.email,
      password: user.password,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <ImageBackground source={imageBG} style={styles.imageBackground}>
          <View style={styles.containerSignIn}>
            <Text style={styles.textTitle}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
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
            </KeyboardAvoidingView>
            <Button onPress={onLogin} buttonTitle="Увійти" />
            <View style={styles.buttonSignInContainer}>
              <Text style={[styles.baseText, styles.buttonText]}>
                Немає акаунту?
              </Text>
              <Pressable onPress={onSignUp}>
                <Text style={[styles.baseText, styles.buttonSignInText]}>
                  Зареєструватися
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
