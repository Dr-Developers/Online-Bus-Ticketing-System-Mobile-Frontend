import { StyleSheet } from "react-native";
import { darkGrey, darkRed } from "../../colors/Colors";

const styles = StyleSheet.create({
  login: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
    marginVertical: 50,
  },
  regist: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 1,
  },
  container: {
    alignItems: "center",
    width: 400,
    marginTop: 50,
  },
  registerContainer: {
    backgroundColor: "white",
    height: 7000,
    width: 400,
    borderTopLeftRadius: 100,
    paddingTop: 50,
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subHeading: {
    color: "gray",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
  },
  forgetHolder: {
    alignItems: "flex-end",
    width: "78%",
    paddingRight: 16,
    marginBottom: 30,
  },
  forget: {
    color: darkRed,
    fontWeight: "bold",
    fontSize: 16,
  },
  footerHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  account: {
    color: darkGrey,
    fontWeight: "bold",
    fontSize: 16,
  },
  register: {
    color: darkRed,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
