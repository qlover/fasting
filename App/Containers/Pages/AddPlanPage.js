import React from "react";
import Modal from "react-native-modalbox";

import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Tabs, Tab, Row } from "native-base";
import TimeTags from "../../Components/TimeTags";
import { Button } from "react-native-elements";
Button;

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

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <TimeTags />

        <Modal
          style={[styles.modal, styles.modal4]}
          position={"bottom"}
          ref={"modal6"}
          swipeArea={20}
          coverScreen={true}
        >
          <View>
            <View style={{ flex: 3, backgroundColor: "#0ff" }}>
              <Tabs
                tabBarUnderlineStyle={{
                  backgroundColor: "#000",
                  borderRadius: 5,
                }}
              >
                <Tab
                  tabStyle={{
                    backgroundColor: "#fff",
                  }}
                  activeTabStyle={{ backgroundColor: "#fff" }}
                  textStyle={{ color: "#000" }}
                  activeTextStyle={{ color: "#f00" }}
                  heading="日期"
                >
                  <Text>日期</Text>
                  <Text>日期</Text>
                  <Text>日期</Text>
                  <Text>日期</Text>
                  <Text>日期</Text>
                  <Text>日期</Text>
                </Tab>
                <Tab
                  tabStyle={{
                    backgroundColor: "#fff",
                  }}
                  activeTabStyle={{ backgroundColor: "#fff" }}
                  textStyle={{ color: "#000" }}
                  activeTextStyle={{ color: "#f00" }}
                  heading="时间"
                >
                  <Text>时间</Text>
                  <Text>时间</Text>
                  <Text>时间</Text>
                  <Text>时间</Text>
                  <Text>时间</Text>
                  <Text>时间</Text>
                </Tab>
              </Tabs>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#000",
                }}
              >
                <Text>确定</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#000",
                }}
              >
                <Text>取消</Text>
              </View>
            </View>
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
    backgroundColor: "#fff",
  },

  text: {
    color: "black",
    fontSize: 22,
  },
});
