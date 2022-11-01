import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { Text, ToastAndroid, TouchableOpacity  } from "react-native";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";
import RadioForm from 'react-native-simple-radio-button';

export default function ReactSimpleButton() {
    const [chosenOption, setChosenOption] = useState('Rs.50'); //will store our current user options
    const options = [
      { label: 'Rs.50', value: 'Rs.50' },
      { label: 'Rs.100', value: 'Rs.100' },
      { label: 'Rs.500', value: 'Rs.500' },
      { label: 'Rs.1000', value: 'Rs.1000' },
    ]; //create our options for radio group
    return (
        
			// <View style={style.container}>
      <View style={style.registerContainer}>
        <Text style={style.heading}>Enter Your Amount </Text>
        
        <RadioForm 
          radio_props={options}
          initial={0} //initial value of this group
          buttonColor={'#EE4B2B'}
          onPress={(value) => {
            setChosenOption(value);
          }} //if the user changes options, set the new value
        />
        <Text style={style.display}> {chosenOption}</Text>
       
        <Text style={style.heading1}>OR </Text>
       <Text style={style.heading2}>Enter your amount here</Text> 
        
        <InputField
						placeholder="Amount "
						
					/>
                    
					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Next"
						Press={() => {
							alert("Card Details Added");
							props.navigation.navigate("Amount");
						}}
					/>
     </View>
    //   </View>
		
    );
  }
