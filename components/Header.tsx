import { Colors } from "@/constants/Colors";
import { TonText } from "@/DSystems/TonText";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
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
  leftIconPress = () => {},
  rightIconPress = () => {},
  title,
  middleComponent,
  rightComponent,
  leftComponent,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {leftIcon ? (
          <IconButton icon={leftIcon} onPress={leftIconPress} />
        ) : (
          leftComponent
        )}
      </View>
      <View style={styles.middle}>
        {title ? (
          <TonText
            color={Colors.dark.text_primary}
            lH={28}
            size={20}
            weight="bold"
          >
            {title}
          </TonText>
        ) : (
          middleComponent
        )}
      </View>
      <View style={styles.right}>
        {rightIcon ? (
          <IconButton icon={rightIcon} onPress={rightIconPress} />
        ) : (
          rightComponent
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: Colors.dark.background_page,
  },
  left: {
    flex: 1,
    alignItems: "flex-start",
  },
  middle: {
    flex: 2,
    alignItems: "center",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
});
