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
  WalletIconLight,
} from "@/assets/icons";
import {
  AddWalletModal,
  HorizontalLine,
  IconTextGrid,
  InfoCard,
  Pill,
  ViewWrapper,
  WalletDropdown,
} from "@/components";
import PageWrapper from "@/components/PagesWrapper";
import Header from "@/components/Header";
import { TonText } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";
import TonModal from "@/DSystems/TonModal";
import { WalletAction, WalletToken } from "@/interfaces";

const WALLET_ACTIONS: WalletAction[] = [
  { name: "Send", icon: <ArrowUpIcon />, path: "sendScreen" },
  { name: "Receive", icon: <ArrowDownIcon />, path: "receiveScreen" },
  { name: "Scan", icon: <ScanIcon />, path: "scanScreen" },
  { name: "Swap", icon: <SwapIcon />, path: "swapScreen" },
  { name: "Buy or Sell", icon: <UsdIcon />, path: "buyScreen" },
  { name: "Stake", icon: <StakeIcon />, path: "stakeScreen" },
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
  const [isWalletModalVisible, setIsWalletModalVisible] =
    useState<boolean>(false);
  const [isAddWalletModalVisible, setIsAddWalletModalVisible] =
    useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  const openWalletModal = () => setIsWalletModalVisible(true);
  const closeWalletModal = () => setIsWalletModalVisible(false);
  const openAddWalletModal = () => {
    closeWalletModal();
    setIsAddWalletModalVisible(true);
  };
  const closeAddWalletModal = () => setIsAddWalletModalVisible(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderTokenInfo = (token: WalletToken, index: number) => (
    <React.Fragment key={token.name}>
      {index > 0 && <HorizontalLine />}
      <InfoCard
        imageSource={token.imageSource}
        leftTextTop={{ text: token.name, size: 16, weight: "semibold" }}
        leftTextBottom={{
          text: token.price,
          size: 14,
          weight: "medium",
          color: Colors.dark.text_secondary,
        }}
        rightTextTop={{ text: token.amount, size: 16, weight: "semibold" }}
        rightTextBottom={{
          text: token.value,
          size: 14,
          weight: "medium",
          color: Colors.dark.text_secondary,
        }}
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

  return (
    <PageWrapper>
      <Header
        middleComponent={
          <WalletDropdown
            chevron={true}
            onPress={openWalletModal}
            icon={<WalletIconLight />}
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
          $0.23
        </TonText>
        <TonText
          size={14}
          weight="medium"
          lH={20}
          color={Colors.dark.text_secondary}
        >
          UQCg...5De0
        </TonText>
      </View>
      <View>
        <IconTextGrid items={WALLET_ACTIONS} />
      </View>
      <ViewWrapper>{WALLET_TOKENS.map(renderTokenInfo)}</ViewWrapper>

      <TonModal
        isVisible={isWalletModalVisible}
        onClose={closeWalletModal}
        title="Wallets"
        scrollable={true}
        initialSnapPoint="25%"
        maxSnapPoint="35%"
      >
        <ViewWrapper>
          <InfoCard
            imageSource={<WalletIconLight />}
            imgbg={true}
            leftTextTop={{ text: "Wallet 2", size: 16, weight: "semibold" }}
            leftTextBottom={{
              text: "UQCg...5De0",
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
        <View style={styles.addWalletContainer}>
          <WalletDropdown
            onPress={openAddWalletModal}
            label="Add wallet"
            icon={undefined}
          />
        </View>
      </TonModal>

      <AddWalletModal
        isVisible={isAddWalletModalVisible}
        onClose={closeAddWalletModal}
      />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  walletBalance: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  addWalletContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  modalContainer: {
    padding: 16,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark.background_content,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark.background_page,
    borderRadius: 20,
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
});

export default Wallet;
