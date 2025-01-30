import { StyleSheet, View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../styles/global";

import PostsScreen from "../src/screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "../src/screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../src/screens/ProfileScreen/ProfileScreen";
import GridIcon from "../icons/GridIcon";
import UserIcon from "../icons/UserIcon";
import PlusIcon from "../icons/PlusIcon";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: "",
        tabBarStyle: {
          width: 300,
          height: 60,
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          marginTop: 9,
        },
        tabBarIcon: ({ focused }) => {
          let IconComponent;
          let iconProps = {
            stroke: focused ? colors.white : colors.black_primary,
            width: 24,
            height: 24,
          };

          if (route.name === "Posts") {
            IconComponent = GridIcon;
          } else if (route.name === "CreatePosts") {
            IconComponent = PlusIcon;
          } else if (route.name === "Profile") {
            IconComponent = UserIcon;
          }

          return (
            <View style={[styles.tabContainer, focused && styles.activeTab]}>
              <IconComponent {...iconProps} />
            </View>
          );
        },
        tabBarButton: (props) => <Pressable {...props} />,
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          opacity: 0,
          animationEnabled: false,
          tabBarPressOpacity: 0,
          tabBarPressColor: "white",
        }}
      />
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{
        //   tabBarStyle: {
        //     display: "none",
        //     headerShown: false,
        //   },
        // }}
        // screenOptions={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: colors.orange,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },
});
