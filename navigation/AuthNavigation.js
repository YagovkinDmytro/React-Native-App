import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../src/screens/LoginScreen/LoginScreen";
import BottomNavigation from "../navigation/BottomNavigation";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
