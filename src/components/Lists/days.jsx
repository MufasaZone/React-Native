import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
	Entypo,
	EvilIcons,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Font from "expo-font";

const Days = () => {
	const [fontLoaded, setFontLoaded] = useState(false);
	useEffect(() => {
		async function loadFont() {
			await Font.loadAsync({
				"custom-font": require("../../../assets/fonts/static/Heebo-Medium.ttf"),
			});

			setFontLoaded(true);
		}

		loadFont();
	}, []);
	if (!fontLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<View styles={styles.full}>
			<View
				style={{
					borderColor: "#4e4e4e",
					borderWidth: 1,
					borderRadius: 10,
					padding: 10,
				}}
			>
				<View style={{ flexDirection: "row", marginVertical: 10 }}>
					<Text
						style={{
							width: "71%",
							paddingLeft: 20,
							color: "#c0c0c0",
							fontFamily: "custom-font",
						}}
					>
						Last 30 days{"  "}
						<FontAwesome5
							style={{ color: "#c0c0c0" }}
							name="sort-down"
							size={24}
							color="black"
						/>{" "}
					</Text>

					<Entypo
						style={{
							marginLeft: 60,
							position: "absolute",
							left: 240,
							color: "#c0c0c0",
						}}
						name="share"
						size={24}
						color="black"
					/>
				</View>
				{/* Box */}
				<View
					style={[
						styles.box,
						{ borderBottomColor: "#4e4e4e", borderBottomWidth: 1 },
					]}
				>
					<View style={styles.two}>
						<View style={{ flexDirection: "column" }}>
							<View style={{ flexDirection: "row" }}>
								<Ionicons
									name="shield-checkmark-outline"
									size={24}
									color="#c77d7a"
								/>
								<Text style={{ color: "#c0c0c0", fontFamily: "custom-font" }}>
									{" "}
									{2}
								</Text>
							</View>
							<Text style={[styles.title]}> Spam calls identified</Text>
						</View>
					</View>
					<View style={styles.three}>
						<View style={{ flexDirection: "column" }}>
							<View style={{ flexDirection: "row" }}>
								<EvilIcons name="clock" size={28} color="#7eb293" />
								<Text style={{ color: "#c0c0c0", fontFamily: "custom-font" }}>
									{" "}
									58s
								</Text>
							</View>
							<Text style={styles.title}> Time saved from spammers</Text>
						</View>
					</View>
				</View>
				<View style={[styles.box, { marginBottom: 10 }]}>
					<View style={styles.two}>
						<View style={{ flexDirection: "column" }}>
							<View style={{ flexDirection: "row" }}>
								<Ionicons
									style={{ fontWeight: "500" }}
									name="search-outline"
									size={24}
									color="#69abce"
								/>
								<Text style={{ color: "#c0c0c0", fontFamily: "custom-font" }}>
									{" "}
									29
								</Text>
							</View>
							<Text style={styles.title}> Unknown number identified</Text>
						</View>
					</View>
					<View style={styles.three}>
						<View style={{ flexDirection: "column" }}>
							<View style={{ flexDirection: "row" }}>
								<MaterialCommunityIcons
									name="message-off-outline"
									size={24}
									color="orange"
								/>
								<Text style={{ color: "#c0c0c0", fontFamily: "custom-font" }}>
									{" "}
									7
								</Text>
							</View>
							<Text style={styles.title}> Messages moved to spam</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	full: {
		// // borderColor: "#c0c0c0",
		// borderWidth: 1,
		// backgroundColor: "red",
	},
	box: {
		height: "auto",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignContent: "space-around",

		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10, // Increase the height to create a shadow only at the bottom
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 2,
	},
	two: {
		width: "45%",
		paddingLeft: 10,
		paddingVertical: 20,
		// marginVertical: 20,
	},
	three: {
		width: "45%",
		borderLeftColor: "#4e4e4e",
		borderLeftWidth: 1,
		paddingLeft: 10,
		paddingVertical: 20,
		// marginVertical: 15,
	},
	title: {
		fontSize: 11,
		fontWeight: "400",
		color: "#c0c0c0",
		fontFamily: "custom-font",
	},
});
export default Days;
