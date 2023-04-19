import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Header} from "react-native-elements";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Header
				leftComponent={{icon: "menu", color: "#fff"}}
				centerComponent={{text: "Home", style: {color: "#fff"}}}
				rightComponent={{icon: "search", color: "#fff"}}
			/>
			<Text style={styles.title}>Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
