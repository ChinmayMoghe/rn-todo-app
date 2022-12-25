import { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import {
  ADD_TODO,
  COMPLETED_TODO,
  REMOVE_TODO,
  TOGGLE_TODO_COMPLETE,
} from "./constants";

const INITIAL_TASKS_STATE = [
  {
    id: 1,
    description:
      "Demo todoasdasdasdasadasdasdasdasdasddasdasdasdasddasdasdasdasdasdadasdsdasdasdasdasdasdasdasdasdasdasdasd",
    completed: false,
  },
];
const tasksReducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO_COMPLETE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function App() {
  const [todos, dispatch] = useReducer(tasksReducer, INITIAL_TASKS_STATE);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO List</Text>
      <TaskList tasks={todos} dispatch={dispatch} />
      <AddTask dispatch={dispatch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 25,
    paddingTop: 40,
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
