import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppBar } from "./src/components/appBar";
import { Body } from "./src/components/Body";
import Test from "./src/utils/Test";
export default function App() {
	return (
		<View style={styles.container}>
			<AppBar />
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={true}
			>
				<View style={styles.incontainer}>
					<Body />
					{/* <Test /> */}
					<StatusBar style="auto" />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181a22",
		alignItems: "center",
		justifyContent: "center",
		height: '130%',
	},
	incontainer: {
		flex: 1,
		// backgroundColor: '#f33',
		marginTop: 40,
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	scrollView: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		// height: 20,
	},
});
