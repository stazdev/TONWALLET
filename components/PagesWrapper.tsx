import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PageWrapperProps {
  bottom?: boolean;
  top?: boolean;
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  bottom = false,
  top = true,
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top ? insets.top : 0,
        backgroundColor: Colors.dark.background_page,
        paddingBottom: bottom ? insets.bottom : 0,
      }}
    >
      <StatusBar animated={true} barStyle="light-content" />
      {children}
    </View>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({});
