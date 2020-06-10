import React from "react";
import Modal from "react-native-modalbox";

import { Text, View, FlatList, ScrollView } from "react-native";
import { Tabs, Tab, Button } from "native-base";
import { Calendar, DateObject } from "react-native-calendars";
import TimeTags, { TagObject } from "../../Components/TimeTags";

export default class AddPlanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isOpen: false,
      switchPicker: !false,
      fastingList: [],
      timeTags: [
        { label: "10:00", selected: false },
        { label: "11:00", selected: false },
        { label: "12:00", selected: false },
        { label: "13:00", selected: false },
        { label: "14:00", selected: true },
        { label: "15:00", selected: false },
        { label: "16:00", selected: false },
        { label: "17:00", selected: false },
        { label: "18:00", selected: false },
        { label: "19:00", selected: false },
        { label: "20:00", selected: false },
        { label: "21:00", selected: false },
        { label: "22:00", selected: false },
        { label: "23:00", selected: false },
        { label: "00:00", selected: false },
      ],
      currentDate: "2020-06-20",
      currentTime: "12:00",
    };
    this.index = 0;
    this.updateKey = "start";
  }

  saveFasting = () => {
    const fastingList = this.state.fastingList.map((v, i) => {
      let IFObj = {
        key: v.key,
        startString: `${v.start.date} ${v.start.time}`,
        endString: `${v.end.date} ${v.end.time}`,
      };
      IFObj.start = new Date(IFObj.startString).getTime();
      IFObj.end = new Date(IFObj.endString).getTime();
      IFObj.diff = IFObj.end - IFObj.start;
      return IFObj;
    });
    console.log(fastingList);
  };

  openDatePicker(index, update) {
    this.index = index;
    this.updateKey = update;
    this.setState({
      isOpen: !this.state.isOpen,
      switchPicker: true,
    });
  }

  openTimetags(index, update) {
    this.index = index;
    this.updateKey = update;
    this.setState({
      isOpen: !this.state.isOpen,
      switchPicker: false,
    });
  }

  addFastingItem = (item) => {
    item = item || {
      key: (Math.random() * (Math.random() | 10)).toString().substr(13),
      start: { date: "2020-06-08", time: "21:10" },
      end: { date: "2020-06-08", time: "21:10" },
    };
    this.setState({ fastingList: [...this.state.fastingList, item] });
  };

  delFastingItem = (index) => {
    this.setState({
      fastingList: this.state.fastingList.filter((_, i) => i !== index),
    });
  };

  editFaastingItemDate = (day: DateObject) => {
    this.setState({
      fastingList: this.state.fastingList.map((item, i) =>
        i == this.index
          ? {
              ...item,
              [this.updateKey]: {
                ...item[this.updateKey],
                date: day.dateString,
              },
            }
          : item
      ),
    });
  };

  editFaastingItemTime = (tag: TagObject, index: number) => {
    this.setState({
      timeTags: this.state.timeTags.map((item, i) => ({
        ...item,
        selected: i == index,
      })),
      currentTime: tag.label,
      fastingList: this.state.fastingList.map((item, i) =>
        i == this.index
          ? {
              ...item,
              [this.updateKey]: { ...item[this.updateKey], time: tag.label },
            }
          : item
      ),
    });
  };

  renderFastingItem = ({ item, index, separators }) => (
    <Button
      key={index}
      style={{
        marginVertical: 5,
        marginHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
      }}
    >
      <Text>Icon</Text>
      <Text onPress={() => this.openDatePicker(index, "start")}>
        {item.start.date}
      </Text>
      <Text onPress={() => this.openTimetags(index, "start")}>
        {item.start.time}
      </Text>
      <Text onPress={() => this.openDatePicker(index, "end")}>
        {item.end.date}
      </Text>
      <Text onPress={() => this.openTimetags(index, "end")}>
        {item.end.time}
      </Text>
      <Text onPress={() => this.delFastingItem(index)}>X</Text>
    </Button>
  );

  renderFastingItemKey = (item) => item.key;

  renderModalTitle() {
    if (!this.state.switchPicker) {
      return <Text style={{ marginBottom: 20 }}>选择时间</Text>;
    }
    return;
  }

  render() {
    // console.log(this.state.fastingList);

    return (
      <ScrollView>
        <Button primary onPress={() => this.addFastingItem()}>
          <Text> Primary </Text>
        </Button>
        <Button success onPress={this.saveFasting}>
          <Text> Primary </Text>
        </Button>
        <FlatList
          data={this.state.fastingList}
          renderItem={this.renderFastingItem}
          keyExtractor={this.renderFastingItemKey}
          ListEmptyComponent={() => <Text>暂无数据</Text>}
        />

        <Modal
          isOpen={this.state.isOpen}
          style={{
            height: 350,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            overflow: "hidden",
          }}
          position={"bottom"}
          swipeArea={20}
          coverScreen={true}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30 }}>-</Text>
              {this.renderModalTitle()}
            </View>
            <View style={{ flex: 1 }}>
              {this.state.switchPicker ? (
                <Calendar
                  theme={{
                    textDayFontSize: 14,
                    textMonthFontSize: 14,
                    textDayHeaderFontSize: 14,
                  }}
                  onDayPress={this.editFaastingItemDate}
                />
              ) : (
                <TimeTags
                  onSwitchTag={this.editFaastingItemTime}
                  tags={this.state.timeTags}
                />
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
