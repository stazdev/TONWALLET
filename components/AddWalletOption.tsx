import { ChevronRightIcon } from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import TonText from "@/DSystems/TonText";
import { AddWalletOptionProps } from "@/interfaces";
import { StyleSheet, TouchableOpacity } from "react-native";
import ViewWrapper from "./ViewWrapper";
import InfoCard from "./InfoCard";

const AddWalletOption: React.FC<AddWalletOptionProps> = ({
  icon,
  title,
  description,
  onPress,
}) => (
  <>
    <ViewWrapper>
      <InfoCard
        imageSource={icon}
        imgbg={true}
        leftTextTop={{ text: title, size: 16, weight: "semibold" }}
        leftTextBottom={{
          text: description,
          size: 14,
          weight: "medium",
          color: Colors.dark.text_secondary,
        }}
        rightComponent={<ChevronRightIcon />}
      />
    </ViewWrapper>
  </>
);

export default AddWalletOption;

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark.background_content,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark.background_page,
    borderRadius: 20,
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
});
