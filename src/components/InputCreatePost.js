import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../../styles/global";

const Input = ({
  children,
  value,
  placeholder,
  onChangeText,
  outerStyles,
  autofocus = false,
  secureTextEntry = false,
  onBlur: onBlurCustom,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);

    if (onBlurCustom) {
      onBlurCustom();
    }
  };

  return (
    <View style={[styles.input, isFocused && styles.focused, outerStyles]}>
      <TextInput
        value={value}
        autoFocus={autofocus}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text_gray}
        secureTextEntry={secureTextEntry}
        style={styles.baseText}
        autoCapitalize="none"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: colors.black_primary,
  },
  input: {
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderRadius: 8,
    borderColor: colors.border_gray,
    marginLeft: 16,
    marginRight: 16,
  },
  focused: {
    borderColor: colors.orange,
  },
});

export default Input;
