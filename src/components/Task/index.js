import { Text, View } from "react-native";
import { CheckBox } from '@rneui/themed';
import styles from "./style";

export default function Task() {
  return (
    <View>
      <View style={styles.taskBox}>
        <CheckBox checked size={25} checkedColor="black" />
        <Text>Estudar</Text>
      </View>
      <View style={styles.taskBox}>
        <CheckBox size={25}/>
        <Text>Ler um livro</Text>
      </View>
    </View>
  );
}