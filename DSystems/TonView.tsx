import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TonViewProps {
  bottom?: boolean;
  top?: boolean;
  children: ReactNode;
  backgroundColor?: string;
  statusBarStyle?: "default" | "light-content" | "dark-content";
}

const TonView: React.FC<TonViewProps> = ({
  bottom = false,
  top = true,
  children,
  backgroundColor = Colors.dark.background_page,
  statusBarStyle = "light-content",
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          paddingTop: top ? insets.top : 0,
          paddingBottom: bottom ? insets.bottom : 0,
        },
      ]}
    >
      <StatusBar animated={true} barStyle={statusBarStyle} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default TonView;
