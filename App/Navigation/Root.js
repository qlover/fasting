import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SlideDrawer from "./SlideDrawer";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "./Auth";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="AppMain" component={SlideDrawer} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
