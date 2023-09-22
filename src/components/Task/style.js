import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    width: "70%",
  },
  titleContent:{
    width: "120%",
    justifyContent: "center",
    alignItems: "center",
  }, 
  taskTitle: {
    fontSize: 29.5,
    color: "#DBD8D1",
    textAlign: "center",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#9A2528",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 17.5,
  },
  textButton: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 3,
    textAlign: "center",
  }
});

export default styles;