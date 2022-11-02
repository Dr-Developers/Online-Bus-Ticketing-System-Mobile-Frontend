import React, { useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Background from "../background/Background";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";
import { IP } from "@env";
import axios from "axios";

const InspectionAdd = (props) => {
	const [routeID, setRouteID] = useState("");
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");
	const [insName, setInsName] = useState("");
	const [inq, setInq] = useState("");

	const navigate = () => props.navigation.navigate("Home");

	const onSubmit = async () => {
		if (
			routeID === "" ||
			time === "" ||
			date === "" ||
			insName === "" ||
			inq === ""
		) {
			ToastAndroid.showWithGravity(
				"Inspection: Fields are Empty",
				ToastAndroid.SHORT,
				ToastAndroid.CENTER,
			);
		} else {
			try {
				const data = {
					routeId: routeID,
					time: time,
					date: date,
					inspectorName: insName,
					enquiries: inq,
				};

				console.log("IP: ", IP);

				await axios
					.post(`http://${IP}/api/inspection/add`, data)
					.then((result) => {
						ToastAndroid.showWithGravity(
							"Inspection: Successfully Added!",
							ToastAndroid.SHORT,
							ToastAndroid.CENTER,
						);
						// setRouteID("");
						// setTime("");
						// setDate("");
						// setInsName("");
						// setInq("");
						// navigate();
					})
					.catch((error) => {
						console.log("Cannot Post Your Request: ", error);
						ToastAndroid.showWithGravity(
							"Inspection: Failed to Add!",
							ToastAndroid.SHORT,
							ToastAndroid.CENTER,
						);
					});
			} catch (e) {
				console.log("Catch Error: ", e);
			}
		}
	};

	return (
		<Background>
			<View style={style.container}>
				<Text style={style.registry_1}>Add</Text>
				<Text style={style.registry}>New Inspection</Text>

				<View style={style.registerContainer}>
					<InputField
						value={routeID}
						placeholder="Route ID"
						onChangeText={(text) => setRouteID(text)}
					/>
					<InputField
						value={time}
						placeholder="Time - (Ex: 12.00PM)"
						onChangeText={(text) => setTime(text)}
					/>
					<InputField
						value={date}
						placeholder="Date/Month/Year"
						keyboardType={"Date"}
						onChangeText={(text) => setDate(text)}
					/>
					<InputField
						value={insName}
						placeholder="Inspector Name"
						onChangeText={(text) => setInsName(text)}
					/>

					<InputField
						value={inq}
						placeholder="Inquiries"
						onChangeText={(text) => setInq(text)}
					/>

					<Button
						bgColor={red}
						textColor="white"
						BtnLabel="Submit"
						Press={onSubmit}
					/>

					<Text style={style.account}></Text>
				</View>
			</View>
		</Background>
	);
};

export default InspectionAdd;
