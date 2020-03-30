import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";

class ToDoList extends Component {
	render() {
		return (
			<ScrollView style={styles.main}>
				<Card>
					<CardItem>
						<Body>
							<Text>aaaaaaaaaaaaaaa</Text>
						</Body>
					</CardItem>
				</Card>
				<Card>
					<CardItem>
						<Body>
							<Text>aaaaaaaaaaaaaaa</Text>
						</Body>
					</CardItem>
				</Card>
			</ScrollView>
		);
	}
}

export default ToDoList;

const styles = StyleSheet.create({
	main: {
		flex: 1,
	}
});
