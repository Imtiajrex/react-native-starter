import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppRegistry, StatusBar, StyleSheet, View } from "react-native";
import RootNav from "./src/nav/RootNav";
function App() {
	return (
		<>
			<View style={styles.container}>
				<NavigationContainer>
					<RootNav />
				</NavigationContainer>
			</View>
			<StatusBar hidden={true} />
		</>
	);
}

export default AppRegistry.registerComponent(App);
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
