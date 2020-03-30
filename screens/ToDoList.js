import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";
import ToDoCard from "./ToDoCard";

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todolist: ["First message"]
		};
	}

	render() {
		return (
			<ScrollView style={styles.main}>
				<ToDoCard message={this.state.todolist[0]} />
			</ScrollView>
		);
	}
}

export default ToDoList;

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	card: {
		backgroundColor: "black",
		color: "white"
	}
});
