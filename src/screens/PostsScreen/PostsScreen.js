import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import UserCard from "../../components/UserCard";
import PostCardItem from "../../components/PostCardItem";

const forest = require("../../../assets/images/Forest.png");
const sunset = require("../../../assets/images/Sunset.png");

const PostsScreen = () => {
  return (
    <SafeAreaView
      style={{ borderTopWidth: 1, borderTopColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <StatusBar style="auto" />
      <View style={styles.section}>
        <UserCard />
        <ScrollView>
          <PostCardItem source={forest} />
          <PostCardItem source={sunset} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  section: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    gap: 32,
  },
});
