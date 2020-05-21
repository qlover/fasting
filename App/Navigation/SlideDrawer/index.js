import React, { Component } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTab from "../MainTab";
const Drawer = createDrawerNavigator();
const About = () => <Text>About Page!</Text>;

export default class SlideDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="MainTab" component={MainTab} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  }
}
