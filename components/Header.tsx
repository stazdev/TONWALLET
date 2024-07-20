import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { TonText } from "@/DSystems/TonText";
import IconButton from "./IconButton";

interface HeaderProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
  title?: string;
  middleComponent?: ReactNode;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  leftIcon,
  rightIcon,
  leftIconPress,
  rightIconPress,
  title,
  middleComponent,
  rightComponent,
  leftComponent,
}) => {
  const renderLeft = () => {
    if (leftComponent) return leftComponent;
    if (leftIcon) return <IconButton icon={leftIcon} onPress={leftIconPress} />;
    return null;
  };

  const renderMiddle = () => {
    if (middleComponent) return middleComponent;
    if (title) {
      return (
        <TonText
          color={Colors.dark.text_primary}
          lH={28}
          size={20}
          weight="bold"
        >
          {title}
        </TonText>
      );
    }
    return null;
  };

  const renderRight = () => {
    if (rightComponent) return rightComponent;
    if (rightIcon)
      return <IconButton icon={rightIcon} onPress={rightIconPress} />;
    return null;
  };

  return (
    <View style={styles.container}>
      <View>{renderLeft()}</View>
      <View>{renderMiddle()}</View>
      <View>{renderRight()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    backgroundColor: Colors.dark.background_page,
  },
  // left: {
  //   flex: 1,
  //   alignItems: "flex-start",
  // },
  // middle: {
  //   flex: 2,
  //   alignItems: "center",
  // },
  // right: {
  //   flex: 1,
  //   alignItems: "flex-end",
  // },
});

export default Header;
