import { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TodosContext } from "./context/TodosContext";

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETE } from "./constants";
import Home from "./screens/Home";
import AddTask from "./screens/AddTask";
import { View } from "react-native";

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

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, dispatch] = useReducer(tasksReducer, INITIAL_TASKS_STATE);
  return (
    <NavigationContainer>
      <TodosContext.Provider value={{ todos, dispatch }}>
        <Stack.Navigator>
          <Stack.Screen name="Todos" component={Home}></Stack.Screen>
          <Stack.Screen name="Add Todo" component={AddTask}></Stack.Screen>
        </Stack.Navigator>
      </TodosContext.Provider>
    </NavigationContainer>
  );
}
