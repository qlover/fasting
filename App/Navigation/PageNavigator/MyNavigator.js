import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddPlanPage from "../../Containers/Pages/AddPlanPage";

const Stack = createStackNavigator();

export default class MyNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AddPlan" component={AddPlanPage} />
      </Stack.Navigator>
    );
  }
}

