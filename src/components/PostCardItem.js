import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";
import MessageIcon from "../../icons/MessageIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import ThumbsUp from "../../icons/ThumbsUp";
import { colors } from "../../styles/global";

const PostCardItem = ({ screen, data }) => {
  return data.map(({ id, title, messages, location, picture, like }) => {
    return (
      <View style={styles.container} key={id}>
        <View>
          <Image style={styles.img} source={picture} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerInfo}>
          <View style={styles.containerInfoGroup}>
            <View style={styles.containerMessage}>
              <MessageIcon
                width="24"
                height="24"
                fill={screen === "Home" ? colors.orange : "none"}
                stroke={screen === "Home" ? "none" : colors.text_gray}
              />
              <Text
                style={[
                  styles.messageText,
                  {
                    color:
                      screen === "Home"
                        ? colors.black_primary
                        : colors.text_gray,
                  },
                ]}
              >
                {messages}
              </Text>
            </View>
            {screen && (
              <View style={styles.containerThumbsUp}>
                <ThumbsUp width="24" height="24" />
                <Text style={styles.thumbsUpText}>{like}</Text>
              </View>
            )}
          </View>
          <View style={styles.containerLocation}>
            <MapPinIcon width="24" height="24" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </View>
    );
  });
};

export default PostCardItem;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 32,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInfoGroup: {
    flexDirection: "row",
    gap: 24,
  },
  containerMessage: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  containerThumbsUp: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  containerLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  img: {
    width: "100%",
    height: "240",
    borderRadius: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: colors.black_primary,
  },
  messageText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
  },
  thumbsUpText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
    fontSize: 16,
    textDecorationLine: "underline",
    lineHeight: 19,
    color: colors.black_primary,
  },
});
