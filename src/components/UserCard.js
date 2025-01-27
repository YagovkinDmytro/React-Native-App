import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import { colors } from "../../styles/global";

const UserCard = () => {
  const avatarUri = {
    uri: "https://cdn.pixabay.com/photo/2018/11/07/13/24/wild-duck-3800387_1280.jpg",
  };
  const noImageAvatar = require("../../assets/images/noImageAvatar.png");

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageAvatar}
        source={avatarUri ? avatarUri : noImageAvatar}
      ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>Donald Duck</Text>
        <Text style={styles.textEmail}>DonaldDuck@gmail.com</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  textName: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    color: colors.black_primary,
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
  cardContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  imageAvatar: {
    borderRadius: 16,
    width: 60,
    height: 60,
    backgroundColor: colors.light_gray,
  },
  textContainer: {},
});
