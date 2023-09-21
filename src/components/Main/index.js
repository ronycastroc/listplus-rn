import { View } from "react-native";
import Form from "../Form";
import Task from "../Task";
import styles from "./style";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Form />
      <Task />
    </View>
  );
}