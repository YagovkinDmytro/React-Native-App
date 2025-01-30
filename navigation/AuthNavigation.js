import { createStackNavigator } from "@react-navigation/stack";
import LogoutButton from "../src/components/LogoutButton";
import RegistrationScreen from "../src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../src/screens/LoginScreen/LoginScreen";
import PostsScreen from "../src/screens/PostsScreen/PostsScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login Screen" }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ title: "Registration Screen" }}
      />
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{ title: "Posts Screen" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
