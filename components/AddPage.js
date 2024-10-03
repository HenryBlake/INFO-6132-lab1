import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
  Switch,
} from "react-native";

export default function AddPage() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const emptyCheck = () => {
    if (inputText.trim() === "") {
      Alert.alert("Error", "Input cannot be empty!");
    } else {
      setTaskList([
        ...taskList,
        { id: Date.now().toString(), task: inputText },
      ]);
      setInputText("");
    }
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderItem = ({ item }) => (
    <View style={style.taskItem}>
      <Text>{item.task}</Text>
      <Text>due</Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={style.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.main}>
      <TextInput
        placeholder="Add item here"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        style={style.input}
      />
      <Button title="Add" onPress={emptyCheck} />
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 10,
    padding: 10,
  },
  taskItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: "white",
  },
});
