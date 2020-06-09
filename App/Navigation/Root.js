import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
