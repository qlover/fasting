import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Containers/HomeTab/Home";
import Count from "../../Containers/HomeTab/Count";
import My from "../../Containers/HomeTab/My";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Count" component={Count} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
}
