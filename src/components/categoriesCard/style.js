//import liraries
import { StyleSheet, Dimensions } from 'react-native';

let windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styleCard = StyleSheet.create({
    container: {
        height: 40,
        width: windowWidth - 44,
        borderRadius: 80,
        borderWidth: 3,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft:12,
        borderWidth: 2,
    },
    containerText: {
        fontFamily: "Arial",
        fontSize: 16,
        padding: 2,
        paddingBottom: 3,
        paddingTop: 3,
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