


import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const VButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 12,
        fontWeight: '600',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonStyle: {
        borderWidth: 1,
        height: 25,
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        borderColor: 'whitesmoke',
    }
};

export { VButton };
