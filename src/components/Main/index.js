import { View } from "react-native";
import Form from "../Form";
import Task from "../Task";
import styles from "./style";
import { useState } from "react";

export default function Main() {
  const [todo, setTodo] = useState([]);

  return (
    <View style={styles.mainContainer}>
      <Form todo={todo} setTodo={setTodo}/>
      <Task />
    </View>
  );
}