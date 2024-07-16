import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface IconButtonProps {
  icon: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  size?: number;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  style,
  size = 24,
  color = "#000",
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.background_content,
  },
});
