import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import TabNav from "./TabNav";
import Match from "../screens/Match";
const Stack = createSharedElementStackNavigator();
import React from "react";
export default RootNav = () => (
	<Stack.Navigator headerMode="none">
		<Stack.Screen name="Tab" component={TabNav} />
		<Stack.Screen name="Modal" component={Match} />
	</Stack.Navigator>
);
