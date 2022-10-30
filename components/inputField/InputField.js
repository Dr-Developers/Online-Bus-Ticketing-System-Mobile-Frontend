import React from "react";
import { TextInput } from "react-native";
import { darkGrey } from "../../colors/Colors";

const InputField = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: { darkGrey },
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "80%",
        backgroundColor: "rgb(220,220,220)",
        marginVertical: 10,
      }}
      placeholderTextColor={darkGrey}
    ></TextInput>
  );
};

export default InputField;
