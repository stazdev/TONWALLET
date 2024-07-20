import React from "react";
import { View } from "react-native";
import { TonText } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";
import WalletStyles from "@/styles/Wallet.styles";

interface WalletBalanceProps {
  balance: string;
  address: string;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance, address }) => (
  <View style={WalletStyles.walletBalance}>
    <TonText size={44} weight="semibold" lH={56}>
      {balance}
    </TonText>
    <TonText
      size={14}
      weight="medium"
      lH={20}
      color={Colors.dark.text_secondary}
    >
      {address}
    </TonText>
  </View>
);

export default WalletBalance;
