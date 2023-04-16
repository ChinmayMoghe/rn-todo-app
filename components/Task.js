import { Text, View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import { useState } from "react";

const Task = ({
  id,
  description,
  deleteTask,
  completed,
  toggleTaskComplete,
}) => {
  const [isLongPressed, setIsLongPressed] = useState(false);
  return (
    <Pressable
      onLongPress={() => {
        setIsLongPressed(true);
      }}
    >
      <View style={[styles.container, completed ? styles.taskCompleted : ""]}>
        <Text style={styles.task}>{description}</Text>
        {isLongPressed && (
          <View style={styles.actionsContainer}>
            <ActionButton
              onPress={() => {
                toggleTaskComplete(id);
              }}
            >
              <MaterialIcons
                name={completed ? "check-box" : "check-box-outline-blank"}
                size={30}
                color="#fff"
              />
            </ActionButton>
            <ActionButton
              onPress={() => {
                deleteTask(id);
              }}
            >
              <MaterialIcons name="delete" size={30} color="#fff" />
            </ActionButton>
            <ActionButton
              onPress={() => {
                setIsLongPressed(false);
              }}
            >
              <MaterialIcons name="close" size={30} color="#fff" />
            </ActionButton>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 12,
    color: "white",
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "transparent",
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
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Task;
