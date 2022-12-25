import { StyleSheet, View } from "react-native";
import { createCompleteTodoAction, createRemoveTodoAction } from "../constants";
import Task from "./Task";

const TaskList = ({ tasks = [], dispatch }) => {
  const deleteTask = (id) => {
    dispatch(createRemoveTodoAction(id));
  };

  const toggleTaskComplete = (id) => {
    dispatch(createCompleteTodoAction(id));
  };
  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          deleteTask={deleteTask}
          toggleTaskComplete={toggleTaskComplete}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default TaskList;
