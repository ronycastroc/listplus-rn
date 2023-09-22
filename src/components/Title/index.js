import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.titleContent}>
      <View style={styles.circle}>
        <Text style={styles.title}>List+</Text>
      </View>
    </View>
  );
}