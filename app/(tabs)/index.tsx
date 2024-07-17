import React, { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
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
  WalletIcon,
} from "@/assets/icons";
import {
  HorizontalLine,
  IconTextGrid,
  InfoCard,
  Pill,
  ViewWrapper,
  WalletDropdown,
} from "@/components";
import PageWrapper from "@/components/PagesWrapper";
import Header from "@/components/Header";
import { TonText, TonTextProps } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";
import TonModal from "@/DSystems/TonModal";
// import CustomModal from "@/components/CustomModal";

interface WalletAction {
  name: string;
  icon: React.ReactNode;
}

interface WalletToken {
  imageSource: React.ReactNode;
  name: string;
  price: string;
  amount: string;
  value: string;
}

type InfoCardTextProps = Omit<TonTextProps, "children"> & {
  text: string;
};

const WALLET_ACTIONS: WalletAction[] = [
  { name: "Send", icon: <ArrowUpIcon /> },
  { name: "Receive", icon: <ArrowDownIcon /> },
  { name: "Scan", icon: <ScanIcon /> },
  { name: "Swap", icon: <SwapIcon /> },
  { name: "Buy or Sell", icon: <UsdIcon /> },
  { name: "Stake", icon: <StakeIcon /> },
];

const WALLET_TOKENS: WalletToken[] = [
  {
    imageSource: <TonImg />,
    name: "TON",
    price: "$6.01",
    amount: "100,000.01",
    value: "$600,000.01",
  },
  {
    imageSource: <UsdtImg />,
    name: "USD₮",
    price: "$1.01",
    amount: "100,000.01",
    value: "$600,000.01",
  },
];

const Wallet: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddWalletModalVisible, setIsAddWalletModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const openAddWalletModal = () => {
    closeModal();
    setIsAddWalletModalVisible(true);
  };
  const closeAddWalletModal = () => setIsAddWalletModalVisible(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const renderTokenInfo = (token: WalletToken, index: number) => {
    const createTextProps = (
      text: string,
      isPrimary: boolean
    ): InfoCardTextProps => ({
      text,
      size: isPrimary ? 16 : 14,
      lH: isPrimary ? 24 : 20,
      weight: isPrimary ? "semibold" : "medium",
      color: isPrimary ? Colors.dark.text_primary : Colors.dark.text_secondary,
    });

    return (
      <React.Fragment key={token.name}>
        {index > 0 && <HorizontalLine />}
        <InfoCard
          imageSource={token.imageSource}
          leftTextTop={createTextProps(token.name, true)}
          leftTextBottom={createTextProps(token.price, false)}
          rightTextTop={createTextProps(token.amount, true)}
          rightTextBottom={createTextProps(token.value, false)}
          leftTextTopPill={
            token.name === "USD₮" ? (
              <Pill
                text="TON"
                backgroundColor="grey"
                style={{ marginRight: 8 }}
              />
            ) : undefined
          }
        />
      </React.Fragment>
    );
  };

  return (
    <PageWrapper>
      <Header
        middleComponent={
          <WalletDropdown
            chevron={true}
            onPress={openModal}
            icon={<WalletIcon focused={undefined} />}
          />
        }
        rightComponent={
          <TouchableOpacity activeOpacity={0.7}>
            <SettingsIcon />
          </TouchableOpacity>
        }
        leftComponent={<View style={{ width: 28 }} />}
      />
      <View style={styles.walletBalance}>
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
        <IconTextGrid items={WALLET_ACTIONS} />
      </View>
      <ViewWrapper>{WALLET_TOKENS.map(renderTokenInfo)}</ViewWrapper>
      <TonModal
        isVisible={isModalVisible}
        onClose={closeModal}
        title="Wallets"
        scrollable={true}
        initialSnapPoint="25%"
        maxSnapPoint="40%"
      >
        <ViewWrapper>
          <InfoCard
            imageSource={<WalletIcon focused={undefined} />}
            leftTextTop={{ text: "Main Wallet", size: 16, weight: "semibold" }}
            leftTextBottom={{
              text: "EQF2…G21Z",
              size: 14,
              weight: "medium",
              color: Colors.dark.text_secondary,
            }}
            rightComponent={
              <Switch
                trackColor={{
                  false: Colors.dark.background_content,
                  true: Colors.dark.background_content2,
                }}
                thumbColor={
                  isEnabled
                    ? Colors.dark.text_primary
                    : Colors.dark.background_page
                }
                ios_backgroundColor={Colors.dark.background_content}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            }
          />
        </ViewWrapper>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 30,
          }}
        >
          <WalletDropdown
            onPress={openAddWalletModal}
            label="Add wallet"
            icon={undefined}
          />
        </View>
      </TonModal>
      <TonModal
        isVisible={isAddWalletModalVisible}
        onClose={closeAddWalletModal}
        title="Add Wallet"
        scrollable={true}
        initialSnapPoint="25%"
        maxSnapPoint="40%"
      >
        <ViewWrapper>
          <TonText>Add Wallet Modal Content</TonText>
        </ViewWrapper>
      </TonModal>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  walletBalance: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 28,
    gap: 4,
  },
});

export default Wallet;
