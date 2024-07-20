import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { TonText } from "@/DSystems/TonText";
import PageWrapper from "@/components/PagesWrapper";
import { CircularIconButton, Header, WalletDropdown } from "@/components";
import { CloseIcon, SearchIcon } from "@/assets/icons";
import { router } from "expo-router";

const ReceiveScreen = () => {
  const address = "UQCgVUlx9a1ISkaGcv_ZBUAYEYeJBGTl6nZBtGUvozvw5De0";

  return (
    <PageWrapper>
      <Header
        leftComponent={
          <CircularIconButton
            icon={<CloseIcon />}
            onPress={() => router.back()}
          />
        }
      />
      <View style={styles.container}>
        <TonText size={20} weight="bold" lH={28}>
          Receive Toncoin
        </TonText>
        <TonText
          uistyle={{ textAlign: "center" }}
          size={14}
          color={Colors.dark.text_secondary}
          weight="semibold"
        >
          Send only Toncoin TON and tokens in TON network to this address, or
          you might lose your funds.
        </TonText>
        <View style={styles.qrCodeContainer}>
          <Image source={{ uri: "https://qrcodeurl" }} style={styles.qrCode} />
          <TonText size={14} weight="regular">
            {address}
          </TonText>
        </View>
        <View style={styles.buttonContainer}>
          <WalletDropdown icon={<SearchIcon />} label="Copy" />

          <CircularIconButton
            icon={<CloseIcon />}
            onPress={() => console.log("pressed")}
          />
        </View>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    rowGap: 30,
  },

  qrCodeContainer: {
    alignItems: "center",
    marginTop: 16,
    padding: 16,
    backgroundColor: Colors.dark.background_content,
    borderRadius: 16,
  },
  qrCode: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    marginBottom: 8,
  },
  addressText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark.background_content,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    marginLeft: 8,
  },
});

export default ReceiveScreen;
