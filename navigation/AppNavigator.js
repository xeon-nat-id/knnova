import React from 'react';
import Expo from 'expo';
import {
	createSwitchNavigator,
	createStackNavigator
} from 'react-navigation';

import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const LoginStack = createStackNavigator({
	Login: LoginScreen
}, {
	initialRouteName: 'Login',
});

export default createSwitchNavigator({
	Login: LoginStack
});