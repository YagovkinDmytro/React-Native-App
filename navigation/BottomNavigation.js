import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../../styles/global";

import LogoutButton from "../components/LogoutButton";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={({ navigation }) => ({
        tabBarLabel: "label",
        tabBarStyle: {
          display: "flex",
          paddingVertical: 16,
        },
      })}
    >
      <Tab.Screen
        name=""
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="map"
              size={32}
              color={focused ? colors.orange : "black"}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Profile",
          headerRightContainerStyle: { paddingRight: 8 },
          headerRight: () => (
            <LogoutButton onPress={() => console.log("log out")} />
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={32}
              color={focused ? colors.orange : "black"}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavigation;
