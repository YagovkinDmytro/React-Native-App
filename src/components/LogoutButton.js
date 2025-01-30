import { StyleSheet, Pressable, View } from "react-native";
import LogoutIcon from "../../icons/LogoutIcon";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation();

  const onLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <Pressable
      accessible={true}
      accessibilityLabel="Logout"
      onPress={onLogout}
      style={({ pressed }) => [styles.buttonLogout, pressed && styles.pressed]}
    >
      <View>
        <LogoutIcon width="24" height="24" />
      </View>
    </Pressable>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  buttonLogout: {
    marginLeft: "auto",
    marginTop: 22,
    marginRight: 16,
  },
  pressed: {
    opacity: 0.6,
  },
});
