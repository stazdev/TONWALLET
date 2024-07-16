import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface HorizontalLineProps {
  style?: ViewStyle;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ style }) => {
  return <View style={[styles.line, style]} />;
};

export default HorizontalLine;

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(204, 204, 204, 0.1)",
    width: "100%",
    marginVertical: 16,
  },
});
