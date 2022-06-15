
import React from "react";
import { Switch } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import I18n from '../languages/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackDrawerNav from "./StackDrawerNav";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { StackNav } from "./StackNav";
import Content from "../pages/Content";
import CategoryDetail from "../pages/CategoryDetail";
import Categories from "../pages/Categories";

const Tab = createBottomTabNavigator();
import { useNavigation, useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import { Dark_Theme, Light_Theme } from '../styles/style';


const StackTab = () => {
  const navigation: any = useNavigation();
  const { colors } = useTheme();
  const darkMode = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <Tab.Navigator screenOptions={{
       headerShown: true, tabBarLabelStyle: { fontSize: 16 },
      headerRight: () => {
          return (
              <Switch value={darkMode} ios_backgroundColor="#a77577" style={{ marginRight: 16 }}
                  trackColor={{ false: "#167577", true: "#f910ff" }}
                  onValueChange={() => dispatch(increment())} />
          )
      },
      tabBarActiveTintColor: "#17a"
  }}>
      <Tab.Screen name="StackNav" component={StackNav} options={{
        headerShown: false, title: I18n.t('Home'),
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={22} />
        )}}/>
      <Tab.Screen name="Categories" component={Categories} options={{
         title: I18n.t('Categories'),
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={22} />
        )}}/>
    </Tab.Navigator>
  );
};

export default StackTab;