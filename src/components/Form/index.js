import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { useState } from "react";

export default function Form({ todo, setTodo }) {
  const [inputText, setInputText] = useState("");

  function handleForm() {
    const body = {
      id: new Date().getTime(),
      name: inputText,
      checked: false
    }

    setInputText("");
    setTodo([...todo, body]);
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