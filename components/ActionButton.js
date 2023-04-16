import { Pressable } from "react-native";

const ActionButton = ({ children, style, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }, style]}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default ActionButton;
