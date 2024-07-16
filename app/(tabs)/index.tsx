import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PageWrapper from "@/components/PagesWrapper";
import Header from "@/components/Header";
import { SettingsIcon } from "@/assets/icons";

const wallet = () => {
  return (
    <PageWrapper>
      <Header
        title="home"
        rightComponent={
          <TouchableOpacity activeOpacity={0.7}>
            <SettingsIcon />
          </TouchableOpacity>
        }
      />
    </PageWrapper>
  );
};

export default wallet;

const styles = StyleSheet.create({});
