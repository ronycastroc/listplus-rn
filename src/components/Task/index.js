import { Text, View } from "react-native";
import { CheckBox } from '@rneui/themed';

export default function Task() {
  return (
    <View>
      <View>
        <CheckBox />
        <Text>Estudar</Text>
      </View>
      <View>
        <CheckBox />
        <Text>Ler um livro</Text>
      </View>
    </View>

  );
}