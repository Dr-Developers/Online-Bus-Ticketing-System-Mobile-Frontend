import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ToastAndroid } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import qr from "../../assets/qr-image.png";
import { darkGrey, darkRed, red } from "../../colors/Colors";
import axios from "axios";

const InspectionView = (props) => {
	const [inspections, setInspections] = useState([]);

	const [inspectionID, setinspectionID] = useState("");
	const [routeID, setRouteID] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [inquire, setInquire] = useState("");
	const [id, setID] = useState("");

	useEffect(() => {
		const fetchInspections = async () => {
			await axios
				.get("http://172.28.30.78:5000/api/inspection/all")
				.then((res) => {
					setInspections(res.data);
				})
				.catch((e) => {
					console.log("error: ", e);
				});
		};
		fetchInspections();
	}, []);

	const onDelete = async (ID) => {
		await axios
			.delete("http://172.28.30.78:5000/api/inspection/delete/", ID)
			.then(() => {
				ToastAndroid.showWithGravity(
					"Inspection: Successfully Deleted!",
					ToastAndroid.SHORT,
					ToastAndroid.CENTER,
				);
			});
	};

	return (
		// implemented with Text and Button as children
		<ScrollView
			style={{
				backgroundColor: "3a3a3a",
			}}>
			<View
				style={{
					backgroundColor: darkGrey,
				}}>
				<View
					style={{
						alignItems: "center",
						width: 400,
						marginTop: 50,
						marginBottom: 20,
					}}>
					<Text
						style={{
							color: "white",
							fontSize: 50,
							fontWeight: "bold",
							marginVertical: 10,
						}}>
						INSPECTIONS
					</Text>

					<Button
						onPress={() =>
							props.navigation.navigate("InspectionAdd")
						}
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 20,
							marginRight: 20,
							paddingHorizontal: 20,
							borderBottomEndRadius: 20,
							borderBottomStartRadius: 20,
							borderTopStartRadius: 20,
							borderTopEndRadius: 20,
							backgroundColor: "#097969",
						}}
						title="ADD NEW INSPECTION"
					/>
				</View>
				{inspections.map((r) => (
					<Card>
						<Text style={{ marginBottom: 10 }}>
							Inspection ID: {r.inspectionId}
						</Text>
						<Text style={{ marginBottom: 10 }}>
							Route ID: {r.routeId}
						</Text>
						<Text style={{ marginBottom: 10 }}>
							Date: {r.date.split("T")[0]}
						</Text>
						<Text style={{ marginBottom: 10 }}>
							Time: {r.time}
						</Text>
						<Text style={{ marginBottom: 10 }}>
							Inquiries: {r.enquiries}
						</Text>

						<Button
							onPress={() =>
								props.navigation.navigate(
									"InspectionUpdate",
									{
										Id: r._id,
										InspectionID: r.inspectionId,
										Route: r.routeId,
										Time: r.time,
										Date: r.date,
										InspectorName: r.inspectorName,
										Inquire: r.enquiries,
									},
								)
							}
							buttonStyle={{
								borderRadius: 0,
								marginLeft: 0,
								marginRight: 0,
								marginBottom: 10,
								marginTop: 10,
								borderBottomEndRadius: 20,
								borderBottomStartRadius: 20,
								borderTopStartRadius: 20,
								borderTopEndRadius: 20,
								backgroundColor: red,
							}}
							title="UPDATE"
						/>
						{/*<Button*/}
						{/*	// onPress={() => onDelete(r._id)}*/}
						{/*	buttonStyle={{*/}
						{/*		borderRadius: 0,*/}
						{/*		marginLeft: 0,*/}
						{/*		marginRight: 0,*/}
						{/*		marginBottom: 0,*/}
						{/*		borderBottomEndRadius: 20,*/}
						{/*		borderBottomStartRadius: 20,*/}
						{/*		borderTopStartRadius: 20,*/}
						{/*		borderTopEndRadius: 20,*/}
						{/*		backgroundColor: red,*/}
						{/*	}}*/}
						{/*	title="DELETE"*/}
						{/*/>*/}
					</Card>
				))}
			</View>
		</ScrollView>
	);
};

export default InspectionView;
