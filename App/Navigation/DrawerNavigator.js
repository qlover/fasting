import React, { Component } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigator from "./HomeNavigator";
const Drawer = createDrawerNavigator();

const About = () => <Text>About Page!</Text>;

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeTab" component={HomeNavigator} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="About2" component={About} />
        <Drawer.Screen name="About3" component={About} />
      </Drawer.Navigator>
    );
  }
}
