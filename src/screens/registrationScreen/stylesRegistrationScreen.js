import { StyleSheet } from "react-native";
import { colors } from "../../../styles/global";

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    right: "50%",
    left: "50%",
    top: "-60",
  },
  containerSignUp: {
    width: "100%",
    height: 549,
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  imageAvatar: {
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    alignItems: "center",
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
    letterSpacing: 0.01,
    textAlign: "center",
    color: colors.black_primary,
    marginTop: 92,
  },
  button: {
    height: 51,
    backgroundColor: colors.orange,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 16,
  },
  buttonSignUpText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: colors.white,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    color: colors.blue,
    textAlign: "center",
  },
  buttonAdd: {
    position: "absolute",
    bottom: 14,
    left: 47,
  },
  pressed: {
    opacity: 0.6,
  },
  containerInput: {
    marginTop: 32,
    marginBottom: 43,
    gap: 16,
  },
});

export default styles;
