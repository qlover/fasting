import React from "react";
import { Text, View, FlatList, ScrollView, StyleSheet } from "react-native";
import { Button } from "native-base";
import { Portal, FAB, Provider } from "react-native-paper";
import Modal from "react-native-modalbox";
import TimeTags, { TagObject } from "../../Components/TimeTags";

import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

export default class AddPlanPage extends React.Component {
  constructor(props) {
    super(props);
    // 从今天开始后20天日期
    const interal = moment.rangeFromInterval("day", 20);
    const dateTags = [
      ...moment.range(interal.start, interal.end).by("day"),
    ].map((m) => m.format("MM-DD"));

    this.state = {
      open: true,
      isOpen: !false,
      switchPicker: !false,
      fastingList: [],
      dateTags,
      timeTags: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
      ],
      currentTimeIndex: 1,
      currentDateIndex: 1,
    };
    this.index = 0;
    this.updateKey = "start";
  }

  editFaastingItemDate = (item, index) => {
    this.setState({ currentDateIndex: index });
  };

  editFaastingItemTime = (item, index) => {
    this.setState({ currentTimeIndex: index });
  };

  render() {
    return (
      <ScrollView>
        <TimeTags
          onSwitchTag={this.editFaastingItemDate}
          tags={this.state.dateTags}
          selectedIndex={this.state.currentDateIndex}
        />
        <TimeTags
          onSwitchTag={this.editFaastingItemTime}
          tags={this.state.timeTags}
          selectedIndex={this.state.currentTimeIndex}
        />
      </ScrollView>
    );
  }
}
