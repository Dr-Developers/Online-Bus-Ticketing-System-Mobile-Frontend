import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ textColor, bgColor, BtnLabel, Press }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 300,
        paddingVertical: 8,
        marginVertical: 15,
      }}
      onPress={Press}
    >
      <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>
        {BtnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
