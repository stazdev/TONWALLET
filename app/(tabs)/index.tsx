import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PageWrapper from "@/components/PagesWrapper";
import Header from "@/components/Header";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ScanIcon,
  SettingsIcon,
  StakeIcon,
  SwapIcon,
  TonImg,
  UsdIcon,
  UsdtImg,
} from "@/assets/icons";
import {
  HorizontalLine,
  IconTextGrid,
  InfoCard,
  ViewWrapper,
  WalletSheet,
} from "@/components";
import { TonText } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";

const items = [
  {
    name: "Send",
    icon: <ArrowUpIcon />,
  },
  {
    name: "Receive",
    icon: <ArrowDownIcon />,
  },
  {
    name: "Scan",
    icon: <ScanIcon />,
  },
  {
    name: "Swap",
    icon: <SwapIcon />,
  },
  {
    name: "Buy or Sell",
    icon: <UsdIcon />,
  },
  {
    name: "Stake",
    icon: <StakeIcon />,
  },
];

const Wallet = () => {
  return (
    <PageWrapper>
      <Header
        middleComponent={<WalletSheet />}
        rightComponent={
          <TouchableOpacity activeOpacity={0.7}>
            <SettingsIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.wallet_balance}>
        <TonText size={44} weight="semibold" lH={56}>
          $700,000
        </TonText>
        <TonText
          size={14}
          weight="medium"
          lH={20}
          color={Colors.dark.text_secondary}
        >
          EQF2…G21Z
        </TonText>
      </View>
      <View>
        <IconTextGrid items={items} />
      </View>
      <ViewWrapper>
        <InfoCard
          imageSource={<TonImg />}
          leftTextTop="TON"
          leftTextBottom="$6.01"
          rightTextTop="100,000.01"
          rightTextBottom="$600,000.01"
        />
        <HorizontalLine />
        <InfoCard
          imageSource={<UsdtImg />}
          leftTextTop="USD₮"
          leftTextBottom="$1.01"
          rightTextTop="100,000.01"
          rightTextBottom="$600,000.01"
        />
      </ViewWrapper>
    </PageWrapper>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  wallet_balance: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 28,
    gap: 4,
  },
});
