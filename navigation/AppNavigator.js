import React from 'react';
import Expo from 'expo';
import {
	createSwitchNavigator,
	createStackNavigator
} from 'react-navigation';

import WelcomeScreen from '../screens/Welcome/WelcomeScreen';

const WelcomeStack = createStackNavigator({
	Welcome: WelcomeScreen
}, {
	initialRouteName: 'Welcome',
});

export default createSwitchNavigator({
	Welcome: WelcomeStack
});