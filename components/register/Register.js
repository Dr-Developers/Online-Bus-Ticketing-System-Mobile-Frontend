import React, { useState } from "react";
import {
	ScrollView,
	Text,
	ToastAndroid,
	TouchableOpacity,
	View,
} from "react-native";
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

	const navigate = () => props.navigation.navigate("Login");

	const onRegister = async () => {
		if (
			name === "" ||
			email === "" ||
			number === "" ||
			phone === "" ||
			username === "" ||
			password === "" ||
			type === ""
		) {
			ToastAndroid.showWithGravity(
				"Register: Fields are Empty",
				ToastAndroid.SHORT,
				ToastAndroid.CENTER,
			);
		} else {
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
						ToastAndroid.showWithGravity(
							"Register: Successfully Registered!",
							ToastAndroid.SHORT,
							ToastAndroid.CENTER,
						);
						setFullName("");
						setEmail("");
						setNumber("");
						setPhone("");
						setUsername("");
						setPassword("");
						setType("");
						setNICType(-1);

						navigate();
					})
					.catch((error) => {
						console.log("Cannot Post Your Request: ", error);
						ToastAndroid.showWithGravity(
							"Register: User Already Exist!",
							ToastAndroid.SHORT,
							ToastAndroid.CENTER,
						);
					});
			} catch (e) {
				console.log("Catch Error: ", e);
			}
		}
	};

	return (
		<Background>
			<ScrollView>
				<View style={style.container}>
					<Text style={style.registry}>Register</Text>
					<Text style={style.heading}>Create a new account</Text>
					<View style={style.registerContainer}>
						<InputField
							placeholder="Full Name"
							value={name}
							onChangeText={(text) => setFullName(text)}
						/>
						<InputField
							placeholder="Email Address"
							keyboardType={"email-address"}
							value={email}
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
							value={number}
							onChangeText={(text) => setNumber(text)}
						/>
						<InputField
							placeholder="Phone Number"
							value={phone}
							onChangeText={(text) => setPhone(text)}
						/>
						<InputField
							placeholder="Username"
							value={username}
							onChangeText={(text) => setUsername(text)}
						/>
						<InputField
							placeholder="Password"
							value={password}
							secureTextEntry={true}
							onChangeText={(text) => setPassword(text)}
						/>
						<InputField
							placeholder="Are you a Passenger/ Driver/ Inspector"
							value={type}
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
			</ScrollView>
		</Background>
	);
};

export default Register;
