import React from "react";
import { View, ImageBackground } from "react-native";

const Background = ({children}) => {
    return(
        <View>
            <ImageBackground source={require('../../assets/login-background.jpg')} style={{height: '100%'}}/>
            <View>
                {children}
            </View>
        </View>
    )
};

export default Background;