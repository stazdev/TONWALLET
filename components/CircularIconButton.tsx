import React, { ReactNode } from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import IconButton from "./IconButton";
import { Colors } from "@/constants/Colors";

interface CircularIconButtonProps {
  icon: ReactNode;
  onPress: () => void;
  size?: number;
  backgroundColor?: string;
}

const CircularIconButton: React.FC<CircularIconButtonProps> = ({
  icon,
  onPress,
  size = 24,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container]}
    >
      <IconButton icon={icon} size={size} onPress={onPress} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    padding: 10,
    backgroundColor: Colors.dark.background_content,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});

export default CircularIconButton;
