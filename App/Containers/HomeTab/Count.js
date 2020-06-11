import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
// redux
import { connect } from "react-redux";
import TabsScreenStyle from "../_Styles/TabsScreenStyle";
import CardBox, { Row } from "../../Components/CardBox";
import Svg, { Path, G, Circle } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Feather";

class Count extends Component {
  componentDidMount() {}

  render() {
    return (
      <ScrollView style={{ backgroundColor: "steelblue" }}>
        <View style={TabsScreenStyle.topContainer}>
          <View>
            <Text style={TabsScreenStyle.bigTitle}>Qlover</Text>
          </View>
          <View>
            <Text style={TabsScreenStyle.smallTitle}>
              Hi, welcome to my 'if' app
            </Text>
          </View>
        </View>

        <View style={TabsScreenStyle.container}>
          <Row style={TabsScreenStyle.cardRow}>
            <CardBox shadow>
              <Row style={TabsScreenStyle.cardRow}>
                <Text style={TabsScreenStyle.title}>Weekly Insight</Text>
                <Ionicons
                  style={TabsScreenStyle.title}
                  name="more-horizontal"
                />
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
            </CardBox>
          </Row>
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
