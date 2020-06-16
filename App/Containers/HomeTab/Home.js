import React, { Component } from "react";
import { ScrollView, Modal, Text, View } from "react-native";
import { connect } from "react-redux";
// 进度条
import { AnimatedCircularProgress } from "react-native-circular-progress";
// 样式
import Styles from "../_Styles/TabsScreenStyle";
import { Progress } from "../../Themes/Props";
import { NOTFI_ACTOIN_OK } from "../../Config/events";
import Ionicons from "react-native-vector-icons/AntDesign";
import Row, { Col, RowStyle } from "../../Components/Row";

let timer = null;
let PERCENT_FULL = 100;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 进度条的百分比
      percent: this.nextPercent(),
      lastTime: "00:00",
      status: 0,
    };
    // this.ScreenNofifica = new ScreenNofifica();
    // this.onOk.bind(this);
  }

  componentDidMount() {
    // this.props.setNextTime({
    //   start: +new Date("2020/05/17 08:00:00"),
    //   end: +new Date("2020/05/18 00:00:00"),
    // });
    // nextTime()
    //   .then((v) => {
    //     // if (v.data) {
    //     if (this.state.percent < PERCENT_FULL && !this.intervalTask()) {
    //       this.setState({ status: 1 });
    //       timer = setInterval(() => this.intervalTask(), 1000);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("nextTime error<", e);
    //   });
  }

  onOk = (info, e) => {
    console.log("ok 事件", info.id);
    this.ScreenNofifica.cancelNotifById(info.id);
  };

  /**
   * 获取百分比进度
   */
  nextPercent() {
    // const {
    //   nextTime: { start, end },
    // } = this.props;
    // const now = Date.now();
    // if (start && end) {
    //   return now >= end
    //     ? PERCENT_FULL
    //     : round(getTimePercent(start, now, end), 2);
    // }
    return PERCENT_FULL;
  }

  /**
   * 进度长任务,完成返回true,其余情况false
   */
  intervalTask() {
    if (this.state.percent >= PERCENT_FULL) {
      console.log("Home progress over");
      this.componentWillUnmount();
      this.setState({ percent: PERCENT_FULL, status: 2, lastTime: "00:00:00" });
      // 启动通知
      this.ScreenNofifica.onAction(
        NOTFI_ACTOIN_OK,
        this.onOk
      ).runNativeService({ subText: "进度完成" });
      return true;
    }
    //计算出相差天数
    let diff = this.props.nextTime.end - +new Date();

    //计算出相差小时
    var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    // 进度和剩余时间
    this.setState({
      percent: this.nextPercent(),
      lastTime: `${hours}:${minutes}:${seconds}`,
    });
    return false;
  }

  componentWillUnmount() {
    timer && clearInterval(timer);
  }

  progressText(fill) {
    return (fill) => (
      <View style={{ width: 150, height: 150 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 100,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text>{this.renderStatusText()}</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 30 }}>{this.state.percent} %</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text>{this.state.lastTime}</Text>
          </View>
        </View>
      </View>
    );
  }

  /* 渲染部分 */
  renderGroup() {
    return (
      <View style={Styles.groupAround}>
        <View style={Styles.groupChild}>
          <Text>o</Text>
          <Text>已达成</Text>
          <Text>0</Text>
        </View>
        <View style={Styles.groupChild}>
          <Text>o</Text>
          <Text>未达成</Text>
          <Text>0</Text>
        </View>
        <View style={Styles.groupChild}>
          <Text>o</Text>
          <Text>剩余</Text>
          <Text>0</Text>
        </View>
      </View>
    );
  }

  renderStatusText() {
    return ["无计划", "禁食中", "进食中"][this.state.status];
  }
  render() {
    const props = {
      ...Progress,
      fill: this.state.percent,
      style: { marginVertical: 40 },
    };
    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.topContainer}>
          <AnimatedCircularProgress {...props}>
            {this.progressText()}
          </AnimatedCircularProgress>
          <View style={Styles.opactiyBtn}>
            <Ionicons
              style={{ color: "#fff", fontSize: 20, marginRight: 10 }}
              name="plus"
            />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
              New Plan
            </Text>
          </View>
        </View>

        <View style={Styles.sectionContainer}>
          <Row style={Styles.section}>
            <Col center shadow type="rect" style={Styles.cardBoxLeft}>
              <Ionicons name="setting" size={28} color="#d2d2d2" />
              <Text style={Styles.title}>6,291</Text>
              <Text style={Styles.subText}>of 10,000 steps</Text>
            </Col>
            <Col center shadow type="rect" style={Styles.cardBoxRight}>
              <Ionicons name="fire" size={28} color="#d2d2d2" />
              <Text style={Styles.title}>521</Text>
              <Text style={Styles.subText}>of 2,000 cal</Text>
            </Col>
          </Row>
          <Col center shadow style={Styles.section}>
            <Text style={Styles.subText}>Yerterday</Text>
            <Ionicons name="setting" size={28} color="#d2d2d2" />
            <Text style={Styles.title}>设置</Text>
          </Col>
          <Col center shadow style={Styles.section}>
            <Text st yle={Styles.subText}>
              Week
            </Text>
            <Ionicons name="setting" size={28} color="#d2d2d2" />
            <Text style={Styles.title}>设置</Text>
          </Col>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
