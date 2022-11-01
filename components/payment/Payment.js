import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text, ToastAndroid, TouchableOpacity  } from "react-native";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";

const Payment = (props) => {
	// 
	return (
		
			
					<View style={style.im}>
						
					<ImageBackground source={require('../../assets/travel-card.png')} style={{height: '100%'}}/>
					<View style={style.registerContainer}>
					<Text style={style.heading}>Please Enter The </Text>
                <Text style={style.heading}>Travel Card Details </Text>
					<InputField
						placeholder="Card Number"
						
					/>
                    
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="ADD"
						Press={() => {
							alert("Card Details Added");
							props.navigation.navigate("Amount");
						}}
					/>
					</View>
					
					</View>
					
				
		
	);
};

export default Payment;
