import React from "react";

import {
    GestureResponderEvent,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

import { buttonStyles } from '../styles/button';

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    style,
    textStyle,
    disabled = false
}) => {
    return (
        <TouchableOpacity
            style={[buttonStyles.button, style, disabled && buttonStyles.disabled]}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
        >
            <Text style={[buttonStyles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}
