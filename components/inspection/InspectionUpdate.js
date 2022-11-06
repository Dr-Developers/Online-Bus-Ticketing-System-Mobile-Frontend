import React, { useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Background from "../background/Background";
import InputField from "../inputField/InputField";
import style from "./style";
import { red } from "../../colors/Colors";
import Button from "../button/Button";
import { IP } from "@env";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const InspectionUpdate = (props) => {
	const route = useRoute();

	let inspectionID = route.params.InspectionID;
	let Route = route.params.Route;
	let Date = route.params.Date;
	let Time = route.params.Time;
	let InsName = route.params.InspectorName;
	let Inq = route.params.Inquire;
	let Id = route.params.Id;

	const [routeID, setRouteID] = useState(Route);
	const [time, setTime] = useState(Time);
	const [date, setDate] = useState(Date);
	const [insName, setInsName] = useState(InsName);
	const [inq, setInq] = useState(Inq);

	console.log(Id);

	const navigate = () => props.navigation.navigate("InspectionView");

	const onUpdate = async () => {
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

				try {
					await axios
						.put(
							"http://172.28.30.78:5000/api/inspection/update/" +
								Id,
							data,
						)
						.then((result) => {
							ToastAndroid.showWithGravity(
								"Inspection: Successfully Updated!",
								ToastAndroid.SHORT,
								ToastAndroid.CENTER,
							);
							setRouteID("");
							setTime("");
							setDate("");
							setInsName("");
							setInq("");
							navigate();
						})
						.catch((error) => {
							console.log(
								"Cannot Post Your Request: ",
								error,
							);
							ToastAndroid.showWithGravity(
								"Inspection: Failed to Add!",
								ToastAndroid.SHORT,
								ToastAndroid.CENTER,
							);
						});
				} catch (e) {
					console.log("Catch Error: ", e);
				}
			} catch (e) {
				console.log("error: ", e);
			}
		}
	};

	return (
		<Background>
			<View style={style.container}>
				<Text style={style.registry_1}>Update</Text>
				<Text style={style.registry}>Inspections</Text>

				<View style={style.registerContainer}>
					<InputField
						editable={false}
						value={Route}
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
						BtnLabel="Update Inspection"
						Press={onUpdate}
					/>

					<Text style={style.account}></Text>
				</View>
			</View>
		</Background>
	);
};

export default InspectionUpdate;
