import { StyleSheet, Pressable, View, Alert } from "react-native";
import ArrowUp from "../../icons/ArrowUp";
import { colors } from "../../styles/global";
import { addComment } from "../utils/firestore";
import { useDispatch } from "react-redux";

const SendArrowButton = ({
  userId,
  postId,
  comment,
  handleInputChange,
  getComent,
}) => {
  const dispatch = useDispatch();

  const newComment = { id: Date.now(), text: comment };

  const onSendComment = async (userId, postId, newComment) => {
    await addComment(userId, postId, newComment);
    await getComent(userId, postId, dispatch);
  };

  return (
    <Pressable
      accessible={true}
      accessibilityLabel="Send"
      onPress={() => {
        onSendComment(userId, postId, newComment);
        handleInputChange("comment", "");
      }}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View>
        <ArrowUp width="10" height="14" />
      </View>
    </Pressable>
  );
};

export default SendArrowButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 34,
    height: 34,
    right: 8,
    borderRadius: 50,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  pressed: {
    opacity: 0.6,
  },
});
