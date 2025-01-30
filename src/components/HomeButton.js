import { StyleSheet, View } from "react-native";
import GridIcon from "../../icons/GridIcon";

const HomeButton = () => {
  return (
    <View style={styles.container}>
      <GridIcon
      // name="Home"
      // size={24}
      // color={focused ? colors.orange : colors.black_primary}
      />
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
