export interface WalletAction {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export interface WalletToken {
  imageSource: React.ReactNode;
  name: string;
  price: string;
  amount: string;
  value: string;
}

export interface AddWalletOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onPress: () => void;
}

export interface AddWalletModalProps {
  isVisible: boolean;
  onClose: () => void;
}
