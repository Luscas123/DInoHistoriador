import React, { Component } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./tabNavigator";
import Profile from "../screens/profile";

const Draw = createDrawerNavigator();

export default class Drawer extends Component {
  render() {
    return (
      <Draw.Navigator>
        <Draw.Screen name="BottomTab" component={TabNavigator} />
        <Draw.Screen name="Profile" component={Profile} />
      </Draw.Navigator>
    );
  }
}
