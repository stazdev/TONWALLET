import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TonText } from "@/DSystems/TonText";
import { Colors } from "@/constants/Colors";
import { CircularIconButton, Header } from "@/components";
import { CloseIcon } from "@/assets/icons";

interface TonModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  scrollable?: boolean;
  initialSnapPoint?: string;
  maxSnapPoint?: string;
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

const TonModal: React.FC<TonModalProps> = ({
  isVisible,
  onClose,
  children,
  title,
  scrollable = false,
  initialSnapPoint = "50%",
  maxSnapPoint = "70%",
  containerStyle,
  headerStyle,
  contentContainerStyle,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { bottom } = useSafeAreaInsets();

  const snapPoints = useMemo(
    () => [initialSnapPoint, maxSnapPoint],
    [initialSnapPoint, maxSnapPoint]
  );

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) onClose();
    },
    [onClose]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  const ContentWrapper = scrollable ? BottomSheetScrollView : BottomSheetView;

  const renderHeader = useCallback(
    () => (
      <Header
        middleComponent={<View style={styles.headerMiddle} />}
        rightComponent={
          <CircularIconButton icon={<CloseIcon />} onPress={onClose} />
        }
        leftComponent={
          <TonText size={20} weight="bold">
            {title}
          </TonText>
        }
      />
    ),
    [title, onClose, headerStyle]
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 0 : -1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={[styles.background, containerStyle]}
    >
      <ContentWrapper
        style={[styles.contentContainer, contentContainerStyle]}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        {renderHeader()}
        {children}
      </ContentWrapper>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.dark.background_page,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  headerMiddle: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // paddingVertical: 16,
    marginHorizontal: 16,
  },
  indicator: {
    backgroundColor: Colors.dark.text_secondary,
    width: 80,
  },
});

export default TonModal;
