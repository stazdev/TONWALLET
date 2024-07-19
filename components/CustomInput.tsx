import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Animated, TouchableOpacity } from 'react-native';

interface Icon {
  name: string;
  onPress: () => void;
}

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  validate: (text: string) => boolean;
  icons?: Icon[];
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChangeText, validate, icons }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const animatedPlaceholder = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedPlaceholder, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedPlaceholder, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);
    setIsValid(validate(text));
  };

  const placeholderStyle = {
    transform: [
      {
        translateY: animatedPlaceholder.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -25],
        }),
      },
    ],
    fontSize: animatedPlaceholder.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedPlaceholder.interpolate({
      inputRange: [0, 1],
      outputRange: ['#888', '#444'],
    }),
  };

  return (
    <View style={[styles.container, isValid ? styles.validBorder : styles.invalidBorder]}>
      <Animated.Text style={[styles.placeholder, placeholderStyle]}>{placeholder}</Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {icons && (
        <View style={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <TouchableOpacity key={index} onPress={icon.onPress} style={styles.iconButton}>
              <Text>{icon.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  validBorder: {
    borderColor: 'green',
  },
  invalidBorder: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 17,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    marginLeft: 5,
  },
});

export default CustomInput;