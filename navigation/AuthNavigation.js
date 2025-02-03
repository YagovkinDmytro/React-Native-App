import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../src/screens/LoginScreen/LoginScreen";
import BottomNavigation from "../navigation/BottomNavigation";
import MapScreenLocation from "../src/screens/MapScreenLocation/MapScreenLocation";
import CommentsScreen from "../src/screens/CommentsScreen/CommentsScreen";
import BackArrowLeftBotton from "../src/components/BackArrowLeftButton";
import { colors } from "../styles/global";

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
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
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
