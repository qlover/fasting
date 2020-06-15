import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Containers/HomeTab/Home";
import Count from "../../Containers/HomeTab/Count";
import My from "../../Containers/HomeTab/My";
import { extend } from "lodash";

const Tab = createBottomTabNavigator();

export default class MainTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.log("MainTabNavigator", this.props);
    this.props.navigation.setOptions({
      title: "标题bbbb",
    });
  }
  render() {
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
}
