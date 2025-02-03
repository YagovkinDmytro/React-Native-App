import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "../src/screens/CreatePostsScreen/CreatePostsScreen";
import BackArrowLeftBotton from "../src/components/BackArrowLeftButton";
import CameraScreen from "../src/screens/CameraScreen/CameraScreen";
import { colors } from "../styles/global";

const Stack = createStackNavigator();

const CreatePostNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreatePostsScreen"
      screenOptions={{
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
    >
      <Stack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => <BackArrowLeftBotton />,
          title: "Створити публікацію",
        }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerLeft: () => <BackArrowLeftBotton />,
          title: "Камера",
        }}
      />
    </Stack.Navigator>
  );
};

export default CreatePostNavigation;
