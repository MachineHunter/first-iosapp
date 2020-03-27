import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";


class SettingsScreen extends Component {
	render() {
		return (
			<View>
				<Header
					placement="left"
					leftComponent={{ icon: 'menu', color: 'lightgrey', onPress: ()=>this.props.navigation.openDrawer() }}
					centerComponent={{ text: 'MY IOS APP', style: { color: 'lightgrey' } }}
					rightComponent={{ icon: 'home', color: 'lightgrey' }}
					containerStyle={{ backgroundColor:"black" }}
				/>
				<Text>SettingsScreen</Text>
			</View>
		);
	}
}

export default SettingsScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
});
