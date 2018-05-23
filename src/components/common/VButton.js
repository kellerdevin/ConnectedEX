


import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const VButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: 'center',
                        paddingBottom: 5,
                    }}
                    source={{ uri: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
                />
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
        fontSize: 24,
    },
    Hash: {
        fontSize: 12,
        fontFamily: 'Apple SD Gothic Neo',
        color: 'grey'
    },
    TopText: {
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: '#E9E4F1',
    },
    BottemText: {
        fontSize: 12,
        backgroundColor: '#E9E4F1',
        shadowColor: 'black',

    },
    All: {
        marginLeft: 20
    },
    greyText: {
        backgroundColor: '#E9E4F1',

    },
    date: {
        color: '#8C8794',
        fontFamily: 'Apple SD Gothic Neo',
        fontSize: 15
    }

};

export { VButton };
