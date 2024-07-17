import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { TonText, TonTextProps } from "@/DSystems/TonText";

type InfoCardTextProps = Omit<TonTextProps, "children"> & {
  text: string;
};

interface InfoCardProps {
  imageSource?: React.ReactNode;
  leftTextTop?: InfoCardTextProps;
  leftTextBottom?: InfoCardTextProps;
  rightTextTop?: InfoCardTextProps;
  rightTextBottom?: InfoCardTextProps;
  containerStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
  leftTextTopPill?: React.ReactNode;
  rightComponent?: React.ReactNode; // New prop for custom right component
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSource,
  leftTextTop,
  leftTextBottom,
  rightTextTop,
  rightTextBottom,
  containerStyle,
  textContainerStyle,
  leftTextTopPill,
  rightComponent, // New prop
}) => {
  const renderText = (
    textProps?: InfoCardTextProps,
    pill?: React.ReactNode
  ) => {
    if (!textProps) return null;
    const { text, ...rest } = textProps;
    return (
      <View style={styles.textWithPill}>
        <TonText {...rest}>{text}</TonText>
        {pill}
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {imageSource}
      <View style={[styles.textContainer, textContainerStyle]}>
        <View style={styles.leftColumn}>
          {renderText(leftTextTop, leftTextTopPill)}
          {renderText(leftTextBottom)}
        </View>
        {rightComponent ? ( // Render custom right component if provided
          <View style={styles.rightColumn}>{rightComponent}</View>
        ) : (
          <View style={styles.rightColumn}>
            {renderText(rightTextTop)}
            {renderText(rightTextBottom)}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 16,
  },
  leftColumn: {
    justifyContent: "center",
  },
  rightColumn: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textWithPill: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});

export default InfoCard;
