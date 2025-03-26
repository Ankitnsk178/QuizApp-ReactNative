import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
    title,
    onPress,
    disabled = false,
    style = {},
    textStyle = {}
}) => {
    return (
        
        <TouchableOpacity
            style={[
                styles.button,
                disabled && styles.disabledButton,
                style
            ]}

            onPress={onPress}
            disabled={disabled}
        >

            <Text style={[styles.buttonText, textStyle]}>
                {title}
            </Text>
        
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
    },

    disabledButton: {
        opacity: 0.5,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});

export default Button;