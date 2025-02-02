import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../../icons/ArrowLeft";

const BackArrowLeftBotton = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      accessible={true}
      accessibilityLabel="Back"
      onPress={onBack}
      style={({ pressed }) => [styles.buttonBack, pressed && styles.pressed]}
    >
      <View>
        <ArrowLeft width="24" height="24" />
      </View>
    </Pressable>
  );
};

export default BackArrowLeftBotton;

const styles = StyleSheet.create({
  buttonBack: {
    marginLeft: 16,
  },
  pressed: {
    opacity: 0.6,
  },
});
