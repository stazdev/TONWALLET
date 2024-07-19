import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  CircularIconButton,
  CustomInput,
  Header,
  PageWrapper,
} from "@/components";
import { CloseIcon } from "@/assets/icons";
import TonText from "@/DSystems/TonText";

const SendScreen = () => {
  const [password, setPassword] = useState("");

  const validatePassword = (text: string) => {
    return text.length >= 8;
  };

  const handleTogglePassword = () => {
    // Toggle password visibility logic here
    console.log("Toggle password visibility");
  };
  return (
    <PageWrapper>
      <Header
        middleComponent={
          <TonText size={20} weight="bold" lH={28}>
            Recipient
          </TonText>
        }
        rightComponent={
          <CircularIconButton
            icon={<CloseIcon />}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
        leftComponent={<View style={{ width: 28 }} />}
      />
      <View>
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          validate={validatePassword}
          icons={[
            { name: "👁️", onPress: handleTogglePassword },
            { name: "🔒", onPress: () => console.log("Lock icon pressed") },
          ]}
        />
      </View>
    </PageWrapper>
  );
};

export default SendScreen;

const styles = StyleSheet.create({});
