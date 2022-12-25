import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ActionButton from "./ActionButton";

const Task = ({
  id,
  description,
  deleteTask,
  completed,
  toggleTaskComplete,
}) => {
  return (
    <View style={[styles.container, completed ? styles.taskCompleted : ""]}>
      <ActionButton
        onPress={() => {
          toggleTaskComplete(id);
        }}
      >
        <MaterialIcons
          name={completed ? "check-box" : "check-box-outline-blank"}
          size={18}
          color="#fff"
        />
      </ActionButton>
      <Text style={styles.task}>{description}</Text>
      <View style={styles.actionsContainer}>
        <ActionButton
          onPress={() => {
            deleteTask(id);
          }}
        >
          <MaterialIcons name="delete" size={18} color="#fff" />
        </ActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 12,
    color: "white",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "tomato",
  },
  task: {
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    flexShrink: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    backgroundColor: "green",
    color: "black",
  },
  actionsContainer: {
    flexDirection: "row",
  },
});

export default Task;
