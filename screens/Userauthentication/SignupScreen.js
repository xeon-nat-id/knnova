import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, AsyncStorage, ToastAndroid } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ValidationComponent from 'react-native-form-validator';
import Spinner from 'react-native-loading-spinner-overlay';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from "./signupcss";
import CheckBox from 'react-native-check-box'

// import {
//     customerLogin
// } from "../../js/api/commonApi";

class SignupScreen extends ValidationComponent {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			pin: "",
			confirmPin: "",
			nameError: '',
			emailError: '',
			pinError: '',
			confirmPinError: '',
			loading: false,
			checked: false,
		}
	}

	componentDidMount() {

	}

	/** Name handler */
	nameHandler = (name) => {
		this.setState({
			name: name
		});
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

	/** confirm pin handler */
	confirmPinHandler = (confirmPin) => {
		this.setState({
			confirmPin: confirmPin
		});
	}

	/** customer signup */
	customerSignUp() {
		this.validate({
			name: { required: true },
			email: { email: true, required: true },
			pin: { numeric: true, minlength: 3 },
			confirmPin: { numeric: true, minlength: 3 },
		});

		if (this.isFormValid()) {
			const name = this.state.name.trim();
			const email = this.state.email.trim();
			const pin = this.state.pin.trim();
			const confirmPin = this.state.confirmPin.trim();

			if (pin == confirmPin) {
				this.setState({
					loading: true
				});

				const data = {
					name: name,
					email: email,
					pin: pin,
					re_enter_pin: confirmPin
				};

				customerSignup(data).then((res) => {
					this.setState({
						loading: false
					});
					if (res.data.Ack == 1) {

						Expo.SecureStore.setItemAsync("PlaytronUserDetails", JSON.stringify(res.data.response)).then((res) => {
							this.props.navigation.navigate("Home");
						});
					}
					else if (res.data.Ack == 0) {
						ToastAndroid.showWithGravity(
							"Email already exist.",
							ToastAndroid.SHORT,
							ToastAndroid.TOP
						);
					}
				}).catch((error) => {
					this.setState({
						loading: false
					});
					ToastAndroid.showWithGravity(
						"User signup failed.",
						ToastAndroid.SHORT,
						ToastAndroid.TOP
					);
				});
			} else {
				this.setState({
					loading: false
				});

				ToastAndroid.showWithGravity(
					"Pin does not matched.",
					ToastAndroid.SHORT,
					ToastAndroid.TOP
				);
			}
		} else {

			let nameError = this.isFieldInError('name');
			let emailError = this.isFieldInError('email');
			let pinError = this.isFieldInError('pin');
			let confirmPinError = this.isFieldInError('confirmPin');

			this.setState({
				nameError: nameError,
				emailError: emailError,
				pinError: pinError,
				confirmPinError: confirmPinError
			});
		}
	}

	render() {
		return (
			<View  style={{ width: '100%', borderWidth: 1,flex:1}}>
				<StatusBar backgroundColor={'transparent'} translucent />
					<ScrollView style={[styles.scrollpadding,{flex:1,}]} keyboardDismissMode='on-drag'>
						<View style={[styles.loginfull,{flex:1, height:'100%'}]}>
							<View style={styles.loginpart}>
							<View></View>
								<View style={styles.logoarea}>
								<Image style={[styles.logoimg]} source={require("../../assets/images/logo.png")} />
								</View>
								<View><Text style={styles.signupHeading} uppercase={true}>Welcome to Knovva</Text></View>
								<View style={{width:'100%'}}>
									<Item style={[styles.itemMargin, { borderColor: '#e1e1e1' }]}>
										<Input style={styles.inputStyle} placeholder="First Name"  placeholderTextColor="#999" autoFocus />
									</Item>
									<Item style={[styles.itemMargin, { borderColor: '#e1e1e1' }]}>
										<Input style={styles.inputStyle} placeholder="Last Name" placeholderTextColor="#999" />
									</Item>
									<Item style={[styles.itemMargin, { borderColor: '#e1e1e1' }]}>
										<Input style={styles.inputStyle} placeholder="Email" placeholderTextColor="#999" />
									</Item>
									<Item style={[styles.itemMargin, { borderColor: '#e1e1e1' }]}>
										<Input style={styles.inputStyle} placeholder="Password" placeholderTextColor="#999" />
									</Item>
									<Item style={[styles.itemMargin, { borderColor: '#e1e1e1' }]}>
										<Input style={styles.inputStyle} placeholder="Confirm Password" placeholderTextColor="#999" />
									</Item>
									<Item style={[styles.itemMargin, { borderColor: '#e1e1e1' }]}>
										<Input style={styles.inputStyle} placeholder="Class Code" placeholderTextColor="#999" />
									</Item>
								</View>

								<View style={styles.customcheck}>


								<CheckBox
									style={{padding: 0, width:20,}}
									onClick={()=>{
										this.setState({
											isChecked:!this.state.isChecked
										})
									}}
									isChecked={this.state.isChecked}
									checkedImage={<Image source={require('../../assets/images/unchecked.png')} style={styles.imgchecked}/>}
									unCheckedImage={<Image source={require('../../assets/images/checked.png')} style={styles.imgchecked}/>}
								/>
								<Text style={styles.checktext}>I agree to terms & condtions</Text>
								</View>
								<Button light block style={styles.fill}  onPress={()=>this.props.navigation.navigate("Home")}><Text style={styles.button} uppercase={true}> Sign Up  </Text></Button>
							</View>
							<View>
								<TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
									<Text style={styles.startnow}>Already have an account? Sign in</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
			</View>
		);
	}
}

export default SignupScreen;
