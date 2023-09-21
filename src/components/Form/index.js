import { View, TextInput, TouchableOpacity, Button } from "react-native";

export default function Form() {
  return (
    <View>
      <TextInput placeholder="Adicione uma tarefa"/>
      <Button title="+"/>
    </View>
  );
}