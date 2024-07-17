import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ChevronDownIcon, WalletIcon } from "@/assets/icons";
import { TonText } from "@/DSystems/TonText";

interface WalletDropdownProps {
  onPress?: () => void;
  label?: string;
  icon: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  chevronColor?: string;
  chevron?: boolean;
}

const WalletDropdown: React.FC<WalletDropdownProps> = ({
  onPress,
  label = "Wallet",
  icon,
  backgroundColor = Colors.dark.background_content2,
  textColor = Colors.dark.text_primary,
  chevronColor = Colors.dark.text_secondary,
  chevron = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TonText size={14} lH={20} weight="semibold" color={textColor}>
          {label}
        </TonText>
      </View>
      {chevron && <ChevronDownIcon color={chevronColor} />}
    </TouchableOpacity>
  );
};

export default WalletDropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 8,
  },
});
