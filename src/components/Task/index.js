import { Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from '@rneui/themed';
import styles from "./style";
import { useState } from "react";

export default function Task({ todo, setTodo }) {
  function toggleCheck(id) {
    const updatedTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTodo(updatedTodo);
  };

  function deleteTask(id) {
    const newTask = todo.filter((task) => task.id !== id)
    setTodo([...newTask]);
  }

  return (
    <View>
      {todo.map((task, index) => (
        <View style={styles.taskContent} key={index}>
          <CheckBox
            size={25}
            checkedColor="black"
            onPress={() => toggleCheck(task.id)}
            checked={task.checked}
          />
          <View style={styles.taskText}>
            <Text style={{
              fontSize: 16,
              textDecorationLine: task.checked ? "line-through" : "none"
            }}
            >
              {task.name}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => deleteTask(task.id)}
          >
            <Text style={styles.textButton}>x</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}