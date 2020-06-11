import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigator from "./MainTabNavigator";
import OtherStackNavigator from "./OtherStackNavigator";
import ModalStackNavigator from "./ModalStackNavigator";
import AddPlanPage from "../../Containers/Pages/AddPlanPage";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={MainTabNavigator} />
      <Stack.Screen name="AddPlan" component={AddPlanPage} />

      <Stack.Screen name="Other" component={OtherStackNavigator} />
      <Stack.Screen name="Modal" component={ModalStackNavigator} />
    </Stack.Navigator>
  );
}
