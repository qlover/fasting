// @flow

import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

export const shadowCard = {
  elevation: 5, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
  shadowColor: "#888", //  阴影颜色 platfrom:ios
};

export const baseCard = {
  justifyContent: "center",
  borderRadius: 10,
  backgroundColor: "#fff",
  overflow: "hidden",
};

const AppStyles = {
  screen: {
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    sectionContainer: {
      backgroundColor: Colors.background,
      padding: Metrics.doubleBaseMargin,
    },
    section: {
      marginBottom: Metrics.doubleBaseMargin,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    backgroundImage: {
      backgroundColor: "#0ff",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
    },
    sectionText: {
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: "center",
      fontWeight: "bold",
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
  },

  card: {
    cardRow: {
      paddingHorizontal: Metrics.doubleBaseMargin,
      marginBottom: Metrics.doubleBaseMargin,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cardBox: {
      ...baseCard,
      ...shadowCard,
    },
    cardBoxRight: {
      marginLeft: Metrics.baseMargin,
    },
    cardBoxLeft: {
      marginRight: Metrics.baseMargin,
    },
  },

  darkLabelContainer: {
    backgroundColor: Colors.cloud,
    padding: Metrics.smallMargin,
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: "center",
    textAlign: "center",
  },
};

export default AppStyles;
