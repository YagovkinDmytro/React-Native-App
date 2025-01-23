import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../styles/global";

const ShowPasswordButton = ({ showPassword, isPasswordVisible }) => {
  return (
    <TouchableOpacity onPress={showPassword} style={styles.showButton}>
      {isPasswordVisible ? (
        <Text style={[styles.baseText, styles.passwordButtonText]}>
          Показати
        </Text>
      ) : (
        <Text style={[styles.baseText, styles.passwordButtonText]}>
          Приховати
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  passwordButtonText: {
    color: colors.blue,
  },
  showButton: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});

export default ShowPasswordButton;
