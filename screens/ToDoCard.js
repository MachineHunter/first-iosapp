import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";

class ToDoCard extends Component{
	render(){
		return(
			<Card style={styles.card}>
				<CardItem>
					<Body>
						<Text>{this.props.message}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default ToDoCard;

const styles = StyleSheet.create({
	card: {
		backgroundColor: "black",
		color: "white"
	}
});
