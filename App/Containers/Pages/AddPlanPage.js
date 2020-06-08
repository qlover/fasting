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
      isOpen: false,
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

  openPicker() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Button
          style={{
            marginVertical: 5,
            marginHorizontal: 20,
            backgroundColor: "#fff",
          }}
        >
          <Text>Icon</Text>
          <Text onPress={() => this.openPicker()}>
            {this.state.currentDate} {this.state.currentTime}
          </Text>
          <Text onPress={() => this.openPicker()}>
            {this.state.currentDate} {this.state.currentTime}
          </Text>
          <Text>Icon √</Text>
        </Button>

        <Modal
          isOpen={this.state.isOpen}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 380,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            overflow: "hidden",
          }}
          position={"bottom"}
          ref={"modal6"}
          swipeArea={20}
          coverScreen={true}
        >
          <Tabs tabBarUnderlineStyle={{ backgroundColor: "#eee" }}>
            <Tab
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={{ color: "#000" }}
              heading={this.state.currentDate}
            >
              <Calendar
                onDayPress={(day) => {
                  this.setState({ currentDate: day.dateString });
                }}
                markedDates={{
                  [this.state.currentDate]: { selected: true },
                }}
              />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={{ color: "#000" }}
              heading={this.state.currentTime}
            >
              <TimeTags
                onSwitchTag={(tag, index) => this.onSwitchTimeTag(tag, index)}
                tags={this.state.timeTags}
              />
            </Tab>
          </Tabs>
        </Modal>
      </ScrollView>
    );
  }
}
