import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContent: {
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    width: "100%"
  },
  form: {
    width: "80%",
    backgroundColor: "#DBD8D1",
    paddingLeft: 10,
    borderRadius: 50,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "black",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center"
  }
});

export default styles;