import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  circle: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "red",
    elevation: 100,
  },  
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  }
});

export default styles;