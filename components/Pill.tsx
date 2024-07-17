import TonText from "@/DSystems/TonText";
import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type ColorOption = "red" | "green" | "grey";

interface PillProps {
  text: string;
  backgroundColor: ColorOption;
  style?: ViewStyle;
}

const Pill: React.FC<PillProps> = ({ text, backgroundColor, style }) => {
  const getColors = (color: ColorOption): { bg: string; text: string } => {
    switch (color) {
      case "red":
        return { bg: "rgba(255, 0, 0, 0.2)", text: "rgba(139, 0, 0, 1)" };
      case "green":
        return { bg: "rgba(57, 204, 131, 0.2)", text: "rgba(57, 204, 131, 1)" };
      case "grey":
        return {
          bg: "rgba(137, 148, 163, 0.3)",
          text: "rgba(137, 148, 163, 1)",
        };
    }
  };

  const { bg, text: textColor } = getColors(backgroundColor);

  return (
    <View style={[styles.pill, { backgroundColor: bg }, style]}>
      <TonText color={textColor} lH={14} size={10} weight="semibold">
        {text}
      </TonText>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 10,
    fontWeight: "600",
  },
});

export default Pill;
