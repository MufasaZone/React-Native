import { FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
	Dimensions,
	FlatList,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import * as Font from "expo-font";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Notifications",
		icon: "bell",
		end: 1,
		// color: "red",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Change theme",
		icon: "palette",
		// color: "green",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "parentyn",
		icon: "bell",
		// color: "orange",
	},
	{
		id: "58694a0f-3da1-47d1f-bd96-145571e29d72",
		title: "invite friends",
		icon: "book-reader",
		// color: "c0c0c0",
	},
];

const Item = ({ item, onPress, backgroundColor, textColor, icon }) => (
	<TouchableOpacity
		onPress={onPress}
		style={[styles.item, { backgroundColor }]}
	>
		<Text style={[styles.icon, { color: textColor }]}>
			<FontAwesome5
				name={item.icon}
				size={20}
				color="black"
				style={{ color: "#c0c0c0" }}
			/>
		</Text>
		<View
			style={[
				styles.title,
				{
					borderColor: "#4e4e4e",
					width: "80%",
					borderBottomWidth: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				},
			]}
		>
			<Text style={{ color: "#c0c0c0", fontFamily: "custom-font" }}>
				{item.title}
			</Text>
	
			{item.end && (
				<Text
					style={{
						// marginLeft: 40,
						position: "absolute",
						backgroundColor: "#409fff",
						left: '90%',
						top: 20,
						borderRadius: 50,
						width: 20,
						justifyContent: "center",
						alignContent: 'center'
					}}
				>
					{'  1'}
					{/* <View style={styles.notification}>
						<Text style={{ color: "black" }}>1</Text>
					</View> */}
				</Text>
			)}
		</View>
	</TouchableOpacity>
);

const Notifications = () => {
	const [fontLoaded, setFontLoaded] = useState(false);
	const [selectedId, setSelectedId] = useState();
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

	const renderItem = ({ item }) => {
		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
				// backgroundColor={backgroundColor}
				textColor="#c0c0c0"
			/>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.listCon}>
				<FlatList
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					extraData={selectedId}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: screenWidth - 25,
		// flex: 1,
		marginTop: StatusBar.currentHeight || 0,

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
	item: {
		// padding: 20,
		// marginVertical: 8,
		// marginHorizontal: 16,
		flexDirection: "row",
	},
	title: {
		fontSize: 16,
		paddingVertical: 20,
	},
	icon: {
		fontSize: 16,
		marginHorizontal: 20,
		paddingVertical: 20,
	},
	listCon: {
		borderColor: "#4e4e4e",
		borderWidth: 1,
		borderRadius: 10,
		width: "100%",
		marginVertical: 4,
		// marginHorizontal: 16,
		// backgroundColor: '#554'
	},
	notification: {
		position: "absolute",
		// backgroundColor: "#409fff",
		justifyContent: "center",
		alignItems: "center",
		// width: 10,
		borderRadius: 20,
	},
});

export { Notifications };
