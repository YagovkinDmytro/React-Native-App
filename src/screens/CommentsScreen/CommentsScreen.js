import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../../../styles/global";
import MessageCard from "../../components/MessageCard";
import InputMessage from "../../components/InputMessage";
import { useState } from "react";
import SendArrowButton from "../../components/SendMessageButton";

const messages = [
  {
    id: "1",
    text: "Wow! This sunset is breathtaking! The colors are so vibrant.",
    time: "10 червня, 2023 | 19:45",
    avatar:
      "https://cdn.pixabay.com/photo/2018/11/07/13/24/wild-duck-3800387_1280.jpg",
    sender: "user",
  },
  {
    id: "2",
    text: "I know, right? I captured this moment from the beach last evening!",
    time: "10 червня, 2023 | 19:46",
    avatar:
      "https://cdn.pixabay.com/photo/2020/06/20/18/56/bird-5323575_1280.jpg",
    sender: "friend",
  },
  {
    id: "3",
    text: "Your photography skills are amazing. What camera do you use?",
    time: "10 червня, 2023 | 19:47",
    avatar:
      "https://cdn.pixabay.com/photo/2018/11/07/13/24/wild-duck-3800387_1280.jpg",
    sender: "user",
  },
  {
    id: "4",
    text: "Thanks! I used my phone camera with a bit of color grading.",
    time: "10 червня, 2023 | 19:48",
    avatar:
      "https://cdn.pixabay.com/photo/2020/06/20/18/56/bird-5323575_1280.jpg",
    sender: "friend",
  },
  {
    id: "5",
    text: "Thanks! I used my phone camera with a bit of color grading.",
    time: "10 червня, 2023 | 19:48",
    avatar:
      "https://cdn.pixabay.com/photo/2020/06/20/18/56/bird-5323575_1280.jpg",
    sender: "friend",
  },
  {
    id: "6",
    text: "Thanks! I used my phone camera with a bit of color grading.",
    time: "10 червня, 2023 | 19:48",
    avatar:
      "https://cdn.pixabay.com/photo/2020/06/20/18/56/bird-5323575_1280.jpg",
    sender: "friend",
  },
  {
    id: "7",
    text: "Thanks! I used my phone camera with a bit of color grading.",
    time: "10 червня, 2023 | 19:48",
    avatar:
      "https://cdn.pixabay.com/photo/2020/06/20/18/56/bird-5323575_1280.jpg",
    sender: "friend",
  },
];

const CommentsScreen = () => {
  const picture = require("../../../assets/images/Sunset.png");

  const [user, setMessage] = useState({
    message: "",
  });

  const handleInputChange = (name, value) => {
    setMessage((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="auto" />
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image style={styles.img} source={picture} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <MessageCard messages={messages} />
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.inputContainer}>
            <InputMessage
              value={user.message}
              placeholder="Коментувати..."
              onChangeText={(value) => handleInputChange("message", value)}
            >
              <SendArrowButton message={user.message} />
            </InputMessage>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: colors.black_primary,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    height: "240",
    borderRadius: 8,
    marginBottom: 32,
  },
  inputContainer: {
    margin: 16,
  },
});
