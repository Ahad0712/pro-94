import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/homeScreen"
import ListScreen from "./screens/listscreen"
import {createAppContainer, createSwitchNavigator} from "react-navigation"

export default class App extends Component {
  render(){
  return (
    <View>
    <AppContainer/>
    </View>
  );
}
}

var AppNavigator= createSwitchNavigator({
  LoginScreen:LoginScreen,
  HomeScreen:HomeScreen,
  ListScreen:ListScreen,
})

const AppContainer= createAppContainer(AppNavigator)