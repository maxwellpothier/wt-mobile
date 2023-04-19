import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Album of the Day</Text>
			<Image
				source={{
					uri: "https://i.discogs.com/jCf-CAJzYPbEsIGjuZQ-5titKZrqsYRN6mS9Woxhf_s/rs:fit/g:sm/q:90/h:525/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzIx/LTEzOTQ4MjY2NTMt/MjA5OC5qcGVn.jpeg",
				}}
				style={styles.image}
			/>
			<Text>Deltron 3030</Text>
			<Text>Deltron 3030</Text>
			<Text>2000</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
	},
	title: {
		fontSize: 24,
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
});
