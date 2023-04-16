import { StyleSheet, View } from "react-native";
import ActionButton from "./ActionButton";
import { MaterialIcons } from "@expo/vector-icons";

const AddTaskBtn = ({ navigation }) => {
  return (
    <ActionButton
      style={styles.container}
      onPress={() => {
        navigation.navigate("Add Todo");
      }}
    >
      <View>
        <MaterialIcons name="add" size={50} color="#fff" />
      </View>
    </ActionButton>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 12,
    padding: 10,
  },
});
export default AddTaskBtn;
