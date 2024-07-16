import { Colors } from "@/constants/Colors";
import { TonText } from "@/DSystems/TonText";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";

interface InfoCardProps {
  imageSource?: ReactNode;
  leftTextTop?: string;
  leftTextBottom?: string;
  rightTextTop?: string;
  rightTextBottom?: string;
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;
  textStyle?: ViewStyle;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSource,
  leftTextTop,
  leftTextBottom,
  rightTextTop,
  rightTextBottom,
  containerStyle,
  imageStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {imageSource}
      <View style={styles.textContainer}>
        <View style={styles.leftColumn}>
          {leftTextTop && (
            <TonText
              size={16}
              lH={24}
              weight="semibold"
              color={Colors.dark.text_primary}
            >
              {leftTextTop}
            </TonText>
          )}
          {leftTextBottom && (
            <TonText
              size={14}
              lH={20}
              weight="medium"
              color={Colors.dark.text_secondary}
            >
              {leftTextBottom}
            </TonText>
          )}
        </View>
        <View style={styles.rightColumn}>
          {rightTextTop && (
            <TonText
              size={16}
              lH={24}
              weight="semibold"
              color={Colors.dark.text_primary}
            >
              {rightTextTop}
            </TonText>
          )}
          {rightTextBottom && (
            <TonText
              size={14}
              lH={20}
              weight="medium"
              color={Colors.dark.text_secondary}
            >
              {rightTextBottom}
            </TonText>
          )}
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  leftColumn: {
    justifyContent: "center",
    marginLeft: 16,
  },
  rightColumn: {
    justifyContent: "center",
    marginLeft: 20,
  },
});
