import React, { useState } from "react";
import {
	Dimensions,
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Notifications } from "./Lists/notifications";
import Days from "./Lists/days";
import Upgrade from "./Lists/Upgrade";
import { useEffect } from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

console.log("Screen width:", screenWidth);
console.log("Screen height:", screenHeight);

const Body = () => {

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Upgrade />
				<Days />
				<Notifications />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export { Body };
