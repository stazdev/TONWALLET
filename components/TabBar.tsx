import {
  BrowserIcon,
  HistoryIcon,
  PurchaseIcon,
  WalletIcon,
} from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import { TonText } from "@/DSystems/TonText";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export let TabIcon = (name: string, focused: boolean) => {
  switch (name) {
    case "Wallet":
      return <WalletIcon focused={focused} />;
    case "History":
      return <HistoryIcon focused={focused} />;
    case "Browser":
      return <BrowserIcon focused={focused} />;
    case "Purchases":
      return <PurchaseIcon focused={focused} />;
  }
};
function TabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        width,
        height: 64,
        paddingHorizontal: 16,
        backgroundColor: Colors.dark.background_page,
      }}
    >
      {state.routes.map(
        (
          route: { key: string | number; name: any; params: any },
          index: any
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
              activeOpacity={0.7}
              key={route.key}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 8,
                  paddingBottom: 14,
                  paddingHorizontal: 4,
                  rowGap: 4,
                }}
              >
                {TabIcon(label, isFocused)}
                <TonText
                  size={12}
                  weight="semibold"
                  color={
                    isFocused
                      ? Colors.dark.accent_blue
                      : Colors.dark.tab_bar_inactive
                  }
                >
                  {label}
                </TonText>
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}

export default TabBar;
