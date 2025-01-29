import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import UserCard from "../../components/UserCard";
import PostCardItem from "../../components/PostCardItem";
import { colors } from "../../../styles/global";

const dataPosts = [
  {
    id: 1,
    title: "Ліс",
    messages: 0,
    location: "Ivano-Frankivs'k Region, Ukraine",
    picture: require("../../../assets/images/Forest.png"),
  },
  {
    id: 2,
    title: "Захід на Чорному морі",
    messages: 0,
    location: "Odessa, Ukraine",
    picture: require("../../../assets/images/Sunset.png"),
  },
  {
    id: 3,
    title: "Старий будиночок у Венеції",
    messages: 0,
    location: "Venezia, Italy",
    picture: require("../../../assets/images/House.png"),
  },
];

const PostsScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.3)",
        backgroundColor: colors.white,
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.container}>
        <UserCard />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <PostCardItem data={dataPosts} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    gap: 32,
  },
});
