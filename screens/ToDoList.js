import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Left, Right, Title, Icon } from "native-base";

class ToDoList extends Component {
	render() {
		return (
			<View style={styles.main}>
				<Text>test</Text>
			</View>
		);
	}
}

export default ToDoList;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		alignItems:"center",
		justifyContent:"center"
	}
});
