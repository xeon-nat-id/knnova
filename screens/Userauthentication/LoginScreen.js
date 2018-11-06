import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ValidationComponent from 'react-native-form-validator';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./Logincss";
import gqlClient from './../../apis/graphQLClient'

// import {
//     customerLogin
// } from "../../js/api/commonApi";

class LoginScreen extends ValidationComponent {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			pin: "",
			emailError: '',
			pinError: '',
			loading: false
		}
	}

	/** Email handler */
	emailHandler = (email) => {
		this.setState({
			email: email
		});	
	}

	/** pin handler */
	pinHandler = (pin) => {
		this.setState({
			pin: pin
		});
	}



	handleSubmit = () => {
		var res = gqlClient.post('login', {email: this.state.email, pin:this.state.pin})
		var token = res.data
	}
	

	render() {
		if(!this.isFormValid()){
			var errors = this.getErrorMessages()
		}
		return (
			<View style={{ width: '100%', borderWidth: 1, flex: 1 }}>
				<StatusBar backgroundColor={'transparent'} translucent />
				<ScrollView style={[styles.scrollpadding, { flex: 1 }]} keyboardDismissMode='on-drag'>
					<View style={[styles.loginfull, { flex: 1, height: '100%' }]}>
						<View style={styles.loginpart}>
							<View></View>
							<View style={styles.logoarea}>
								<Image style={[styles.logoimg]} source={require("../../assets/images/logo.png")} />
							</View>
							<View>
								<Text style={styles.signupHeading} uppercase={true}>Welcome to Knovva</Text>
								<Text style={errors ? styles.error : ""}>
									{errors}
									
								</Text>
							</View>
							<View style={{ width: '100%' }}>
								<Item style={[styles.itemMargin, this.state.emailError ? { borderColor: '#e1e1e1' } : null]}>
									<Input style={styles.inputStyle} placeholder="Email" keyboardType="email-address" placeholderTextColor="#999" autoFocus onChangeText={this.emailHandler} value={this.state.email} />
								</Item>
								<Item style={[styles.itemMargin, this.state.pinError ? { borderColor: '#e1e1e1' } : null]}>
									<Input style={styles.inputStyle} placeholder="Password" keyboardType="numeric" placeholderTextColor="#999" onChangeText={this.pinHandler} value={this.state.pin} secureTextEntry={true} maxLength={4} ref={pinRef => this.pinRef = pinRef} />
								</Item>
							</View>	
							<TouchableOpacity>
								<View><Text style={styles.forgot}>Forgot Password?</Text></View>
							</TouchableOpacity>
							<Button light block style={styles.fill} onPress={this.handleSubmit}><Text style={styles.button} uppercase={true}> Login  </Text></Button>
						</View>
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")} >
								<Text style={styles.startnow}>Haven’t enrolled yet? Start Now!</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default LoginScreen;
