import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
// redux
import { connect } from "react-redux";
import Styles from "../_Styles/TabsScreenStyle";
import Row, { Col } from "../../Components/Row";
import Svg, { Path, G, Circle } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Feather";

class Count extends Component {
  componentDidMount() {}

  render() {
    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.topContainer}>
          <View>
            <Text style={Styles.bigTitle}>Qlover</Text>
          </View>
          <View>
            <Text style={Styles.smallTitle}>Hi, welcome to my 'if' app</Text>
          </View>
        </View>

        <View style={Styles.sectionContainer}>
          <Col shadow style={Styles.section}>
            <Row>
              <Text style={Styles.title}>Weekly Insight</Text>
              <Ionicons style={Styles.title} name="more-horizontal" />
            </Row>
            <Svg
              width="100%"
              height="150"
              stroke="red"
              color="green"
              viewBox="20 20 350 200"
            >
              <Path
                d="M50,100 L100,40 L150,78 L200,95 L250,105 L300,65 L350,88"
                stroke="steelblue"
              />
              <G>
                <Circle cx="50" cy="100" fill="blue" stroke="none" r="5" />
                <Circle cx="100" cy="40" fill="blue" stroke="none" r="5" />
                <Circle cx="150" cy="78" fill="blue" stroke="none" r="5" />
                <Circle cx="200" cy="95" fill="blue" stroke="none" r="5" />
                <Circle cx="250" cy="105" fill="blue" stroke="none" r="5" />
                <Circle cx="300" cy="65" fill="blue" stroke="none" r="5" />
                <Circle cx="350" cy="88" fill="blue" stroke="none" r="5" />
              </G>
            </Svg>
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

export default connect(mapStateToProps, mapDispatchToProps)(Count);
