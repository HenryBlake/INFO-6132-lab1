import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPage from "./components/AddPage";
import ListPage from "./components/ListPage";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <AddPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    width: "100%",
    height: 50,
    backgroundColor: "violet",
    textAlign: "center",
  },
});
