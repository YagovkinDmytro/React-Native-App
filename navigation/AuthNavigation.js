import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../src/screens/LoginScreen/LoginScreen";
import LogoutButton from "../src/components/LogoutButton";
const MainStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          title: "Login Screen",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => <LogoutButton />,
        }}
      />
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: true }}
      />
    </MainStack.Navigator>
  );
};

export default AuthNavigation;
