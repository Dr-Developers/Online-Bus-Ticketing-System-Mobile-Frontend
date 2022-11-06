import React, { useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Background from "../background/Background";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import axios from "axios";
import Button from "../button/Button";
import { IP } from "@env";

const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigateHome = () => props.navigation.navigate("HomeUI");

	const onLogin = async () => {
		try {
			const data = {
				username: username,
				password: password,
			};

			console.log("IP: ", IP);

			await axios
				.post(`http://${IP}/api/login`, data)
				.then((result) => {
					console.log("Login: Successfully Logged!");
					ToastAndroid.showWithGravity(
						"Login: Login Successful!",
						ToastAndroid.SHORT,
						ToastAndroid.CENTER,
					);
					navigateHome();
				})
				.catch((error) => {
					console.log("Cannot Post Your Request: ", error);
					ToastAndroid.showWithGravity(
						"Login: Failed to Login!",
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
				<Text style={style.login}>Login</Text>
				<View style={style.loginContainer}>
					<Text style={style.heading}>Welcome Back</Text>
					<Text style={style.subHeading}>
						Login to Your Account
					</Text>
					<InputField
						placeholder="Email / Username"
						keyboardType={"email-address"}
						onChangeText={(text) => setUsername(text)}
					/>
					<InputField
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
					<View style={style.forgetHolder}>
						<Text style={style.forget}>Forget Password ?</Text>
					</View>
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Login"
						Press={onLogin}
					/>
					<View style={style.footerHolder}>
						<Text style={style.account}>
							Don't Have an Account ?{" "}
						</Text>
						<TouchableOpacity
							onPress={() =>
								props.navigation.navigate("Register")
							}>
							<Text style={style.register}>Register</Text>
						</TouchableOpacity>
					</View>
					<Text style={style.account}></Text>
				</View>
			</View>
		</Background>
	);
};

export default Login;
