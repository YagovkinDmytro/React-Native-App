import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import BottomNavigation from "./BottomNavigation";
import MapScreenLocation from "../screens/MapScreenLocation/MapScreenLocation";
import CommentsScreen from "../screens/CommentsScreen/CommentsScreen";
import BackArrowLeftBotton from "../components/BackArrowLeftButton";
import { colors } from "../../styles/global";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen
        name="Map"
        component={MapScreenLocation}
        options={{
          headerShown: true,
          headerLeft: () => <BackArrowLeftBotton />,
          title: "Карта",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: true,
          headerLeft: () => <BackArrowLeftBotton />,
          title: "Коментарі",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
