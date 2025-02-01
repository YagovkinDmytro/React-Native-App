import { StyleSheet, Pressable, View, Alert } from "react-native";
import ArrowUp from "../../icons/ArrowUp";
import { colors } from "../../styles/global";

const SendArrowButton = ({ message }) => {
  const onSend = () => {};

  return (
    <Pressable
      accessible={true}
      accessibilityLabel="Send"
      onPress={onSend}
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
