const React = require("react-native");

const {
    StyleSheet,
    Dimensions,
    Platform
} = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    scrollpadding: {
        padding: 30,
        width: '100%',
        height: '100%',
    },
    loginfull: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        paddingBottom: 60,

    },
    inputStyle: {
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
        color: '#999',
        textAlign: 'center',
    },
    signupHeading: {
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
        color: '#222',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 0,
    },
    fill: {
        backgroundColor: '#1b596c',
        borderRadius: 30,
        marginBottom: 20,
    },
    button: {
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        flex: 1,
        color: '#fff',
    },
    logoarea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoimg: {
        width: 120,
        height: 60,
    },
    loginpart: {
        paddingTop: 60,
    },
    itemMargin: {
        marginBottom: 20,
    },
    forgot: {
        textAlign: 'center',
        color: '#555555',
        marginBottom: 40,
        fontFamily: 'Montserrat-Regular',
    },
    startnow: {
        color: '#bd4a31',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        marginTop: 30,
    },
    customcheck: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    checktext: {
        fontFamily: 'Montserrat-Regular',
        color: '#555'
    },
    imgchecked: {
        width: 15,
        height: 15,
    },
    homeHeader: {
        position: 'absolute',
        backgroundColor: '#bd4a31',
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 9,
    },
    menuImg: {
        width: 30,
        height: 18,
    },
    hearderlogoImg: {
        width: 150,
        height: 25
    },
    logosidebar: {
        backgroundColor: '#bd4a31',
        padding: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logosideImg: {
        width: 80,
        height: 42,
    },
    sidebarnavarea: {
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: 15,
    },
    navItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#6d6d6d',
    },
    naviconImg: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    navText: {
        fontFamily: 'Montserrat-Regular',
        color: '#fff',
    },
    fullArea: {
        padding: 10,
        paddingTop: 80,
    },
    cardArea: {
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 15,
    },
    cardImg: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 150,
    },
    cardCaption: {
        padding: 10,
    },
    greentext: {
        color: '#00a7aa',
        fontFamily: 'Montserrat-Semibold',
    },
    redText: {
        color: '#bd4a31',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
    },
    greyText: {
        color: '#666',
        fontFamily: 'Montserrat-Regular',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    areaRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    areaCol: {
        width: '48%',
    },
    textredSmall: {
        fontSize: 14,
    },
    cardImgsmall: {
        height: 80,
    },
    bottomArea: {
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        margin: 10,
        borderRadius: 5,
    },
    mediaArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mediaImg: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    livingText: {
        color: '#1b596c',
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,

    },
    assingText: {
        fontFamily: 'Montserrat-Regular',
        color: '#444',
        fontSize: 14,
    },
    mediaLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    }
};