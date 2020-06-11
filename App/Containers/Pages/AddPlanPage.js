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
    const interal = moment.rangeFromInterval("day", 15);
    const dateTags = [
      ...moment.range(interal.start, interal.end).by("day"),
    ].map((m) => m.format("MM-DD"));

    this.state = {
      open: true,
      isOpen: false,
      switchPicker: !false,
      fastingList: [],
      dateTags,
      timeTags: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
      currentTimeIndex: 1,
      currentDateIndex: 1,
    };
    this.index = 0;
    this.updateKey = "start";
  }

  saveFasting = () => {
    const fastingList = this.state.fastingList
      .map((v) => {
        let IFObj = {
          key: v.key,
          startString: `${v.start.date} ${v.start.time}`,
          endString: `${v.end.date} ${v.end.time}`,
        };
        IFObj.start = new Date(IFObj.startString).getTime();
        IFObj.end = new Date(IFObj.endString).getTime();
        IFObj.diff = IFObj.end - IFObj.start;
        return IFObj;
      })
      .sort((i1, i2) => i1.diff - i2.diff) // 按相差值排序
      .sort((i1, i2) => i1.start - i2.start);
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
      start: {
        date: moment().format("MM-DD"),
        time: moment().format("HH:mm"),
      },
      end: {
        date: moment().format("MM-DD"),
        time: moment().format("HH:mm"),
      },
    };
    this.setState({ fastingList: [...this.state.fastingList, item] });
  };

  delFastingItem = (index) => {
    this.setState({
      fastingList: this.state.fastingList.filter((_, i) => i !== index),
    });
  };

  editFaastingItemDate = (tag, index) => {
    this.setState({
      currentDateIndex: index,
      fastingList: this.state.fastingList.map((item, i) =>
        i == this.index
          ? {
              ...item,
              [this.updateKey]: { ...item[this.updateKey], date: tag },
            }
          : item
      ),
    });
  };

  editFaastingItemTime = (tag, index) => {
    this.setState({
      currentTimeIndex: index,
      fastingList: this.state.fastingList.map((item, i) =>
        i == this.index
          ? {
              ...item,
              [this.updateKey]: { ...item[this.updateKey], time: tag },
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
    return (
      <Provider>
        <ScrollView>
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
                  <TimeTags
                    onSwitchTag={this.editFaastingItemDate}
                    tags={this.state.dateTags}
                    selectedIndex={this.state.currentDateIndex}
                  />
                ) : (
                  <TimeTags
                    onSwitchTag={this.editFaastingItemTime}
                    tags={this.state.timeTags}
                    selectedIndex={this.state.currentTimeIndex}
                  />
                )}
              </View>
            </View>
          </Modal>
        </ScrollView>

        <Portal>
          <FAB
            icon="plus"
            style={[styles.fab, { bottom: 10 }]}
            onPress={() => this.saveFasting()}
          />
          <FAB
            icon="plus"
            style={[styles.fab, { bottom: 80 }]}
            onPress={() => this.addFastingItem(null)}
          />
        </Portal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 10,
  },
});
