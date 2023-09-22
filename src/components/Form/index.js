import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { useState } from "react";

export default function Form({ todo, setTodo }) {
  const [inputText, setInputText] = useState("");
  const [refresh, setRefresh] = useState(false);
  
  function handleForm() {
    const body = {
      id: todo.length + 1,
      name: inputText,
    }

    setInputText("");
    setTodo([...todo, body]);
    setRefresh(!refresh);
  }
  
  return (
    <View style={styles.formContent}>
      <TextInput 
        style={styles.form} 
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChangeText={(e) => setInputText(e)}
        />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleForm}
        >
          <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}