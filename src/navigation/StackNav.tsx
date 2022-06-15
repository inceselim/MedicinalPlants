import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useTheme } from '@react-navigation/native';

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import StackTab from "./StackTab";
import StackDrawerNav from "./StackDrawerNav";

const Stack = createStackNavigator();

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import { Dark_Theme, Light_Theme } from '../styles/style';
import { Button, Switch } from "react-native";
import Content from "../pages/Content";
import I18n from "../languages";
import Categories from "../pages/Categories";
import CategoryDetail from "../pages/CategoryDetail";

const StackNav = () => {
  const { colors } = useTheme();
  const darkMode = useSelector(selectCount)
  const dispatch = useDispatch()
  const navigation: any = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerRight: () => {
          return (
            <Switch value={darkMode} ios_backgroundColor="#167577" style={{ marginRight: 16 }}
              trackColor={{ false: "#167577", true: "#f910ff" }}
              onValueChange={() => dispatch(increment())} />
          )
        }
      }}>
      <Stack.Screen name="StackDrawerNav" component={StackDrawerNav} options={{ headerShown: false, title: I18n.t("Home") }} />
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false, title: I18n.t("Categories") }} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{ headerShown: true, title: I18n.t("Detail") }} />
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true, title: I18n.t("Detail") }} />
      <Stack.Screen name="Content" component={Content} options={{ headerShown: true, title: I18n.t("Content") }} />
    </Stack.Navigator>
  );
}

export { StackNav };
