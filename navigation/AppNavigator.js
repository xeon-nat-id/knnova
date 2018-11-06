import React from 'react';
import Expo from 'expo';
import {
	createSwitchNavigator,
	createStackNavigator
} from 'react-navigation';

import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Userauthentication/LoginScreen';
import SignupScreen from '../screens/Userauthentication/SignupScreen';

const LoginStack = createStackNavigator({
	Login: LoginScreen,
	SignUp: SignupScreen
}, {
	initialRouteName: 'Login',
});

export default createSwitchNavigator({
	Login: LoginStack
	
});
