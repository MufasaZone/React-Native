import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppBar } from "./src/components/appBar";
import { Body } from "./src/components/Body";
import Test from "./src/utils/Test";
export default function App() {
	return (
		<View style={styles.container}>
			<AppBar />
			<View style={styles.incontainer}>
				<Body />
				{/* <Test /> */}
				<StatusBar style="auto" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181a22",
		alignItems: "center",
		justifyContent: "center",
	},
	incontainer: {
		flex: 1,
		// backgroundColor: '#f33',
		marginTop: 40,
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});
