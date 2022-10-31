import React, { useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Background from "../background/Background";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";

const Register = (props) => {
	// 
	return (
		<Background>
			<View style={style.container}>
				<Text style={style.regist}>Register</Text>
				<Text style={style.heading}>Create a new account</Text>
				<View style={style.registerContainer}>
					<InputField
						placeholder="Full Name"
						
					/>
                    <InputField
						placeholder="Email Address"
						keyboardType={"email-address"}
						
					/>
                    <InputField
                    placeholder="NIC/Passport Number"
                    
                />
                <InputField
                    placeholder="Phone Number"
                    
                />
                <InputField
                    placeholder="Username"
                    
                />
					<InputField
						placeholder="Password"
						secureTextEntry={true}
						
					/>
					<InputField
						placeholder="Are you a Passenger/ Driver/ Inspector"
						
						
					/>
					
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Register"
						Press={() => {
							alert("Account created");
							props.navigation.navigate("Login");
						}}
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
