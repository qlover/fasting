import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainTab from "./MainTab";
import AddPlanPage from "../Containers/Pages/AddPlanPage";
import MyNavigator from "./PageNavigator/MyNavigator";

const Stack = createStackNavigator();

export default class HomeNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AddPlan" component={AddPlanPage} />
        <Stack.Screen name="Main" component={MainTab} />
      </Stack.Navigator>
    );
  }
}
