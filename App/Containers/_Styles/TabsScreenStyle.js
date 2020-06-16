import { StyleSheet } from "react-native";
import { AppStyles } from "../../Themes";
import { Metrics, Fonts, Colors } from "../../Themes";

export default StyleSheet.create({
  ...AppStyles.screen,
  ...AppStyles.card,
  topContainer: {
    backgroundColor: "#0D6ACB",
    alignItems: "center",
    minHeight: 200,
  },
  opactiyBtn: {
    ...AppStyles.card.cardRow,
    alignItems: "center",
    backgroundColor: "rgb(11, 95, 182)",
    padding: 3,
    borderRadius: Metrics.doubleBaseMargin,
  },

  cardSection: {
    justifyContent: "center",
  },
  title: {
    fontSize: Fonts.size.h4,
    fontWeight: "bold",
    color: Colors.showText,
    margin: Metrics.smallMargin,
  },
  subText: {
    fontSize: Fonts.size.small,
    color: Colors.gray,
  },
});
