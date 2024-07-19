import React, { ReactNode, useMemo } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  ListRenderItem,
} from "react-native";
import VerticalIconText from "./VerticalIconText";
import { router } from "expo-router";

interface Item {
  name: string;
  icon: ReactNode;
  path: string;
}

interface IconTextGridProps {
  items: Item[];
  numColumns?: number;
}

const { width } = Dimensions.get("window");

const IconTextGrid: React.FC<IconTextGridProps> = ({
  items,
  numColumns = 3,
}) => {
  const itemWidth = useMemo(() => (width - 40) / numColumns, [numColumns]);

  const renderItem: ListRenderItem<Item> = ({ item, index }) => {
    const isLastColumn = (index + 1) % numColumns === 0;
    const isFirstRow = index < numColumns;
    return (
      <View
        style={[
          styles.itemContainer,
          !isLastColumn && styles.itemRightBorder,
          !isFirstRow && styles.itemTopBorder,
        ]}
      >
        <VerticalIconText
          onPress={() => router.push(item.path)}
          name={item.name}
          icon={item.icon}
          width={itemWidth}
        />
      </View>
    );
  };

  const keyExtractor = (item: Item, index: number) => `${item.name}-${index}`;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

export default IconTextGrid;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
  },
  itemRightBorder: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(204, 204, 204, 0.1)",
  },
  itemTopBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(204, 204, 204, 0.1)",
  },
});
