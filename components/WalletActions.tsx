import React from "react";
import { View } from "react-native";
import { IconTextGrid } from "@/components";
import { WalletAction } from "@/interfaces";

interface WalletActionsProps {
  actions: WalletAction[];
}

const WalletActions: React.FC<WalletActionsProps> = ({ actions }) => (
  <View>
    <IconTextGrid items={actions} />
  </View>
);

export default WalletActions;
