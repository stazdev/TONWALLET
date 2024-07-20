import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Text,
} from "react-native";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import { TonText } from "@/DSystems/TonText";
import PageWrapper from "@/components/PagesWrapper";
import CustomInput from "@/components/CustomInput";
import { CircularIconButton, InfoCard, ViewWrapper } from "@/components";
import {
  CloseIcon,
  MoreHorizIcon,
  SquareIcon,
  WalletIconLight,
} from "@/assets/icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import TonButton from "@/DSystems/TonButton";

const SendScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipient: "",
      amount: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <PageWrapper>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Header
          middleComponent={
            <TonText size={20} weight="semibold">
              Recipient
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
        <View style={styles.contentContainer}>
          <View style={styles.inputsContainer}>
            <CustomInput
              name="recipient"
              control={control}
              placeholder="Address or name"
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
              placeholder="Comment"
              rules={{
                required: "Comment is required",
                min: {
                  value: 1,
                  message: "Comment must be at least 1 character",
                },
              }}
            />
            <View style={styles.recentContainer}>
              <TonText size={16} weight="bold" color={Colors.dark.text_primary}>
                Recent
              </TonText>
              <ViewWrapper>
                <InfoCard
                  leftTextTop={{
                    text: "QCg...5De0",
                    size: 16,
                    weight: "semibold",
                  }}
                  leftTextBottom={{
                    text: "12 Jun",
                    size: 14,
                    weight: "medium",
                    color: Colors.dark.text_secondary,
                  }}
                  rightComponent={<MoreHorizIcon />}
                />
              </ViewWrapper>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TonButton
            type="primary"
            title="Continue"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </KeyboardAvoidingView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  inputsContainer: {
    marginTop: 16,
  },
  recentContainer: {
    // marginHorizontal: 16,
    marginTop: 32,
  },
  recentItem: {
    backgroundColor: Colors.dark.background_content,
    // padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonContainer: {
    marginBottom: 32,
  },
});

export default SendScreen;
