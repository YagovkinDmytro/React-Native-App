import { StyleSheet, View, Image, Text } from "react-native";
import { colors } from "../../styles/global";
import { useSelector } from "react-redux";

const UserCard = () => {
  const { email, displayName, profilePhoto } = useSelector(
    (state) => state.user.userInfo
  );

  const avatarUri = {
    uri: "https://cdn.pixabay.com/photo/2018/11/07/13/24/wild-duck-3800387_1280.jpg",
  };
  const noImageAvatar = require("../../assets/images/noImageAvatar.png");

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageAvatar}
        source={profilePhoto ? profilePhoto : noImageAvatar}
      ></Image>
      <View>
        <Text style={styles.textName}>{displayName}</Text>
        <Text style={styles.textEmail}>{email}</Text>
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
});
