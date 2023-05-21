import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
	Entypo,
	EvilIcons,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Font from "expo-font";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Upgrade = () => {
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
		<View styles={styles.container}>
			<View style={styles.box}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Image
						style={[styles.tinyLogo]}
						source={{
							uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Simple_gold_crown.svg/128px-Simple_gold_crown.svg.png?20101107193118",
						}}
					/>
					<Text style={{ color: "white", fontFamily: 'custom-font' }}>Upgrade to Premium</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		width: screenWidth - 25,
	},
    box: {
        marginBottom: 20,
        paddingVertical: 7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#4e4e4e",
        paddingHorizontal: 10,
        borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 10,
			height: 20, // Increase the height to create a shadow only at the bottom
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 6,
        
    },
	tinyLogo: {
        width: 50,
		height: 50,
		marginRight: 15,
        transform: [{ rotate: '340deg' }] 
	},
});
export default Upgrade;
