import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddPlanPage from "../../Containers/Pages/AddPlanPage";
const Stack = createStackNavigator();

export default class Setting extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SettingAddPlan" component={AddPlanPage} />
        <Stack.Screen name="Setting2" component={() => <Text>Setting2</Text>} />
      </Stack.Navigator>
    );
  }
}
