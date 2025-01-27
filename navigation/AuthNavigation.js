import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../src/screens/LoginScreen/LoginScreen";
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
