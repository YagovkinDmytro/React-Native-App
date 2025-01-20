import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Alert,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import styles from "./stylesRegistrationScreen";
import ShowPasswordButton from "../../components/ShowPasswordButton.js";

import CirclePlusSvg from "../../../icons/CirclePlusSvg";

const registrationScreen = () => {
  const imageBG = require("../../../assets/images/Photo_BG.jpg");

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleShowAlertMessage = () => {
    Alert.alert("Title", "Message", [
      { text: "Maybe", onPress: () => console.log("Maybe pressed") },
      { text: "No", onPress: () => console.log("No pressed") },
      { text: "Yes", onPress: () => console.log("Yes pressed") },
    ]);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
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
            <TextInput
              value={login}
              style={styles.input}
              placeholder="Логін"
              onChangeText={setLogin}
            />
            <TextInput
              value={email}
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
            />
            <View>
              <TextInput
                value={password}
                style={styles.input}
                placeholder="Пароль"
                onChangeText={setPassword}
                secureTextEntry={isPasswordVisible}
              />
              <ShowPasswordButton
                showPassword={showPassword}
                isPasswordVisible={isPasswordVisible}
              />
            </View>
          </View>
          <Pressable
            onPress={handleShowAlertMessage}
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
