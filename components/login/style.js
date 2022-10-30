import { StyleSheet } from "react-native";
import { darkGrey, darkRed } from "../../colors/Colors";

const styles = StyleSheet.create({
  login: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
    marginVertical: 50,
  },
  container: {
    alignItems: "center",
    width: 400,
    marginTop: 50,
  },
  loginContainer: {
    backgroundColor: "white",
    height: 700,
    width: 400,
    borderTopLeftRadius: 100,
    paddingTop: 100,
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    color: "#ad2b20",
    fontWeight: "bold",
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
