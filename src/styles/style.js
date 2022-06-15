import { StyleSheet, Dimensions } from "react-native";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const base_style = StyleSheet.create({
    buttonText: {
        justifyContent: 'space-between',
        opacity: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    mainContainer: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
    },
    mainHeaderText: {
        textAlign: "center",
        fontSize: 26,
        marginTop: 18,
        margin: 5,
    },
    contentText: {
        fontSize: 16,
        margin: 5,
        marginTop: 8,
    },
    contentImg: {
        margin: 12,
        width: windowWidth - 60,
        height: 250,
        resizeMode: "contain",
    },
    backButton: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 4,
        marginLeft: 24,
        marginRight: 24,
        padding: 2,
        paddingLeft:12,
        borderWidth: 1,
        borderRadius: 12,
    },
    backButtonText: {
        fontSize: 14
    },
    videoButton: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 24,
        marginRight: 24,
        padding: 8,
        paddingLeft:12,
        borderWidth: 2,
        borderRadius: 12,
    },
    videoButtonText: {
        fontSize: 20
    }
})

export const Dark_Theme = {
    ...base_style,
    ...DarkTheme,
    Button: {
        primary: "#573391",
        secondary: "#ff4594"
    },
    colors: {
        ...DarkTheme.colors,
        primary: "#afff33",
        secondary: "rgb(11,111,11)",
        activeColor: "#f0edf6",
        inactiveColor: "#3e2465",
        background: "#033",
        card: "#155",
        HeaderText: "#003",
        headerBackground: "#eef",
        text1: "#000",
        text2: "#eed",
        textBGcolor1: "#eed",
        textBGcolor2: "#003",
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)'
    },
    buttonDesign: {
        ...base_style.buttonText,
    },
    mainHeaderText: {
        ...base_style.mainHeaderText,
        color: "#fff"
    },
    contentText: {
        ...base_style.contentText,
        color: "#fff"
    },
    videoButton: {
        ...base_style.videoButton,
        backgroundColor: "#cd6731"
    },
    videoButtonText: {
        ...base_style.videoButtonText,
        color: "#fff"
    },
    backButton:{
        ...base_style.backButton,
        backgroundColor:"#cd3"
    },
    backButtonText:{
        ...base_style.backButtonText,
        backgroundColor:"#cd3"
    }
}
export const Light_Theme = {
    ...base_style,
    ...DefaultTheme,
    roundness: 2,
    Button: {
        primary: "#573391",
        secondary: "#084594"
    },
    buttonDesign: {
        ...base_style.buttonText,
    },
    colors: {
        primary: '#0000dd',
        secondary: "rgb(11,111,11)",
        activeColor: "#f0edf6",
        inactiveColor: "#3e2465",
        background: 'rgb(255, 255, 255)',
        card: 'rgb(255, 255, 244)',
        text: 'rgb(28, 28, 30)',
        HeaderText: "#eef",
        headerBackground: "#00ff",
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
    mainHeaderText: {
        ...base_style.mainHeaderText,
        color: "#000"
    },
    contentText: {
        ...base_style.contentText,
        color: "#000"
    },
    videoButton: {
        ...base_style.videoButton,
        backgroundColor: "#03fdaa",
    },
    videoButtonText: {
        ...base_style.videoButtonText,
        color: "#000"
    },
    backButton:{
        ...base_style.backButton,
        backgroundColor:"#fff"
    },
    backButtonText:{
        ...base_style.backButtonText,
        color:"#000"
    }
};
