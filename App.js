import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import AuthNavigation from "./navigation/AuthNavigation";
import UserCard from "./src/components/UserCard";
import PostsScreen from "./src/screens/PostsScreen/PostsScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import PostCardItem from "./src/components/PostCardItem";
import CreatePostsScreen from "./src/screens/CreatePostsScreen/CreatePostsScreen";
import BottomNavigation from "./navigation/BottomNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const isLoggedIn = false;

  if (!fontsLoaded) {
    return (
      <View style={style.section}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <BottomNavigation />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
