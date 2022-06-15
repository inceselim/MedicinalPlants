import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { StackNav } from "./StackNav";
import { Switch } from "react-native";
import { DrawerActions, useNavigation, useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import { Dark_Theme, Light_Theme } from '../styles/style';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Content from "../pages/Content";
import I18n from "../languages";
import CategoryDetail from "../pages/CategoryDetail";
import Categories from "../pages/Categories";

const Drawer = createDrawerNavigator();

const StackDrawerNav = () => {
    const navigation: any = useNavigation();
    const { colors } = useTheme();
    const darkMode = useSelector(selectCount)
    const dispatch = useDispatch()
    return (
        <Drawer.Navigator initialRouteName="StackNav" screenOptions={{
            drawerActiveBackgroundColor: "#022", headerShown: true, drawerLabelStyle: { fontSize: 16 },
            // headerLeft: () => {
            //     return (
            //         <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            //             <MaterialCommunityIcons name="menu-open"
            //                 color={darkMode == true ? "#fff" : "#033"}
            //                 style={{ marginLeft: 16 }} size={28} />
            //         </TouchableOpacity >
            //     )
            // },
            headerRight: () => {
                return (
                    <Switch value={darkMode} ios_backgroundColor="#a77577" style={{ marginRight: 16 }}
                        trackColor={{ false: "#167577", true: "#f910ff" }}
                        onValueChange={() => dispatch(increment())} />
                )
            },
            drawerActiveTintColor: "#fff"
        }}>
            <Drawer.Screen name="Home" component={Home} options={{ title: I18n.t("Home") }} />
            <Drawer.Screen name="Categories" component={Categories} options={{ title: I18n.t("Categories") }} />
        </Drawer.Navigator >
    );
}

export default StackDrawerNav;