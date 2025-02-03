import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../styles/global";

import PostsScreen from "../src/screens/PostsScreen/PostsScreen";
import ProfileScreen from "../src/screens/ProfileScreen/ProfileScreen";
import GridIcon from "../icons/GridIcon";
import UserIcon from "../icons/UserIcon";
import PlusIcon from "../icons/PlusIcon";
import LogoutButton from "../src/components/LogoutButton";
import BackArrowLeftBotton from "../src/components/BackArrowLeftButton";
import CreatePostNavigator from "./CreatePostNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontWeight: "500",
          fontSize: 17,
          lineHeight: 22,
          color: colors.black_primary,
          textAlign: "center",
        },
        tabBarLabel: "",
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.white,
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
          } else if (route.name === "CreatePostNavigator") {
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
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => <LogoutButton outerStyles={styles.buttonLogout} />,
          title: "Публікації",
        }}
      />
      <Tab.Screen
        name="CreatePostNavigator"
        component={CreatePostNavigator}
        options={{
          headerShown: false,
          headerLeft: () => <BackArrowLeftBotton />,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 20,
    marginTop: 9,
  },
  activeTab: {
    backgroundColor: colors.orange,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },
  buttonLogout: {
    marginRight: 16,
  },
});
