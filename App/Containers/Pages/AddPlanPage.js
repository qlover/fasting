import React from "react";
import Modal from "react-native-modalbox";

import { Text, Button, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Tabs, Tab, ScrollableTab } from "native-base";
import { Calendar } from "react-native-calendars";
import TimeTags from "../../Components/TimeTags";

export default class AddPlanPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    };
  }

  onClose() {
    console.log("Modal just closed");
  }

  onOpen() {
    console.log("Modal just opened");
  }

  onClosingState(state) {
    console.log("the open/close of the swipeToClose just changed");
  }

  renderList() {
    var list = [];

    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>
      );
    }

    return list;
  }

  render() {
    const _times = [
      { label: "10:00", selected: false },
      { label: "11:00", selected: false },
      { label: "12:00", selected: false },
      { label: "13:00", selected: false },
      { label: "14:00", selected: true },
      { label: "15:00", selected: false },
      { label: "16:00", selected: false },
      { label: "17:00", selected: false },
      { label: "18:00", selected: false },
    ];
    return (
      <ScrollView style={{ flex: 1 }}>
        <Button
          title="Position bottom"
          onPress={() => this.refs.modal6.open()}
          style={styles.btn}
        />

        <Modal
          style={[styles.modal, styles.modal4]}
          position={"bottom"}
          ref={"modal6"}
          swipeArea={20}
          coverScreen={true}
        >
          <View>
            <Tabs renderTabBar={() => <ScrollableTab />}>
              <Tab heading="时间" children={<TimeTags />}>
                
              </Tab>
              <Tab heading="日期">
                <Calendar
                  // Collection of dates that have to be marked. Default = {}
                  markedDates={{
                    "2020-05-16": {
                      selected: true,
                      marked: true,
                      selectedColor: "blue",
                    },
                    "2020-05-17": { marked: true },
                    "2020-05-18": {
                      marked: true,
                      dotColor: "red",
                      activeOpacity: 0,
                    },
                    "2020-05-19": { disabled: true, disableTouchEvent: true },
                  }}
                />
              </Tab>
            </Tabs>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  modal: {
    justifyContent: "center",
    alignItems: "center",
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998",
  },

  modal3: {
    height: 300,
    width: 300,
  },

  modal4: {
    height: 300,
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10,
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent",
  },

  text: {
    color: "black",
    fontSize: 22,
  },
});
