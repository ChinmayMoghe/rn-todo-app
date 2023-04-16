import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TodosContext } from "../../context/TodosContext";
import AddTaskBtn from "../../components/AddTaskBtn";
import TaskList from "../../components/TaskList";
import WithStatusBar from "../WithStatusBar";

const Home = ({ navigation }) => {
  const { todos, dispatch } = useContext(TodosContext);
  return (
    <View style={styles.container}>
      <TaskList tasks={todos} dispatch={dispatch} />
      <AddTaskBtn navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#333",
    padding: 25,
  },
});

export default Home;
