import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../src/screens/RegistrationScreen/TempRegistrationScreen";
import LoginScreen from "../src/screens/LoginScreen/TempLoginScreen";
import LogoutButton from "../src/components/LogoutButton";
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          title: "Login Screen",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => <LogoutButton />,
        }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
