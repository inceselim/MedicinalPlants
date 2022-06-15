import React from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import I18n from '../languages/index';
import { Dark_Theme, Light_Theme } from '../styles/style';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import { Divider } from "react-native-paper"

import ContentCard from '../components/contentCard/ContentCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContentCardDetail from '../components/contentCard/ContentCardDetail';
import { selectBraidData, selectCleaningData, selectCureData, selectFoodData, selectInterestingData, selectPlantData, selectSoapData, selectStoneData, selectYogaData } from '../redux/features/dataSlice.js/dataSlice';

import { cureData } from '../data/cureData';
import { cleaningData } from '../data/cleaningData';
import { interestingData } from '../data/interestingData';
import B2 from '../ads/Banner/B2';


export default function CategoryDetail(props: any) {
    const navigation: any = useNavigation();
    const { colors } = useTheme();
    const darkMode = useSelector(selectCount)
    const selectData1 = useSelector(selectCleaningData)
    const selectData2 = useSelector(selectCureData)
    const selectData3 = useSelector(selectInterestingData)
    const selectData4 = useSelector(selectStoneData)
    const selectData5 = useSelector(selectBraidData)
    const selectData6 = useSelector(selectSoapData)
    const selectData7 = useSelector(selectPlantData)
    const selectData8 = useSelector(selectFoodData)
    const selectData9 = useSelector(selectYogaData)
    const dispatch = useDispatch()

    const dataName: any = props.route.params.dataName
    console.log(dataName)




    return (
        <SafeAreaView style={darkMode == true ? Dark_Theme.mainContainer : Light_Theme.mainContainer} >
            <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >
                {I18n.t('Category')} {I18n.t('Detail')}</Text>
            <FlatList
            ListFooterComponent={<View style={{ alignItems: "center", }}><B2 /></View>}
                data={
                    dataName == "cleaningData" ? selectData1 :
                        dataName == "cureData" ? selectData2 :
                            dataName == "interestingData" ?
                                selectData3 :
                                dataName == "stoneData" ? selectData4 :
                                    dataName == "braidData" ? selectData5 :
                                        dataName == "soapData" ?
                                            selectData6 :
                                            dataName == "plantData" ? selectData7 :
                                                dataName == "foodData" ? selectData8 :
                                                    dataName == "yogaData" ? selectData9 :
                                                        null}
                renderItem={(item) => (
                    <View style={darkMode == true ? [darkStyle.container,
                    { backgroundColor: "#f7a190" }] : [lightStyle.container, { backgroundColor: "#aaf" }]} >
                        <TouchableOpacity style={{ justifyContent: "space-between" }}
                            onPress={() => navigation.navigate("Content", {
                                title: item.item.title,
                                content: item.item.content,
                                img: item.item.img,
                                video1: item.item.video1,

                                b1: item.item.b1,
                            })} >
                            <Text style={darkMode == true ? darkStyle.containerText : lightStyle.containerText}>
                                {I18n.t(item.item.title)}
                                <MaterialCommunityIcons name="greater-than"
                                    size={17} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                )} />
        </SafeAreaView>
    );
}

let windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styleCard = StyleSheet.create({
    container: {
        height: 40,
        width: windowWidth - 44,
        borderRadius: 80,
        borderWidth: 2,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 12,
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

const darkStyle = StyleSheet.create({
    ...styleCard,
    container: {
        ...styleCard.container,
        backgroundColor: "#af3f8f",
        borderColor: "#000"
    },
    containerText: {
        ...styleCard.containerText,
        color: "#000"
    }
})

const lightStyle = StyleSheet.create({
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