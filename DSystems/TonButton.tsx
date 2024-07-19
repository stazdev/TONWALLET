import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";
import TonText from "./TonText";

interface TonButtonProps {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary" | "disabled";
  loading?: boolean;
  style?: ViewStyle;
}

const TonButton: React.FC<TonButtonProps> = ({
  title,
  onPress,
  type = "primary",
  loading = false,
  style,
}) => {
  const buttonStyles = [styles.button, style];
  const textStyles = [styles.text];

  switch (type) {
    case "primary":
      buttonStyles.push(styles.primaryButton);
      textStyles.push(styles.primaryText);
      break;
    case "secondary":
      buttonStyles.push(styles.secondaryButton);
      textStyles.push(styles.secondaryText);
      break;
    case "disabled":
      buttonStyles.push(styles.disabledButton);
      textStyles.push(styles.disabledText);
      break;
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={type === "disabled" || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.dark.text_primary} />
      ) : (
        <TonText size={16} weight="semibold" lH={24}>
          {title}
        </TonText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: Colors.dark.accent_blue,
  },
  primaryText: {
    color: Colors.dark.text_primary,
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: Colors.dark.background_content,
  },
  secondaryText: {
    color: Colors.dark.text_primary,
    fontSize: 16,
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: Colors.dark.background_disabled,
  },
  disabledText: {
    color: Colors.dark.text_primary,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TonButton;
