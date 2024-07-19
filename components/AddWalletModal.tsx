import { PlusIcon, TargetIcon, SquareIcon, SearchIcon } from "@/assets/icons";
import TonModal from "@/DSystems/TonModal";
import TonText from "@/DSystems/TonText";
import { AddWalletModalProps } from "@/interfaces";
import { StyleSheet, View } from "react-native";
import AddWalletOption from "./AddWalletOption";
import { Colors } from "@/constants/Colors";

const AddWalletModal: React.FC<AddWalletModalProps> = ({
  isVisible,
  onClose,
}) => {
  const handleOptionPress = (option: string) => {
    console.log(`Selected option: ${option}`);
    onClose();
  };

  return (
    <TonModal
      isVisible={isVisible}
      onClose={onClose}
      title="Add Wallet"
      initialSnapPoint="70%"
      maxSnapPoint="80%"
    >
      <TonText
        uistyle={{ textAlign: "center", paddingVertical: 10 }}
        size={14}
        weight="medium"
        color={Colors.dark.text_secondary}
      >
        Create a new wallet or add an existing one.
      </TonText>

      <AddWalletOption
        icon={<PlusIcon color={Colors.dark.accent_blue} />}
        title="New Wallet"
        description="Create new wallet"
        onPress={() => handleOptionPress("New Wallet")}
      />

      <AddWalletOption
        icon={<TargetIcon color={Colors.dark.accent_blue} />}
        title="Existing Wallet"
        description="Import wallet with a 24 secret recovery words"
        onPress={() => handleOptionPress("Existing Wallet")}
      />

      <AddWalletOption
        icon={<SquareIcon color={Colors.dark.accent_blue} />}
        title="Pair with Ledger"
        description="Hardware module, Bluetooth, limited TON features"
        onPress={() => handleOptionPress("Pair with Ledger")}
      />

      <TonText
        uistyle={{ textAlign: "center", paddingVertical: 20 }}
        size={14}
        weight="medium"
        color={Colors.dark.text_secondary}
      >
        Other options
      </TonText>

      <AddWalletOption
        icon={<SearchIcon color={Colors.dark.accent_blue} />}
        title="Watch Account"
        description="For monitor wallet activity without recovery phrase"
        onPress={() => handleOptionPress("Watch Account")}
      />
    </TonModal>
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

export default AddWalletModal;
