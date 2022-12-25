import { Pressable } from "react-native";

const ActionButton = ({ children, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default ActionButton;
