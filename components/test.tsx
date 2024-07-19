import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import { TonText } from "@/DSystems/TonText";
import PageWrapper from "@/components/PagesWrapper";
import CustomInput from "@/components/CustomInput";
import { CircularIconButton } from "@/components";
import { CloseIcon, SquareIcon } from "@/assets/icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const SendScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipient: "",
      amount: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <PageWrapper>
      <Header
        middleComponent={
          <TonText size={20} weight="semibold">
            Transactions
          </TonText>
        }
        rightComponent={
          <CircularIconButton
            icon={<CloseIcon />}
            onPress={() => router.back()}
          />
        }
        leftComponent={<View style={{ width: 32 }} />}
      />
      <View style={styles.container}>
        <CustomInput
          name="recipient"
          control={control}
          placeholder="Recipient Address"
          rules={{ required: "Recipient address is required" }}
          rightIcons={[
            {
              component: (
                <TonText
                  size={16}
                  weight="semibold"
                  lH={28}
                  color={Colors.dark.accent_blue}
                >
                  Paste
                </TonText>
              ),
            },
          ]}
        />
        <CustomInput
          name="amount"
          control={control}
          placeholder="Amount"
          keyboardType="numeric"
          rules={{
            required: "Amount is required",
            min: { value: 1, message: "Amount must be at least 1" },
            max: {
              value: 10000,
              message: "Amount must be less than or equal to 10000",
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
        />
        <Button title="Send" onPress={handleSubmit(onSubmit)} />
      </View>
    </PageWrapper>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
