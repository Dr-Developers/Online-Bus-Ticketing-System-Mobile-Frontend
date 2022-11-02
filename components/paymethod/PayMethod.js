import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text, ToastAndroid, TouchableOpacity  } from "react-native";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";

const Payment = (props) => {
	
	return (
		
			
					<View style={style.im}>
						
					<ImageBackground source={require('../../assets/payment.jpg')} style={{height: '100%'}}/>
					<View style={style.registerContainer}>
					<Text style={style.heading}>Please Enter Your </Text>
                <Text style={style.heading}>Email Address </Text>
					<InputField
						placeholder="Email Address"
						
					/>
                    
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Pay"
						Press={() => {
							
							props.navigation.navigate("CardDetails");
						}}
					/>
					</View>
					
					</View>
					
				
		
	);
};

export default Payment;
