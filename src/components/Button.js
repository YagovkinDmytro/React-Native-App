import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "../../styles/global";

const Button = ({
  children,
  buttonTitle,
  onPress,
  buttonStyle,
  buttonStyleText,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        buttonStyle,
      ]}
    >
      {buttonTitle && (
        <Text style={[styles.baseText, styles.buttonTitle, buttonStyleText]}>
          {buttonTitle}
        </Text>
      )}
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    height: 51,
    backgroundColor: colors.orange,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  pressed: {
    opacity: 0.6,
  },
  buttonTitle: {
    color: colors.white,
  },
});
