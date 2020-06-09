import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default class Count extends Component {
  render() {
    return (
      <View>
        <Text>count</Text>
      </View>
    );
  }
}
