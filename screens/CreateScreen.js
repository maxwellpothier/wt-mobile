import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {Button} from "react-native-elements";
import {ScrollView, TextInput} from "react-native-gesture-handler";

export default function CreateScreen() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={{
						uri: "https://i.discogs.com/jCf-CAJzYPbEsIGjuZQ-5titKZrqsYRN6mS9Woxhf_s/rs:fit/g:sm/q:90/h:525/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzIx/LTEzOTQ4MjY2NTMt/MjA5OC5qcGVn.jpeg",
					}}
					style={styles.image}
				/>
				<Text style={styles.title}>How'd you like the album?</Text>
				<TextInput
					style={styles.input}
					keyboardType="numeric"
					// value={numberInput}
					// onChangeText={handleNumberInputChange}
				/>
				<TextInput
					style={styles.input}
					multiline={true}
					numberOfLines={4}
					// value={textInput}
					// onChangeText={handleTextInputChange}
				/>
				<Button title="Submit" />
			</View>
		</ScrollView>
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
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 20,
		width: "100%",
	},
});
