import React from "react";
import Modal from "react-native-modalbox";

import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Tabs, Tab, ScrollableTab, Button } from "native-base";
import { Calendar, Agenda, CalendarList } from "react-native-calendars";
import TimeTags from "../../Components/TimeTags";

export default class AddPlanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      currentDate: '2020-06-20',
      currentTime: '12:00',
    };
    this.onSwitchTimeTag.bind(this)
  }

  onSwitchTimeTag(tag, index) {
    let tags = JSON.parse(JSON.stringify(this.state.timeTags));
    tags.forEach((v, i) => (v.selected = i == index));
    this.setState({ timeTags: tags, currentTime: tag.label });
    // this.setState({ currentTime: tag.label })
  }

  render() {
    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };

    return (
      <ScrollView style={{ flex: 1 }}>
        <Button
          onPress={() => this.refs.modal6.open()}
          style={{ marginVertical: 5, marginHorizontal: 10 }}
        >
          <Text>Open</Text>
        </Button>


        <Modal
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 380,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            overflow: 'hidden'
          }}
          position={"bottom"}
          ref={"modal6"}
          swipeArea={20}
          coverScreen={true}
        >
          <View>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#eee' }}>
              <Tab
                tabStyle={{ backgroundColor: '#fff' }}
                activeTabStyle={{ backgroundColor: '#fff' }}
                activeTextStyle={{ color: '#000' }}
                heading={this.state.currentDate}>
                <Calendar
                  onDayPress={(day) => { this.setState({ currentDate: day.dateString }) }}
                  markedDates={{
                    [this.state.currentDate]: { selected: true },
                  }}
                />
              </Tab>
              <Tab
                tabStyle={{ backgroundColor: '#fff' }}
                activeTabStyle={{ backgroundColor: '#fff' }}
                activeTextStyle={{ color: '#000' }}
                heading={this.state.currentTime}>
                <TimeTags onSwitchTag={(tag, index) => this.onSwitchTimeTag(tag, index)} tags={this.state.timeTags} />
              </Tab>
            </Tabs>
          </View>
        </Modal>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: 380,
  },

});
