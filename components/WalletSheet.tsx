import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ChevronDownIcon, WalletIcon } from "@/assets/icons";
import { TonText } from "@/DSystems/TonText";

const WalletSheet = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <TonText size={14} lH={20} weight="semibold">
        Wallet
      </TonText>
      <ChevronDownIcon />
    </TouchableOpacity>
  );
};

export default WalletSheet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.dark.background_content2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
