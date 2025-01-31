import { createStackNavigator } from "@react-navigation/stack";
import LogoutButton from "../src/components/LogoutButton";

const Stack = createStackNavigator();

const TopNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerRight: () => <LogoutButton />,
      }}
    ></Stack.Navigator>
  );
};

export default TopNavigation;
