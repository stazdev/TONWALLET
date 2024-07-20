import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CircularIconButton, Header, PageWrapper } from "@/components";
import { CloseIcon } from "@/assets/icons";
import { router } from "expo-router";
import TonText from "@/DSystems/TonText";

const { width, height } = Dimensions.get("window");

const ScanScreen = () => {
  return (
    <PageWrapper>
      <View style={styles.cameraBackground}>
        <Header
          leftComponent={
            <CircularIconButton
              icon={<CloseIcon />}
              onPress={() => router.back()}
            />
          }
        />

        <View style={styles.focusAreaContainer}>
          <View style={styles.focusArea} />
        </View>

        <View
          style={{
            alignItems: "center",
            paddingBottom: 50,
          }}
        >
          <TonText size={16} lH={28} weight="bold">
            Scan QR Code
          </TonText>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.flashButton}>
            <Ionicons name="flash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  cameraBackground: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 40,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(100,100,100,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  focusAreaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  focusArea: {
    width: width * 0.7,
    height: width * 0.7,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 16,
  },
  scanText: {
    position: "absolute",
    bottom: height * 0.2,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  flashButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(100,100,100,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScanScreen;
