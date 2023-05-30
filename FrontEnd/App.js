import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./Comps/Footer";
import LoginScreen from "./src/Login/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
