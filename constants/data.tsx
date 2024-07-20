import {
  ArrowDownIcon,
  ArrowUpIcon,
  ScanIcon,
  SwapIcon,
  UsdIcon,
  StakeIcon,
  TonImg,
  UsdtImg,
} from "@/assets/icons";
import { WalletAction, WalletToken } from "@/interfaces";

export const WALLET_ACTIONS: WalletAction[] = [
  { name: "Send", icon: <ArrowUpIcon />, path: "sendScreen" },
  { name: "Receive", icon: <ArrowDownIcon />, path: "receiveScreen" },
  { name: "Scan", icon: <ScanIcon />, path: "scanScreen" },
  { name: "Swap", icon: <SwapIcon />, path: "swapScreen" },
  { name: "Buy or Sell", icon: <UsdIcon />, path: "buyScreen" },
  { name: "Stake", icon: <StakeIcon />, path: "stakeScreen" },
];

export const WALLET_TOKENS: WalletToken[] = [
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
