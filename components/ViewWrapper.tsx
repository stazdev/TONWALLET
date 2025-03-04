import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface ViewWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
}

const ViewWrapper: React.FC<ViewWrapperProps> = ({
  children,
  style,
  backgroundColor = Colors.dark.background_content,
}) => {
  return (
    <View style={[styles.wrapper, style, { backgroundColor }]}>{children}</View>
  );
};

export default ViewWrapper;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderRadius: 16,
    marginVertical: 5,
    // marginHorizontal: 16,
  },
});
