import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default class Profile extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile1" component={() => <Text>Profile1</Text>} />
        <Stack.Screen name="Profile2" component={() => <Text>Profile2</Text>} />
      </Stack.Navigator>
    );
  }
}
