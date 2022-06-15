import * as React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { StackNav } from '../navigation/StackNav';

import { Provider } from 'react-redux';
import store from '../redux/store/store';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"
import { Dark_Theme, Light_Theme } from '../styles/style';
import StackDrawerNav from '../navigation/StackDrawerNav';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  const { colors } = useTheme();
  const darkMode = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <NavigationContainer theme={darkMode === true ? Dark_Theme : Light_Theme}>
      <StackNav />
    </NavigationContainer>
  );
};
