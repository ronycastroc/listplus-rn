import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Minha Lista de Tarefas</Text>
    </View>
  );
}