import { TabBar } from "@/components";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Wallet",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
        }}
      />
      <Tabs.Screen
        name="browser"
        options={{
          title: "Browser",
        }}
      />
      <Tabs.Screen
        name="purchases"
        options={{
          title: "Purchases",
        }}
      />
    </Tabs>
  );
}
