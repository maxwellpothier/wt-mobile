import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {MaterialIcons} from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

function CreateStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Create" component={CreateScreen} />
		</Stack.Navigator>
	);
}

function ExploreStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Explore" component={ExploreScreen} />
		</Stack.Navigator>
	);
}

function ProfileStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Profile" component={ProfileScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({route}) => ({
					activeTintColor: "tomato",
					inactiveTintColor: "gray",
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
				<Tab.Screen name="Home" component={HomeStack} />
				<Tab.Screen name="Create" component={CreateStack} />
				<Tab.Screen name="Explore" component={ExploreStack} />
				<Tab.Screen name="Profile" component={ProfileStack} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
