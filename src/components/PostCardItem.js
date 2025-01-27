import { Image, View, Text, StyleSheet } from "react-native";
import MessageIcon from "../../icons/MessageIcon";
import MapPinIcon from "../../icons/MapPinIcon";

const PostCardItem = ({ source }) => {
  return (
    <View>
      <View>
        <Image style={styles.img} source={source} />
      </View>
      <Text>Ліс</Text>
      <View>
        <MessageIcon width="24" height="24" />
        <Text>0</Text>
      </View>
      <View>
        <MapPinIcon width="24" height="24" />
        <Text>Ivano-Frankivs'k Region, Ukraine</Text>
      </View>
    </View>
  );
};

export default PostCardItem;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "240",
    borderRadius: 8,
  },
});
