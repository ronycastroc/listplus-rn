import { Text, View } from "react-native";
import { CheckBox } from '@rneui/themed';
import styles from "./style";
import { useState } from "react";

export default function Task({ todo }) {
  const [check, setCheck] = useState(todo.map(() => false));

  function toggleCheck(index) {
    const newChecks = [...check];
    newChecks[index] = !newChecks[index];
    setCheck(newChecks);
  };

  return (
    <View>
      {todo.map((task, index) => (
        <View style={styles.taskContent} key={index}>
          <CheckBox
            size={25}
            checkedColor="black"
            onPress={() => toggleCheck(index)}
            checked={check[index]}
          />
          <Text style={{ 
            fontSize: 16,
            textDecorationLine: check[index] ? "line-through" : "none" }}
          >
            {task.name}
          </Text>
        </View>
      ))}
    </View>
  );
}