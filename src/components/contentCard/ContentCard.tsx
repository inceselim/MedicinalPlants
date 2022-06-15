
import React from 'react';
import { SafeAreaView, View, TouchableOpacity, FlatList, Text } from 'react-native';
import { darkStyle, lightStyle } from "./style"
import { categoryData } from '../../data/CategoryData';
import { cleaningData } from '../../data/cleaningData';

import I18n from '../../languages/index';

import { useSelector } from 'react-redux';
import { selectCount } from "../../redux/features/themeSlice/themeSlice"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function ContentCard(props: any) {
    const navigation: any = useNavigation();
    const dataName: any = props.dataName
    const bgColorDark: any = props.bgColorDark
    const bgColorLight: any = props.bgColorLight
    const darkMode = useSelector(selectCount)
    return (
        <SafeAreaView>
            <FlatList
                data={dataName} horizontal pagingEnabled
                renderItem={(item) => (
                    <View style={darkMode == true ? [darkStyle.container, { backgroundColor: bgColorDark }] : [lightStyle.container, { backgroundColor: bgColorLight }]} >
                        <TouchableOpacity style={{ justifyContent: "space-between" }}
                            onPress={() => navigation.navigate("Content", {
                                title: item.item.title,
                                content: item.item.content,
                                img: item.item.img,
                                video1: item.item.video1,

                                b1: item.item.b1,
                                b2: item.item.b2,
                                b3: item.item.b3,
                                b4: item.item.b4,
                                b5: item.item.b5,
                                b6: item.item.b6,
                                b7: item.item.b7,
                                b8: item.item.b8,
                                b9: item.item.b9,
                                b10:item.item.b10,
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