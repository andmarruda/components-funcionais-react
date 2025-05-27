import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { inputStyles as styles } from '../styles/input';

interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
        {...props}
      />
    </View>
  );
};

export default CustomInput;
