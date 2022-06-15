//import liraries
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const styleTips = StyleSheet.create({
    container: {
        height: 180,
        width: windowWidth - 45,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 20,
        margin: 10,
        justifyContent: 'center',
    },
    containerText: {
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: 16,
        padding: 7,
        paddingBottom: 15,
        paddingTop: 15,
    }
});


export const darkStyle = StyleSheet.create({
    ...styleTips,
    container: {
        ...styleTips.container,
        backgroundColor: '#dd3',
        borderColor:"#24d",
        borderWidth:2
    },
    containerText: {
        ...styleTips.containerText,
        color:"#000", 
    }
})

export const lightStyle = StyleSheet.create({
    ...styleTips,
    container: {
        ...styleTips.container,
        backgroundColor: '#dd3',
        borderColor:"#2d4",
        borderWidth:2
    },
    containerText: {
        ...styleTips.containerText,
        color: "#000"
    }
})