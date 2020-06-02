import React from "react";
import Modal from "react-native-modalbox";

import { Text, Button, StyleSheet, View, Dimensions, Alert, TouchableOpacity } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Tabs, Tab, ScrollableTab } from "native-base";

const width = Dimensions.get("window").width;
export default class TimeTags extends React.Component {
  constructor() {
    super();
    this.state = {
      times: [
        { label: "10:00", selected: false },
        { label: "11:00", selected: false },
        { label: "12:00", selected: false },
        { label: "13:00", selected: false },
        { label: "14:00", selected: true },
        { label: "15:00", selected: false },
        { label: "16:00", selected: false },
        { label: "17:00", selected: false },
        { label: "18:00", selected: false },
      ],
    };
    this.toggleItem.bind(this)
  }

  toggleItem(index) {
    let times = JSON.parse(JSON.stringify(this.state.times))
    times.forEach((v, i) => v.selected = i == index)

    console.log('times', times)
    this.setState({ times: times });
  }

  // UNSAFE_componentWillReceiveProps(props) {
  //   console.log("props", props);
  //   this.setState({ times: props });
  // }

  render() {
    const _items = [];
    this.state.times.map((item, index) => {
      _items.push(
        <TouchableOpacity activeOpacity={0.56} onPress={() => this.toggleItem(index)}>
          <View style={item.selected ? style.activeTag : style.tag}>
            <Text style={item.selected ? style.activeText : style.text}>
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View
        style={{
          position: 'absolute',
          flexDirection: "row",
          width: width,
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        {_items}
      </View>
    );
  }
}
const single_width = width * 0.25;

const style = StyleSheet.create({
  tag: {
    width: single_width,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderColor: "#000",
    marginBottom: 10,
    paddingVertical: 8,
  },
  text: {
    textAlign: "center",
    color: "#000",
  },

  activeTag: {
    width: single_width,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#00f",
    borderColor: "#00f",
    marginBottom: 10,
    paddingVertical: 8,
  },
  activeText: {
    textAlign: "center",
    color: "#fff",
  },
});
