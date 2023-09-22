import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    width: "70%",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#9A2528",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 17.5
  },
  textButton: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 3,
    textAlign: "center"
  }
});

export default styles;