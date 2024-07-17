import React from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";

export interface TonTextProps extends Omit<TextProps, "style"> {
  color?: string;
  uistyle?: TextStyle;
  lH?: number;
  weight?: "bold" | "medium" | "regular" | "semibold";
  size?: number;
}

const fontFamilies = {
  regular: "MontRegular",
  medium: "MontMedium",
  bold: "MontBold",
  semibold: "MontSemiBold",
};

export const TonText: React.FC<TonTextProps> = ({
  uistyle,
  color = Colors.dark.text_primary,
  lH,
  weight = "regular",
  size = 14,
  children,
  ...rest
}) => {
  const textStyle: TextStyle = {
    fontFamily: fontFamilies[weight],
    color,
    fontSize: size,
    ...(lH && { lineHeight: lH }),
    ...uistyle,
  };

  return (
    <Text
      style={textStyle}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TonText;
