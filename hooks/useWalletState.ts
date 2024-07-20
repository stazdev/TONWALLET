import { useState } from "react";

export const useWalletState = () => {
  const [isWalletModalVisible, setIsWalletModalVisible] = useState(false);
  const [isAddWalletModalVisible, setIsAddWalletModalVisible] = useState(false);

  const openWalletModal = () => setIsWalletModalVisible(true);
  const closeWalletModal = () => setIsWalletModalVisible(false);
  const openAddWalletModal = () => {
    closeWalletModal();
    setIsAddWalletModalVisible(true);
  };
  const closeAddWalletModal = () => setIsAddWalletModalVisible(false);

  return {
    isWalletModalVisible,
    isAddWalletModalVisible,
    openWalletModal,
    closeWalletModal,
    openAddWalletModal,
    closeAddWalletModal,
  };
};
