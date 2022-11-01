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
    flex: 1,
    padding: 2,
    alignItems: "center",
    
  },
  registerContainer: {
    backgroundColor: "white",
    height: 1000,
    width: 430,
    paddingTop: 47,
    alignItems: "center",
  },
  display: {
    fontSize: 35,
    textAlign: "center",
    marginHorizontal: 16,
    marginTop: 45,
    flex: 0.1,
    backgroundColor: "#F5F5F5",
    borderWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 45,
    color: darkGrey,
    fontWeight: "bold",
    marginBottom: 40,
    
  },
  heading1: {
    fontSize: 30,
    color: darkGrey,
    fontWeight: "bold",
    // marginBottom: 60,
    // marginBottom: 40,
     paddingTop: 50,
    
  },
  heading2: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
    marginBottom: 30,
    
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
  im: {
    resizeMode: "center",
    height: 410,
    width: 409,
 
  }
});

export default styles;
