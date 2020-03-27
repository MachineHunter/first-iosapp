import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import { Header } from "react-native-elements";
import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";


const SCREEN_WIDTH  = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;


export default function App() {
	return (
		/*
		 *<View>
		 *   <StatusBar barStyle="light-content" hidden={false} translucent={true}/>
		 *   <Header
		 *      placement="left"
		 *      leftComponent={{ icon: 'menu', color: 'lightgrey' }}
		 *      centerComponent={{ text: 'MY IOS APP', style: { color: 'lightgrey' } }}
		 *      rightComponent={{ icon: 'home', color: 'lightgrey' }}
		 *      containerStyle={{ backgroundColor:"black" }}
		 *      onPress={ ()=>this.props.navigation.navigate("DrawerOpen") }
		 *   />
		 *</View>
		 */
		<MenuBar />
	);
}


const styles = StyleSheet.create({
});


const MenuBar = createDrawerNavigator({
	Home:HomeScreen,
	Settings:SettingsScreen
})
