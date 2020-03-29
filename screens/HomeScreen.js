import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Left, Right, Title, Icon } from "native-base";

class HomeScreen extends Component {

	static navigationOptions = {
		drawerIcon : ({tintColor}) => (
			<Icon name="home" style={{ fontSize:24, color: tintColor }} />
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Header style={styles.header}>
					<Left>
						<Icon name="menu" style={styles.icon} onPress={()=>this.props.navigation.openDrawer()}/>
					</Left>
					<Title style={styles.title}>
						My First App
					</Title>
					<Right>
						<Icon name="settings" style={styles.settings}/>
					</Right>
				</Header>
				<View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
					<Text>HomeScreen</Text>
				</View>
			</View>
		);
	}
}

export default HomeScreen;

const styles = StyleSheet.create({
	header: {
		backgroundColor:"black",
	},
	icon: {
		marginLeft: 10,
		color: "white"
	},
	title: {
		flex: 1,
		marginTop: 8,
		color: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	settings: {
		marginRight: 10,
		color: "white"
	},
	container:{
		flex:1
	}
});
