import React, { ReactNode } from "react";
import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import VerticalIconText from "./VerticalIconText";

interface Item {
  name: string;
  icon: ReactNode;
}

interface IconTextGridProps {
  items: Item[];
}

const numColumns = 3;
const { width } = Dimensions.get("window");
const itemWidth = (width - 40) / numColumns;

const IconTextGrid: React.FC<IconTextGridProps> = ({ items }) => {
  const renderItem = ({ item, index }: { item: Item; index: number }) => {
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
        <VerticalIconText name={item.name} icon={item.icon} width={itemWidth} />
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.name}-${index}`}
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
