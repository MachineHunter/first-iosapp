import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";


const SCREEN_WIDTH  = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;


export default function App() {
	return (
		<MenuBar />
	);
}


const styles = StyleSheet.create({
});


const CustomDrawerComponent = (props) => (
	<SafeAreaView style={{ flex: 1 }}>
		<View style={{ height:150, backgroundColor:"white" }}>
			<Image source={require('./assets/human-icon.png')} style={{ height:120, width:120, borderRadius:60 }} />
		</View>
		<ScrollView>
			< DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
)


const MenuBar = createDrawerNavigator({
	Home:HomeScreen,
	Settings:SettingsScreen
}, {
	contentComponent: CustomDrawerComponent
})
