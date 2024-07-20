import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Header, WalletDropdown } from "@/components";
import { WalletIconLight, SettingsIcon } from "@/assets/icons";

interface WalletHeaderProps {
  onSettingsPress: () => void;
  onWalletPress: () => void;
}

const WalletHeader: React.FC<WalletHeaderProps> = ({
  onSettingsPress,
  onWalletPress,
}) => (
  <Header
    middleComponent={
      <WalletDropdown
        chevron={true}
        onPress={onWalletPress}
        icon={<WalletIconLight />}
      />
    }
    rightComponent={
      <TouchableOpacity activeOpacity={0.7} onPress={onSettingsPress}>
        <SettingsIcon />
      </TouchableOpacity>
    }
    leftComponent={<View style={{ width: 28 }} />}
  />
);

export default WalletHeader;
