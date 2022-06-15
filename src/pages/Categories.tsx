import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import I18n from '../languages/index';
import { Dark_Theme, Light_Theme } from '../styles/style';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import { Divider } from "react-native-paper"
import CategoriesCard from '../components/categoriesCard/CategoriesCard';

export default function Categories() {
    const navigation: any = useNavigation();
    const { colors } = useTheme();
    const darkMode = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={darkMode == true ? Dark_Theme.mainContainer : Light_Theme.mainContainer} >
                <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >
                    {I18n.t('Categories')}
                </Text>
                <CategoriesCard />
                <Divider />
        </SafeAreaView>
    );
}
