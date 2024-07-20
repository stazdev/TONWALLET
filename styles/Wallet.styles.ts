import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
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
