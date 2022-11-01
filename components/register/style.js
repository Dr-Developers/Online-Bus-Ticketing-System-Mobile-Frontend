import { StyleSheet } from "react-native";
import { darkGrey, darkRed } from "../../colors/Colors";

const styles = StyleSheet.create({
	radioWrap: {
		flexDirection: "row",
		alignItems: "flex-start",
		alignSelf: "flex-start",
		marginRight: 30,
		paddingRight: 30,
	},
	wrapper: {
		borderRadius: 100,
		color: { darkGrey },
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: "80%",
		backgroundColor: "rgb(220,220,220)",
		marginVertical: 9,
	},
	contain: {
		minHeight: 128,
	},
	login: {
		color: "white",
		fontSize: 64,
		fontWeight: "bold",
		marginVertical: 50,
	},
	registry: {
		color: "white",
		fontSize: 50,
		fontWeight: "bold",
		marginTop: 0,
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
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
		paddingTop: 15,
		alignItems: "center",
	},
	heading: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
		marginBottom: 20,
		letterSpacing: 1,
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
		marginBottom: 10,
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
