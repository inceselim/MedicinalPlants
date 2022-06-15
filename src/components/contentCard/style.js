//import liraries
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const styleCard = StyleSheet.create({
    container: {
        height: 100,
        width: windowWidth - 44,
        borderRadius: 80,
        marginTop: 15,
        marginBottom: 20,
        margin: 10,
        justifyContent: 'center',
        shadowColor: "#0fff",
        borderWidth: 3
    },
    containerText: {
        fontFamily: "Arial",
        fontSize: 18,
        padding: 5,
        paddingBottom: 15,
        paddingTop: 15,
        textAlign: "center",
    }
});

export const darkStyle = StyleSheet.create({
    ...styleCard,
    container: {
        ...styleCard.container,
        backgroundColor: "#aaf",
        borderColor:"#000"
    },
    containerText: {
        ...styleCard.containerText,
        color: "#000"
    }
})

export const lightStyle = StyleSheet.create({
    ...styleCard,
    container: {
        ...styleCard.container,
        backgroundColor: "#ffafaf"
    },
    containerText: {
        ...styleCard.containerText,
        color: "#000"
    }
})