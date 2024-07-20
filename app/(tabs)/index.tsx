import React from "react";
import { View } from "react-native";
import { AddWalletModal, PageWrapper } from "@/components";
import { WALLET_ACTIONS, WALLET_TOKENS } from "@/constants/data";
import { useWalletState } from "@/hooks/useWalletState";
import WalletModal from "@/components/WalletModal";
import TokenList from "@/components/TokenList";
import WalletActions from "@/components/WalletActions";
import WalletBalance from "@/components/WalletBalance";
import WalletHeader from "@/components/WalletHeader";

const Wallet: React.FC = () => {
  const {
    isWalletModalVisible,
    isAddWalletModalVisible,
    openWalletModal,
    closeWalletModal,
    openAddWalletModal,
    closeAddWalletModal,
  } = useWalletState();

  return (
    <PageWrapper>
      <WalletHeader
        onSettingsPress={() => {
          /* handle settings */
        }}
        onWalletPress={openWalletModal}
      />
      <WalletBalance balance="$0.23" address="UQCg...5De0" />
      <WalletActions actions={WALLET_ACTIONS} />
      <TokenList tokens={WALLET_TOKENS} />

      <WalletModal
        isVisible={isWalletModalVisible}
        onClose={closeWalletModal}
        onAddWalletPress={openAddWalletModal}
      />

      <AddWalletModal
        isVisible={isAddWalletModalVisible}
        onClose={closeAddWalletModal}
      />
    </PageWrapper>
  );
};

export default Wallet;
