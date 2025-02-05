import { StyleSheet, Pressable, View } from "react-native";
import LogoutIcon from "../../icons/LogoutIcon";
import { useDispatch } from "react-redux";
import { logoutDB } from "../utils/auth";

const LogoutButton = ({ outerStyles }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    logoutDB(dispatch);
  };

  return (
    <Pressable
      accessible={true}
      accessibilityLabel="Logout"
      onPress={onLogout}
      style={({ pressed }) => [pressed && styles.pressed, outerStyles]}
    >
      <View>
        <LogoutIcon width="24" height="24" />
      </View>
    </Pressable>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
