import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import qr from "../../assets/qr-image.png";
import { darkGrey, red } from "../../colors/Colors";
import inspection from "../../assets/inspection.png";
import pay from "../../assets/pay.png";
import qrCode from "../../assets/qr-code.png";

const HomeUI = (props) => {
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
					}}>
					<Text
						style={{
							color: "white",
							fontSize: 64,
							fontWeight: "bold",
							marginVertical: 10,
						}}>
						HOME
					</Text>
				</View>
				<Card>
					<Image
						source={qr}
						style={{
							display: "flex",

							alignItems: "center",
							justifyContent: "center",
							width: 100,
							height: 100,
						}}
					/>
					<Text style={{ marginBottom: 10 }}>
						Here you can Scan the QR Code
					</Text>
					<Button
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0,
							backgroundColor: red,
						}}
						title="SCAN NOW"
					/>
				</Card>

				<Card>
					<Image
						source={inspection}
						style={{
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							width: 100,
							height: 100,
						}}
					/>
					<Text style={{ marginBottom: 10 }}>
						Here you can Add Inspections
					</Text>
					<Button
						onPress={() =>
							props.navigation.navigate("InspectionView")
						}
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0,
							backgroundColor: red,
						}}
						title="INSPECT NOW"
					/>
				</Card>

				<Card>
					<Image
						source={pay}
						style={{
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							width: 100,
							height: 100,
						}}
					/>
					<Text style={{ marginBottom: 10 }}>
						Here you can make your Payments
					</Text>
					<Button
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0,
							backgroundColor: red,
						}}
						title="PAY NOW"
					/>
				</Card>
				<Card>
					<Image
						source={qrCode}
						style={{
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							width: 100,
							height: 100,
						}}
					/>
					<Text style={{ marginBottom: 10 }}>
						Here is Your QR
					</Text>
					<Button
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0,
							backgroundColor: red,
						}}
						title="VIEW MY QR NOW"
					/>
				</Card>
			</View>
		</ScrollView>
	);
};

export default HomeUI;
