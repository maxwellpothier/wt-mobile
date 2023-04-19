import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";
import {Text, View} from "react-native";

import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const CustomHeader = () => {
	return (
		<View
			style={{
				height: 100,
				justifyContent: "flex-end",
				alignItems: "center",
				backgroundColor: "blue",
			}}>
			<Text
				style={{
					fontSize: 24,
					marginBottom: 10,
					marginLeft: 10,
					// fontFamily: "Liquido",
				}}>
				What's Turning?
			</Text>
		</View>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({route}) => ({
					header: () => <CustomHeader />,
					tabBarInactiveTintColor: "black",
					tabBarIcon: ({color, size}) => {
						let iconName;

						if (route.name === "Home") {
							iconName = "home";
						} else if (route.name === "Create") {
							iconName = "add-circle";
						} else if (route.name === "Explore") {
							iconName = "explore";
						} else if (route.name === "Profile") {
							iconName = "person";
						}

						return (
							<MaterialIcons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
				})}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Create" component={CreateScreen} />
				<Tab.Screen name="Explore" component={ExploreScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
