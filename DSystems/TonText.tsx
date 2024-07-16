import { Text, type TextProps, StyleSheet, TextStyle } from "react-native";

export type TonTextProps = TextProps & {
  color?: string;
  uistyle?: TextStyle;
  lH?: number;
  weight?: "bold" | "medium" | "regular" | "semibold";
  size?: number;
};

export function TonText({
  uistyle,
  color = "red",
  lH = 16,
  weight = "regular",
  size = 14,
  ...rest
}: TonTextProps) {
  let textWeightStyle = {};
  switch (weight) {
    case "regular":
      textWeightStyle = styles.regular;
      break;

    case "medium":
      textWeightStyle = styles.medium;
      break;
    case "semibold":
      textWeightStyle = styles.semibold;
      break;
    case "bold":
      textWeightStyle = styles.bold;
      break;

    default:
      textWeightStyle = styles.regular;
      break;
  }

  const mergeStyles = {
    ...uistyle,
    ...textWeightStyle,
  };

  return (
    <Text
      style={{ ...mergeStyles, lineHeight: lH, color, fontSize: size }}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "MontRegular",
  },
  medium: {
    fontFamily: "MontMedium",
  },
  bold: {
    fontFamily: "MontBold",
  },
  semibold: {
    fontFamily: "MontSemiBold",
  },
});
