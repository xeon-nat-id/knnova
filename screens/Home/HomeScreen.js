import React, { Component } from "react";
import { Image, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TextInput, WebView, AsyncStorage, Alert } from "react-native";
import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Content, Item, Input, Icon, List, ListItem, Thumbnail, Drawer, ActionSheet } from "native-base";
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./Homecss";
import { ImagePicker, Camera, Permissions } from 'expo';
// import Modal from "react-native-simple-modal";
import { Dropdown } from 'react-native-material-dropdown';
// import {
// 	currentUserPlaylist,
// 	getUserToken,
// 	refreshToken,
// 	addPlaytronToken,
// 	createUserPlaylist,
// 	getUserPlaylist
// } from "../../js/api/commonApi";

let options = ["Camera", "Gallery", "Cancel"];
var CANCEL_INDEX = 2;

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			hasCameraPermission: null,
			type: Camera.Constants.Type.front,
			cameraDisplay: false,
			showSwitchDj: true
		};
		this.actionSheet = null;
	}


	componentDidMount() {
		Expo.SecureStore.getItemAsync("PlaytronUserDetails").then((res2) => {
			if (res2) {
				const value = JSON.parse(res2);
				this.setState({
					name: value.name
				});
			}
		});
	}

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	logout() {
		Expo.SecureStore.deleteItemAsync("PlaytronUserDetails").then((res) => {
			Expo.SecureStore.deleteItemAsync("PlaytronTokenData").then((res1) => {

			});
			this.props.navigation.navigate('Welcome');
		});
	}

	goToMusic() {
		this.props.closeDrawer();
		this.props.navigation.navigate('Music')
	}

	selectOption() {
		if (this.actionSheet != null) {
			this.actionSheet._root.showActionSheet(
				{
					options: options,
					cancelButtonIndex: CANCEL_INDEX,
					title: "Image Upload"
				},
				optionIndex => {
					this.setState({ clicked: options[optionIndex] });
					if (optionIndex == 0) {
						this.openCamera()
					} else if (optionIndex == 1) {
						this.openGallery()
					}
				}
			);
		}
	}

	async openGallery() {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: 'All',
			allowsEditing: true,
			aspect: [4, 3]
		});
		console.log(result);
	}

	async openCamera() {
		if (this.state.hasCameraPermission == true) {
			this.setState({
				cameraDisplay: true
			});
		}
	}

	async takeCameraPicture() {
		console.log("take picture");
		this.setState({
			cameraDisplay: false
		});
	}


	render() {
		if (this.state.cameraDisplay == false) {
			return (
				<Content style={{ backgroundColor: '#555' }}>


					<View style={styles.logosidebar}>
						<Image style={styles.logosideImg} source={require("../../assets/images/white-logo.png")} />
					</View>

					<View style={styles.sidebarnavarea}>
						<ScrollView>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-1.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Home</Text>
							</View>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-2.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Courses</Text>
							</View>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-3.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Events</Text>
							</View>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-4.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Edit Profile</Text>
							</View>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-5.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Careers</Text>
							</View>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-6.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Contact</Text>
							</View>
							<View style={styles.navItem}>
								<Image source={require("../../assets/images/icon-7.png")} style={styles.naviconImg} />
								<Text style={styles.navText} uppercase={true}>Log out</Text>
							</View>
						</ScrollView>
					</View>
				</Content>
			);
		} else {
			return (
				<View style={{ flex: 1 }}>

				</View>
			);
		}
	}
}


class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props)
		this.state = {
			// loading: false,
			// webview: false,
			// // authToken: _123,
			// // openWebviewUri:123,
			// currentUserPlaylist: [],
			// userId: ''
		}

	}

	componentDidMount() {

		// /** get user details */
		// Expo.SecureStore.getItemAsync("PlaytronUserDetails").then((res2) => {
		// 	let value = JSON.parse(res2);
		// 	this.setState({
		// 		userId: value.id,
		// 		loading: true
		// 	});

		// 	getUserPlaylist(value.id).then((result3) => {
		// 		if (result3.data.ack == 1) {
		// 			this.setState({
		// 				loading: false
		// 			});
		// 			if (result3.data.playlist.length != 0) {
		// 				this.setState({
		// 					currentUserPlaylist: result3.data.playlist
		// 				});
		// 			}
		// 		}
		// 	}).catch((err) => {
		// 		this.setState({
		// 			loading: false
		// 		});
		// 		console.log(err);
		// 	});
		// });
	}

	/** open web view */
	openWebView() {
		// this.setState({
		// 	webview: true
		// });
	}




	openDrawer() {
		this.drawer._root.open()
	}

	closeDrawer() {
		this.drawer._root.close()
	}

	showSwitchDj() {
		// this.setState({
		// 	showSwitchDj: !this.state.showSwitchDj
		// });

		// <View style={styles.switchdropdown}>
		// 	<Text style={styles.switchheading}>SWITCH DJ</Text>

		// </View>
	}

	render() {
		// if (this.state.webview == false) {
			return (
				<Drawer
					ref={(ref) => { this.drawer = ref; }}
					content={<SideBar logout={this.logout} navigation={this.props.navigation} closeDrawer={this.closeDrawer.bind(this)} />}
					onClose={() => this.closeDrawer()}
				>
					<View>
						<StatusBar backgroundColor={'transparent'} translucent={true} barStyle="light-content" />
						<View style={styles.homeHeader}>
							<TouchableOpacity onPress={() => this.openDrawer()}>
								<Image style={styles.menuImg} source={require("../../assets/images/menu-bar.png")} />
							</TouchableOpacity>
							<View>
								<Image style={styles.hearderlogoImg} source={require("../../assets/images/logo-head.png")} />
							</View>
							<View></View>
						</View>
						<ScrollView>
						<View style={styles.cardArea}>
								<Image source={require("../../assets/images/img-1.jpg")} />
								<View>
									<Text>Current:</Text>
									<Text>Inbtroduction to Global Thinking</Text>
									<Text>How will understanding global issues change your perspective?</Text>
								</View>
							</View>
						</ScrollView>
					</View>

				</Drawer>

			);
		// } else {
		// 	return (<WebView
		// 		style={styles.WebViewStyle}
		// 		source={{ uri: this.state.openWebviewUri }}
		// 		javaScriptEnabled={true}
		// 		domStorageEnabled={true}
		// 		startInLoadingState={true}
		// 		onNavigationStateChange={this._onNavigationStateChange.bind(this)}
		// 	/>
		// 	);
		// }

	}

}

export default HomeScreen;
