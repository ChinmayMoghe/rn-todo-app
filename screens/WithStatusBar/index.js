import { Platform, StatusBar, StyleSheet, View } from "react-native";

const WithStatusBar = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default WithStatusBar;
