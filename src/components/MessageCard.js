import { StyleSheet, Image, Text, View } from "react-native";
import { colors } from "../../styles/global";

const MessageCard = ({ commentsInfo }) => {
  const noImageAvatar = require("../../assets/images/noImageAvatar.png");

  return commentsInfo.map(({ id, text, time, avatar, sender }) => {
    return (
      <View style={styles.containerMessages} key={id}>
        <Image
          style={styles.imageAvatar}
          source={avatar ? { uri: avatar } : noImageAvatar}
        />
        <View style={styles.containerMessagesInfo}>
          <Text style={styles.baseText}>{text}</Text>
          <Text style={[styles.baseText, styles.dataText, styles.dataRihgt]}>
            {time}
          </Text>
        </View>
      </View>
    );
  });
};

export default MessageCard;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: colors.black_primary,
  },
  containerMessages: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  containerMessagesInfo: {
    flexShrink: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: colors.light_gray,
    gap: 8,
  },
  dataText: {
    color: colors.text_gray,
  },
  imageAvatar: {
    borderRadius: 50,
    width: 28,
    height: 28,
    backgroundColor: colors.light_gray,
  },
  dataRihgt: {
    alignSelf: "flex-end",
  },
});
