import React, { useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Background from "../background/Background";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";

const InspectionAdd = (props) => {
	// 
	return (
		<Background>
			<View style={style.container}>
				<Text style={style.regist}>Add New Inspection</Text>
				
				<View style={style.registerContainer}>
					<InputField
						placeholder="Route ID"
						
					/>
                    <InputField
						placeholder="Time"
						
						
					/>
                    <InputField
                    placeholder="Date/Month/Year"
                    keyboardType={"Date"}
                    
                />
                <InputField
                    placeholder="Inspector Name"
                    
                />
                
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Submit"
						Press={() => {
							alert("Inspection created");
							props.navigation.navigate("Home");
						}}
					/>
					
					<Text style={style.account}></Text>
				</View>
			</View>
		</Background>
	);
};

export default InspectionAdd;
