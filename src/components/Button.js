import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "../../styles/global";

const Button = ({
  children,
  buttonTitle,
  onPress,
  buttonStyle,
  buttonStyleText,
  disabled,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        buttonStyle,
        disabled && styles.disabledButton,
      ]}
    >
      {buttonTitle && (
        <Text
          style={[
            styles.baseText,
            styles.buttonTitle,
            buttonStyleText,
            disabled && styles.disabledButtonTitle,
          ]}
        >
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
  disabledButton: {
    backgroundColor: colors.light_gray,
  },
  disabledButtonTitle: {
    color: colors.text_gray,
  },
});
