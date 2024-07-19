import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TonText } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";

interface VerticalIconTextProps {
  name: string;
  icon: React.ReactNode;
  width: number;
  onPress?: () => void;
}

const VerticalIconText: React.FC<VerticalIconTextProps> = ({
  name,
  icon,
  width,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { width }]}
      activeOpacity={0.7}
    >
      {icon}
      <TonText color={Colors.dark.text_secondary} size={14} weight="medium">
        {name}
      </TonText>
    </TouchableOpacity>
  );
};

export default VerticalIconText;

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    gap: 5,
  },
});
