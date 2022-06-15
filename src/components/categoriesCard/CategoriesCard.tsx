
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { darkStyle, lightStyle } from "./style"

import { categoryData } from '../../data/CategoryData';

import I18n from '../../languages/index';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../../redux/features/themeSlice/themeSlice"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function CategoriesCard() {
    const navigation: any = useNavigation();
    const darkMode = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
            <FlatList
                data={categoryData}
                renderItem={(item) => (
                    <TouchableOpacity style={darkMode == true ? darkStyle.container : lightStyle.container}
                        onPress={() => navigation.navigate("CategoryDetail", {
                            dataName: item.item.dataName
                        })} >
                        <Text style={darkMode == true ? darkStyle.containerText : lightStyle.containerText}>
                            {I18n.t(item.item.title)}
                        </Text>
                        <MaterialCommunityIcons name="greater-than"
                            size={17} style={{ marginRight: 18 }} />
                    </TouchableOpacity>
                )} />
        </SafeAreaView>
    );
}