import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./RootNavigator/RootStackNavigator";

export default function Root() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
