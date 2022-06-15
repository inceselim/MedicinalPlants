
import React from 'react';
import { SafeAreaView, View, ScrollView, FlatList, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import { darkStyle, lightStyle } from "./style"

import { categoryData } from '../../data/CategoryData';

import I18n from '../../languages/index';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../../redux/features/themeSlice/themeSlice"
import { useNavigation } from '@react-navigation/native';

export default function CategoryCard() {
  const navigation: any = useNavigation();
  const darkMode = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <SafeAreaView>
      <FlatList
        data={categoryData} horizontal
        renderItem={(item) => (
          <View style={darkMode == true ? darkStyle.container : lightStyle.container} >
            <TouchableOpacity onPress={() => navigation.navigate("CategoryDetail", {
              dataName: item.item.dataName
            })}>
              <Text style={darkMode == true ? darkStyle.containerText : lightStyle.containerText}>
                {I18n.t(item.item.title)}
              </Text>
            </TouchableOpacity>
          </View>
        )} />
    </SafeAreaView>
  );
}