import { View, StyleSheet, TextInput, Text } from "react-native";
import ActionButton from "../../components/ActionButton";
import { useState } from "react";

const AddTask = ({ navigation }) => {
  const [todo, setTodo] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.task_label}>Todo</Text>
      <View style={styles.task_input_container}>
        <TextInput
          value={todo}
          onChangeText={(text) => setTodo(text)}
          style={styles.task_input}
          multiline
          editable
          numberOfLines={2}
          maxLength={1000}
        />
      </View>
      {todo && (
        <ActionButton style={styles.add_todo_btn} onPress={() => {}}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Add todo</Text>
        </ActionButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 25,
    backgroundColor: "#333",
  },
  task_label: {
    marginBottom: 10,
    fontSize: 20,
    color: "#fff",
  },
  task_input_container: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "yellow",
    alignItems: "center",
  },
  task_input: {
    width: "100%",
    padding: 15,
    color: "#fff",
    fontSize: 20,
    border: 1,
  },
  add_todo_btn: {
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 12,
    margin: 20,
  },
});

export default AddTask;
