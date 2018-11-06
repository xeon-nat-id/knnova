import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, ToastAndroid, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ValidationComponent from 'react-native-form-validator';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";

// import {
//     customerLogin
// } from "../../js/api/commonApi";

class LoginScreen extends Component {
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

	/** customer login */
	customerLogin() {
		// this.validate({
		//     email: { email: true, required: true },
		//     pin: { numeric: true, minlength: 3 }
		// });

		// if (this.isFormValid()) {
		//     const email = this.state.email.trim();
		//     const pin = this.state.pin.trim();

		//     const data = {
		//         email: email,
		//         pin: pin
		//     };

		//     this.setState({
		//         loading: true
		//     });

		//     customerLogin(data).then((res) => {
		//         this.setState({
		//             loading: false
		//         });
		//         if (res.data.Ack == 1) {

		//             Expo.SecureStore.setItemAsync("PlaytronUserDetails", JSON.stringify(res.data.response)).then((res) => {
		//                 this.props.navigation.navigate("Home");
		//             });
		//         } else if (res.data.Ack == 0) {
		//             ToastAndroid.showWithGravity(
		//                 "Please provide the correct credentials.",
		//                 ToastAndroid.SHORT,
		//                 ToastAndroid.TOP
		//             );
		//         }
		//     }).catch((error) => {
		//         this.setState({
		//             loading: false
		//         });
		//         ToastAndroid.showWithGravity(
		//             'User login failed.',
		//             ToastAndroidast.SHORT,
		//             ToastAndroid.TOP
		//         );
		//     });
		// } else {
		//     let emailError = this.isFieldInError('email');
		//     let pinError = this.isFieldInError('pin');

		//     this.setState({
		//         emailError: emailError,
		//         pinError: pinError
		//     });
		// }
	}

	render() {
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
							<View><Text style={styles.signupHeading} uppercase={true}>Welcome to Knovva</Text></View>
							<View style={{ width: '100%' }}>
								<Item style={[styles.itemMargin, this.state.emailError ? { borderColor: '#e1e1e1' } : null]}>
									<Input style={styles.inputStyle} placeholder="Email" keyboardType="email-address" placeholderTextColor="#999" autoFocus onChangeText={this.emailHandler} value={this.state.email} onSubmitEditing={() => this.pinRef._root.focus()} />
								</Item>
								<Item style={[styles.itemMargin, this.state.pinError ? { borderColor: '#e1e1e1' } : null]}>
									<Input style={styles.inputStyle} placeholder="Password" keyboardType="numeric" placeholderTextColor="#999" onChangeText={this.pinHandler} value={this.state.pin} secureTextEntry={true} maxLength={4} ref={pinRef => this.pinRef = pinRef} onSubmitEditing={this.customerLogin.bind(this)} />
								</Item>
							</View>
							<TouchableOpacity>
								<View><Text style={styles.forgot}>Forgot Password?</Text></View>
							</TouchableOpacity>
							<Button light block style={styles.fill} onPress={() => this.props.navigation.navigate("Home")}><Text style={styles.button} uppercase={true}> Login  </Text></Button>
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
