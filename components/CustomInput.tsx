import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { useController, Control, FieldValues, Path } from "react-hook-form";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  interpolateColor,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

interface IconProps {
  component: React.ReactNode;
  onPress?: () => void;
}

interface CustomInputProps<T extends FieldValues> extends TextInputProps {
  name: Path<T>;
  control: Control<T>;
  rules?: any;
  placeholder: string;
  leftIcon?: IconProps;
  rightIcons?: IconProps[];
  secureTextEntry?: boolean;
}

function CustomInput<T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  leftIcon,
  rightIcons,
  secureTextEntry = false,
  ...textInputProps
}: CustomInputProps<T>): React.ReactElement {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const animation = useSharedValue(0);

  const animatedPlaceholderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animation.value, [0, 1], [0, -14]),
        },
      ],
      fontSize: interpolate(animation.value, [0, 1], [16, 12]),
      color: interpolateColor(
        animation.value,
        [0, 1],
        [Colors.dark.text_secondary, Colors.dark.text_secondary]
      ),
    };
  });

  const handleFocus = () => {
    setIsFocused(true);
    animation.value = withTiming(1, { duration: 200 });
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      animation.value = withTiming(0, { duration: 200 });
    }
    onBlur();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <View style={[styles.container, error && styles.errorContainer]}>
        {leftIcon && (
          <TouchableOpacity style={styles.leftIcon} onPress={leftIcon.onPress}>
            {leftIcon.component}
          </TouchableOpacity>
        )}
        <Animated.Text style={[styles.placeholder, animatedPlaceholderStyle]}>
          {placeholder}
        </Animated.Text>
        <TextInput
          style={[
            styles.input,
            leftIcon && styles.inputWithLeftIcon,
            rightIcons && styles.inputWithRightIcon,
          ]}
          value={value as string}
          onChangeText={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={!isPasswordVisible && secureTextEntry}
          {...textInputProps}
        />
        {rightIcons && (
          <View style={styles.rightIconsContainer}>
            {rightIcons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={styles.rightIcon}
                onPress={
                  index === 0 && secureTextEntry
                    ? togglePasswordVisibility
                    : icon.onPress
                }
              >
                {icon.component}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={{ marginHorizontal: 16 }}>
        {error && <Text style={styles.errorText}>{error.message}</Text>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: Colors.dark.accent_blue,
    borderRadius: 16,
    // paddingHorizontal: 12,
    paddingVertical: 4,
    position: "relative",
  },
  errorContainer: {
    borderColor: Colors.dark.accent_red,
  },
  input: {
    color: Colors.dark.text_primary,
    fontSize: 16,
    padding: 16,
    // paddingBottom: 8,
  },
  inputWithLeftIcon: {
    paddingLeft: 36,
  },
  inputWithRightIcon: {
    paddingRight: 72,
  },
  placeholder: {
    position: "absolute",
    left: 12,
    top: 20,
    fontSize: 16,
    color: Colors.dark.text_secondary,
  },
  leftIcon: {
    position: "absolute",
    left: 12,
    top: 20,
  },
  rightIconsContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 12,
    top: 20,
  },
  rightIcon: {
    marginLeft: 12,
  },
  errorText: {
    color: Colors.dark.accent_red,
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
