import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { TonText } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";
import { ViewWrapper, InfoCard, WalletDropdown } from "@/components";
import { ArrowUpIcon, ArrowDownIcon } from "@/assets/icons";
import PageWrapper from "@/components/PagesWrapper";

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const SCREEN_WIDTH = Dimensions.get("window").width;

interface Transaction {
  id: number;
  type: "Sent" | "Received";
  amount: number;
  address: string;
  time: string;
  date: string;
  label?: string;
}

interface GroupedTransactions {
  [key: string]: Transaction[];
}

const HistoryScreen: React.FC = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions([
      {
        id: 1,
        type: "Sent",
        amount: -0.09,
        address: "UQDh...Lzaq",
        time: "14:20",
        date: "2023-07-11",
      },
      {
        id: 2,
        type: "Received",
        amount: 0.1,
        address: "UQDh...Lzaq",
        time: "14:19",
        date: "2023-07-11",
      },
      {
        id: 10,
        type: "Sent",
        amount: -0.12,
        address: "Bybit 1",
        time: "14:35",
        date: "2023-05-28",
        label: "10834720",
      },
      {
        id: 3,
        type: "Sent",
        amount: -0.09,
        address: "UQDh...Lzaq",
        time: "14:20",
        date: "2023-07-11",
      },
      {
        id: 4,
        type: "Received",
        amount: 0.1,
        address: "UQDh...Lzaq",
        time: "14:19",
        date: "2023-07-11",
      },
      {
        id: 5,
        type: "Sent",
        amount: -0.12,
        address: "Bybit 1",
        time: "14:35",
        date: "2023-05-28",
        label: "10834720",
      },
      {
        id: 6,
        type: "Sent",
        amount: -0.09,
        address: "UQDh...Lzaq",
        time: "14:20",
        date: "2023-07-11",
      },
      {
        id: 7,
        type: "Received",
        amount: 0.1,
        address: "UQDh...Lzaq",
        time: "14:19",
        date: "2023-07-11",
      },
      {
        id: 8,
        type: "Sent",
        amount: -0.12,
        address: "Bybit 1",
        time: "14:35",
        date: "2023-05-28",
        label: "10834720",
      },
    ]);
  }, []);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

  const headerTitlePosition = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [16, (SCREEN_WIDTH - 150) / 2],
    extrapolate: "clamp",
  });

  const groupTransactionsByMonth = (): GroupedTransactions => {
    const grouped: GroupedTransactions = {};
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const monthYear = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(transaction);
    });
    return grouped;
  };

  const renderTransaction = (transaction: Transaction) => (
    <ViewWrapper key={transaction.id} style={styles.transactionCard}>
      <InfoCard
        imageSource={
          <View style={styles.iconContainer}>
            {transaction.type === "Sent" ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </View>
        }
        leftTextTop={{ text: transaction.type, size: 16, weight: "semibold" }}
        leftTextBottom={{
          text: transaction.address,
          size: 14,
          weight: "medium",
          color: Colors.dark.text_secondary,
        }}
        rightTextTop={{
          text: `${transaction.amount > 0 ? "+" : ""}${transaction.amount} TON`,
          size: 16,
          weight: "semibold",
          color:
            transaction.amount > 0
              ? Colors.dark.accent_green
              : Colors.dark.accent_red,
        }}
        rightTextBottom={{
          text: transaction.time,
          size: 14,
          weight: "medium",
          color: Colors.dark.text_secondary,
        }}
      />
      {transaction.label && (
        <View style={styles.label}>
          <TonText size={12} weight="medium" color={Colors.dark.text_secondary}>
            <WalletDropdown
              backgroundColor={Colors.dark.background_content_tint}
              icon={undefined}
              label={transaction.label}
            />
          </TonText>
        </View>
      )}
    </ViewWrapper>
  );

  return (
    <PageWrapper>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.View
          style={[
            styles.headerTitleContainer,
            {
              opacity: headerTitleOpacity,
              transform: [{ translateX: headerTitlePosition }],
            },
          ]}
        >
          <TonText size={28} weight="bold">
            History
          </TonText>
        </Animated.View>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {Object.entries(groupTransactionsByMonth()).map(
          ([month, monthTransactions]) => (
            <View key={month}>
              <TonText
                size={20}
                weight="bold"
                uistyle={{ marginTop: 24, marginBottom: 12 }}
              >
                {month}
              </TonText>
              {monthTransactions.map(renderTransaction)}
            </View>
          )
        )}
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.dark.background_page,
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  headerTitleContainer: {
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
    marginTop: HEADER_MAX_HEIGHT * 0.6,
  },
  monthHeader: {
    marginTop: 24,
    marginBottom: 12,
  },
  transactionCard: {
    marginBottom: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.dark.background_page,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    backgroundColor: Colors.dark.background_content,
    borderRadius: 12,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginTop: 8,
    marginLeft: 52,
  },
});

export default HistoryScreen;
