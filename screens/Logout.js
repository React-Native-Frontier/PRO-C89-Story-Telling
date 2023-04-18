import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

export default class Logout extends Component {
	componentDidMount() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				this.props.navigation.replace('Login');
			})
			.catch((error) => {
				console.log(error.messsage);
			});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Logout</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
