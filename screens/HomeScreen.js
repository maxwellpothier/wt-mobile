import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {Entypo, FontAwesome5} from "@expo/vector-icons";
import {Button} from "react-native-elements";
import {ScrollView} from "react-native-gesture-handler";

export default function HomeScreen() {
	return (
		<ScrollView>
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
				<Entypo name="spotify" size={24} color="black" />
				<FontAwesome5 name="itunes" size={24} color="black" />
				<Button title="Create Post" />
				<Text>More about Deltron 3030</Text>
				<Text style={{width: "50%"}}>
					Lorem ipsum dolor sit amet, et impetus civibus mea, luptatum
					sententiae omittantur pro id. Te quaeque accumsan sea. Reque
					aperiam antiopam has ad, mei viris dissentiet definitionem
					te. Vix liber propriae lucilius an. Usu te scriptorem
					repudiandae, dictas virtute dolores duo in. Sit no facilis
					suscipit, sit ad tempor option impetus, probatus definiebas
					vim ea. Wisi quaestio usu eu. Justo primis nam eu, alii
					evertitur mel ei. Discere dolorem volumus quo an, et his
					inani electram. Ad vim omnium quaestio. Vix te pertinax
					accusamus. Sed ne omnis corpora assentior. Purto perpetua
					convenire eu pri, cum te solet consul altera. Cibo epicuri
					qui in, vim in meis dicant, laudem graeci vis at. Vim noster
					ceteros argumentum te. Sea eruditi eloquentiam ex. Qui
					mollis tritani virtute te.
				</Text>
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
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
});
