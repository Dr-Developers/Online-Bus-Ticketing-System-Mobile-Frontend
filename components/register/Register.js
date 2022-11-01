import React, { useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Background from "../background/Background";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";
import RadioForm, {
	RadioButton,
	RadioButtonInput,
	RadioButtonLabel,
} from "react-native-simple-radio-button";
import axios from "axios";
import { IP } from "@env";

const Register = (props) => {
	// adding NIC type value
	let radio = [
		{ label: "NIC", value: 0 },
		{ label: "Passport", value: 1 },
	];

	const [NICType, setNICType] = useState();
	let NIC;

	if (NICType === 0) {
		NIC = "NIC";
	} else if (NICType === 1) {
		NIC = "Passport";
	} else {
		NIC = "Not Selected";
	}

	const [name, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [phone, setPhone] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [type, setType] = useState("");

	console.log("IP: ", IP);
	const onRegister = async () => {
		try {
			const data = {
				name: name,
				email: email,
				nicType: NIC,
				number: number,
				phoneNumber: phone,
				username: username,
				password: password,
				type: type,
			};

			console.log("IP: ", IP);

			await axios
				.post(`http://${IP}/api/user/add`, data)
				.then((result) => {
					console.log("Login: Successfully Registered!");
					ToastAndroid.showWithGravity(
						"Login: Successfully Registered!",
						ToastAndroid.SHORT,
						ToastAndroid.CENTER,
					);
				})
				.catch((error) => {
					console.log("Cannot Post Your Request: ", error);
					ToastAndroid.showWithGravity(
						"Login: Failed to Register!",
						ToastAndroid.SHORT,
						ToastAndroid.CENTER,
					);
				});
		} catch (e) {
			console.log("Catch Error: ", e);
		}
	};

	return (
		<Background>
			<View style={style.container}>
				<Text style={style.registry}>Register</Text>
				<Text style={style.heading}>Create a new account</Text>
				<View style={style.registerContainer}>
					<InputField
						placeholder="Full Name"
						onChangeText={(text) => setFullName(text)}
					/>
					<InputField
						placeholder="Email Address"
						keyboardType={"email-address"}
						onChangeText={(text) => setEmail(text)}
					/>
					<View style={style.wrapper}>
						<RadioForm
							style={style.radioWrap}
							radio_props={radio}
							initial={-1}
							onPress={(value) => {
								setNICType(value);
							}}
							buttonSize={12}
							selectedButtonColor={red}
							buttonColor={red}
							labelStyle={{ marginRight: 50 }}
						/>
					</View>
					<InputField
						placeholder="NIC/Passport Number"
						onChangeText={(text) => setNumber(text)}
					/>
					<InputField
						placeholder="Phone Number"
						onChangeText={(text) => setPhone(text)}
					/>
					<InputField
						placeholder="Username"
						onChangeText={(text) => setUsername(text)}
					/>
					<InputField
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
					<InputField
						placeholder="Are you a Passenger/ Driver/ Inspector"
						onChangeText={(text) => setType(text)}
					/>

					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Register"
						Press={onRegister}
					/>
					<View style={style.footerHolder}>
						<Text style={style.account}>
							Already have an Account ?{" "}
						</Text>
						<TouchableOpacity
							onPress={() =>
								props.navigation.navigate("Login")
							}>
							<Text style={style.register}>Login</Text>
						</TouchableOpacity>
					</View>
					<Text style={style.account}></Text>
				</View>
			</View>
		</Background>
	);
};

export default Register;
