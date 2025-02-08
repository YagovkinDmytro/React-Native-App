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
} from "react-native";
import { colors } from "../../../styles/global";
import MessageCard from "../../components/MessageCard";
import InputMessage from "../../components/InputMessage";
import { useEffect, useState } from "react";
import SendArrowButton from "../../components/SendMessageButton";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../utils/firestore";
import { setCommentsInfo } from "../../redux/reducers/commentsSlice";

const CommentsScreen = () => {
  const noImagePicture = require("../../../assets/images/noImagePicture.png");
  const dispatch = useDispatch();
  const route = useRoute();
  // const { userId, id, image } = route?.params;
  const params = route?.params;

  const [comments, setComments] = useState({
    comment: "",
  });

  const getComent = async (userId, id, dispatch) => {
    const allComments = await getComments(userId);

    if (allComments && id in allComments) {
      dispatch(setCommentsInfo(allComments[id] || []));
    }
  };

  const commentsInfo = useSelector((state) => state.comments.commentsInfo);
  console.log("commentsInfo in getComent:", commentsInfo);

  useEffect(() => {
    getComent(params.userId, params.id, dispatch);
  }, [dispatch, params.userId, params.id]);

  const handleInputChange = (name, value) => {
    setComments((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="auto" />
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={params.image ? { uri: params.image } : noImagePicture}
          />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <MessageCard commentsInfo={commentsInfo} />
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.inputContainer}>
            <InputMessage
              value={comments.comment}
              placeholder="Коментувати..."
              onChangeText={(value) => handleInputChange("comment", value)}
            >
              <SendArrowButton
                userId={params.userId}
                postId={params.id}
                comment={comments.comment}
                handleInputChange={handleInputChange}
                getComent={getComent}
              />
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
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  inputContainer: {
    margin: 16,
  },
});
