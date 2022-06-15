import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import * as RNLocalize from "react-native-localize";
import { useNavigation, useTheme } from '@react-navigation/native';
import I18n from '../languages/index';
import CategoryCard from '../components/categoryCard/CategoryCard';
import { Dark_Theme, Light_Theme } from '../styles/style';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import TipsCard from '../components/tipsCard/TipsCard';
import ContentCard from '../components/contentCard/ContentCard';
import { Divider } from "react-native-paper"
import { cleaningData } from '../data/cleaningData';
import { cureData } from '../data/cureData';
import { foodData } from '../data/foodData';
import B1 from '../ads/Banner/B1';

export default function Home() {
  const navigation: any = useNavigation();
  const { colors } = useTheme();
  const darkMode = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={darkMode == true ? Dark_Theme.mainContainer : Light_Theme.mainContainer} >
      <ScrollView>
        <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >{I18n.t('Categories')}</Text>
        <CategoryCard />
        <Divider />
        <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >{I18n.t('Tips')}</Text>
        <TipsCard />
        <Divider />
        <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >{I18n.t('Cleaning')}</Text>
        <ContentCard dataName={cleaningData} bgColorLight="#ffaf" bgColorDark="#7af" />
        <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >{I18n.t('Cure')}</Text>
        <ContentCard dataName={cureData} bgColorLight="#ffafaf" bgColorDark="#aaf" />
        <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >{I18n.t('Food')}</Text>
        <ContentCard dataName={foodData} bgColorLight="#e124bb" bgColorDark="#f74" />
        <Divider />
      </ScrollView>
      <View style={{ alignItems: "center" }}><B1 /></View>
    </SafeAreaView>
  );
}
