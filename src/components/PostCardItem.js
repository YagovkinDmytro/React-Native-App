import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import MessageIcon from "../../icons/MessageIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import ThumbsUp from "../../icons/ThumbsUp";
import { colors } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const PostCardItem = ({ screen }) => {
  const navigation = useNavigation();
  const noImagePicture = require("../../assets/images/noImagePicture.png");

  const { posts } = useSelector((state) => state.posts.postsInfo);

  const goToMap = (coordinates) => {
    navigation.navigate("Map", { coordinates });
  };

  const goToComments = ({ userId, id, image }) => {
    navigation.navigate("Comments", { userId, id, image });
  };

  if (!Array.isArray(posts) || posts.length === 0) {
    return <></>;
  }

  return posts.map(
    ({
      id,
      title,
      messages = 0,
      address,
      fullLocation = address,
      image,
      like = 100,
      coordinates = { latitude: 48.492088, longitude: 24.267813 },
      userId,
    }) => {
      return (
        <View style={styles.container} key={id}>
          <View>
            <Image
              style={styles.img}
              source={image ? { uri: image } : noImagePicture}
            />
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.containerInfo}>
            <View style={styles.containerInfoGroup}>
              <Pressable
                accessible={true}
                accessibilityLabel="Go to Comments"
                onPress={() => goToComments({ userId, id, image })}
                style={({ pressed }) => pressed && styles.pressed}
              >
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
              </Pressable>
              {screen && (
                <View style={styles.containerThumbsUp}>
                  <ThumbsUp width="24" height="24" />
                  <Text style={styles.thumbsUpText}>{like}</Text>
                </View>
              )}
            </View>
            <Pressable
              accessible={true}
              accessibilityLabel="Go to Map"
              onPress={() => goToMap(coordinates)}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.containerLocation}>
                <MapPinIcon width="24" height="24" />
                <Text style={styles.locationText}>
                  {screen === "Home" ? address : fullLocation}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      );
    }
  );
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
  pressed: {
    opacity: 0.6,
  },
});
