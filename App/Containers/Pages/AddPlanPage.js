import React from "react";
import Modal from "react-native-modalbox";

import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Tabs, Tab, Button } from "native-base";
import { Calendar } from "react-native-calendars";
import TimeTags from "../../Components/TimeTags";

export default class AddPlanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      switchPicker: !false,
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
      currentDate: "2020/06/20",
      currentTime: "12:00",
    };
    this.onSwitchTimeTag.bind(this);
  }

  onSwitchTimeTag(tag, index) {
    let tags = JSON.parse(JSON.stringify(this.state.timeTags));
    tags.forEach((v, i) => (v.selected = i == index));
    this.setState({ timeTags: tags, currentTime: tag.label });
    // this.setState({ currentTime: tag.label })
  }

  openDatePicker() {
    this.setState({ isOpen: !this.state.isOpen, switchPicker: true });
  }

  openTimetags() {
    this.setState({ isOpen: !this.state.isOpen, switchPicker: false });
  }

  renderModalTitle() {
    if (!this.state.switchPicker) {
      return <Text style={{ marginBottom: 20 }}>选择时间</Text>;
    }
    return;
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Button
          style={{
            marginVertical: 5,
            marginHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#fff",
            flexDirection: "row",
          }}
        >
          <Text>Icon</Text>
          <Text onPress={() => this.openDatePicker()}>
            {this.state.currentDate}
          </Text>
          <Text onPress={() => this.openTimetags()}>
            {this.state.currentTime}
          </Text>

          <Text onPress={() => this.openDatePicker()}>
            {this.state.currentDate}
          </Text>
          <Text onPress={() => this.openTimetags()}>
            {this.state.currentTime}
          </Text>

          <Text>Icon √</Text>
        </Button>

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
                  onDayPress={(day) => {
                    this.setState({ currentDate: day.dateString });
                  }}
                  markedDates={{
                    [this.state.currentDate]: { selected: true },
                  }}
                />
              ) : (
                <TimeTags
                  onSwitchTag={(tag, index) => this.onSwitchTimeTag(tag, index)}
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
