import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "../src/screens/CreatePostsScreen/CreatePostsScreen";
import BackArrowLeftBotton from "../src/components/BackArrowLeftButton";

const Stack = createStackNavigator();

const CreatePostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreatePostsScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => <BackArrowLeftBotton />,
          title: "Створити публікацію",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CreatePostNavigator;
