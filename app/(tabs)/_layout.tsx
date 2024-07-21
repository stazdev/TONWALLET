import { Tabs } from "expo-router";
import React from "react";

import TabBar from "@/components/TabBar";
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
    </Tabs>
  );
}
