import { StyleSheet } from "react-native";
import { colors } from "../../../styles/global";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: colors.black_primary,
  },
  containerSignIn: {
    width: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  textTitle: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    color: colors.black_primary,
    marginTop: 32,
  },
  pressed: {
    opacity: 0.6,
  },
  buttonSignInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 111,
  },
  buttonText: {
    color: colors.blue,
  },
  buttonSignInText: {
    color: colors.blue,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  buttonAdd: {
    position: "absolute",
    bottom: 14,
    left: 47,
  },
  containerInput: {
    marginTop: 32,
    marginBottom: 43,
    gap: 16,
  },
});

export default styles;
