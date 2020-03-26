import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import { Header } from "react-native-elements"



const SCREEN_WIDTH  = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;


export default function App() {
	return (
		<View>
			<StatusBar barStyle="light-content" hidden={false} translucent={true}/>
			<Header
				placement="left"
				leftComponent={{ icon: 'menu', color: 'lightgrey' }}
				centerComponent={{ text: 'MY IOS APP', style: { color: 'lightgrey' } }}
				rightComponent={{ icon: 'home', color: 'lightgrey' }}
				containerStyle={{ backgroundColor:"black" }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
});
