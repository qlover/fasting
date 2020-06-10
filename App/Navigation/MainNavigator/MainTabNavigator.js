import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Containers/HomeTab/Home";
import Count from "../../Containers/HomeTab/Count";
import My from "../../Containers/HomeTab/My";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "home",
        }}
      />
      <Tab.Screen
        name="Count"
        component={Count}
        options={{
          title: "count",
        }}
      />
      <Tab.Screen
        name="My"
        component={My}
        options={{
          title: "my",
        }}
      />
    </Tab.Navigator>
  );
}
