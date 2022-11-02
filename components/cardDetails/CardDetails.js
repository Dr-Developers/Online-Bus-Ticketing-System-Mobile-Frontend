import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text, ToastAndroid, TouchableOpacity  } from "react-native";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";

const CardDetails = (props) => {
	 
	return (
					<View style={style.im}>
						
					<ImageBackground source={require('../../assets/card.png')} style={{height: '100%'}}/>
					<View style={style.registerContainer}>
					<Text style={style.heading}>Your Payment</Text>
					<InputField
						placeholder=" Name On Card"
						
					/>
                    <InputField
						placeholder=" Card Number"
						
					/>
                    <InputField
						placeholder=" Expiry Date"
						
					/>
                    <InputField
						placeholder=" CVC"
						
					/>
                    <Text style={style.text}>Go here to make your payment</Text>
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Pay"
						Press={() => {
							
							props.navigation.navigate("");
						}}
					/>
					</View>
					
					</View>
					
				
		
	);
};

export default CardDetails;
