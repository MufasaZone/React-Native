import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import * as Font from "expo-font";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const AppBar = () => {
      const [fontLoaded, setFontLoaded] = useState(false);

			useEffect(() => {
				async function loadFont() {
					await Font.loadAsync({
						"custom-font": require("../../assets/fonts/static/Heebo-Medium.ttf"),
					});

					setFontLoaded(true);
				}

				loadFont();
			}, []);
            if (!fontLoaded) {
							return <Text>Loading...</Text>;
						}

    return (
			<View style={styles.container}>
				{/* Back Button */}
				<TouchableOpacity>
					<Ionicons
						name="arrow-back"
						size={24}
						color="black"
						style={{ color: "#c0c0c0" }}
					/>
				</TouchableOpacity>
				<View style={styles.middle}>
					<Text style={styles.title}>Afolabi O</Text>
					<Text style={styles.middle}>0808 556 8393</Text>
				</View>
				{/* Back Button */}
				<TouchableOpacity>
					<Feather
						name="settings"
						size={24}
						color="black"
						style={{ color: "#c0c0c0" }}
					/>
				</TouchableOpacity>
			</View>
		);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#181a22",
		height: 80,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 20,
		flexDirection: "row",
	},
	title: {
		marginTop: 10,
		fontSize: 18,
		// fontWeight: 'bold',
		fontFamily: "custom-font",
		color: "#c0c0c0",
	},
	middle: {
		flex: 1,
		fontSize: 10,
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "custom-font",
		color: "#c0c0c0",
	},
});

module.exports = { AppBar }