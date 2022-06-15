
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { darkStyle, lightStyle } from "./style"

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../../redux/features/themeSlice/themeSlice"

import { tipsData } from '../../data/TipsData';

import I18n from '../../languages/index';

export default function TipsCard() {
  const darkMode = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <SafeAreaView>
      <FlatList
        data={tipsData} horizontal pagingEnabled
        renderItem={(item) => (
          <View style={darkMode == true ? darkStyle.container : lightStyle.container} >
            <Text style={darkMode == true ? darkStyle.containerText : lightStyle.containerText}>{I18n.t(item.item.id)}</Text>
          </View>
        )} />
    </SafeAreaView>
  );
}