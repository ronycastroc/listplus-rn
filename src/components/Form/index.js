import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Form() {
  return (
    <View style={styles.formContent}>
      <TextInput style={styles.form} placeholder="Adicione uma tarefa"/>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {}}
        >
          <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}