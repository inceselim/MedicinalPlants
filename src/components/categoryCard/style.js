//import liraries
import { StyleSheet } from 'react-native';

const styleCard = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 80,
        marginTop: 15,
        marginBottom: 20,
        margin: 10,
        justifyContent: 'center',
    },
    containerText: {
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: 16,
        padding: 5,
        paddingBottom: 15,
        paddingTop: 15,
    }
});

export const darkStyle = StyleSheet.create({
    ...styleCard,
    container: {
        ...styleCard.container,
        backgroundColor: "#fff",
        borderColor:"#af4",
        borderWidth:3
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
        backgroundColor: "#033",
        borderColor:"#af4",
        borderWidth:3
    },
    containerText: {
        ...styleCard.containerText,
        color: "#fff"
    }
})