import React, { useState } from "react";
import { View, Switch } from "react-native";
import { ViewWrapper, InfoCard, WalletDropdown } from "@/components";
import { WalletIconLight } from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import TonModal from "@/DSystems/TonModal";
import WalletStyles from "@/styles/Wallet.styles";

interface WalletModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddWalletPress: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({
  isVisible,
  onClose,
  onAddWalletPress,
}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <TonModal
      isVisible={isVisible}
      onClose={onClose}
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
      <View style={WalletStyles.addWalletContainer}>
        <WalletDropdown
          onPress={onAddWalletPress}
          label="Add wallet"
          icon={undefined}
        />
      </View>
    </TonModal>
  );
};

export default WalletModal;
