import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class BlockInfo extends React.Component {
    render() {
        return (
            <View>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                <Text style={[styles.header, styles.All]}>
                    2016 Louis Vuitton Keepall
        </Text>
                <Text style={[styles.subtitle, styles.All]}>
                    Classic Monogram           <Text style={[styles.transfer,]}> Transfer </Text>
                </Text>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: 'center',
                        paddingBottom: 5,
                    }}
                    source={{ uri: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
                />
                <Text style={[styles.BlockInfo, styles.All]}>
                    Block Info
        </Text >
                <Text style={[styles.Hash, styles.All]}>
                    ETH Pop Link
          <Text style={[styles.Blue,]}>  view
          </Text>
                </Text>
                <Text style={[styles.All, styles.Hash]}>
                    Hash: 0x5e4bb521e0b6c18bd40674474f4b1527...
        </Text>
                <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
                <View style={{ width: 500, height: 2, backgroundColor: '#C9C9C9' }} />
                <Text style={[styles.BlockInfo, styles.All]}>
                    History
        </Text>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                <Text style={[styles.TopText, styles.All, styles.greyText]}>
                    Item Transfered to You
          <Text style={[styles.gray, styles.date]}>                               4/1/2018
          </Text>
                </Text>
                <Text style={[styles.BottemText, styles.All, styles.greyText]}>
                    From: 0x6bd2bd4fa7ec27ef0...
          <Text style={[styles.more,]}>                                       more
          </Text>
                </Text>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                <Text style={[styles.TopText, styles.All, styles.greyText]}>
                    Item Transfered
          <Text style={[styles.gray, styles.date]}>                                          3/15/2017
          </Text>
                </Text>
                <Text style={[styles.BottemText, styles.All, styles.greyText]}>
                    From: 0xb35f68a5d0da29...
        </Text>
                <Text style={[styles.BottemText, styles.All, styles.greyText]}>
                    To: 0x6bd2bd4fa7ec27ef0...
         <Text style={[styles.more,]}>                                           more
         </Text>
                    <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
                </Text>
                <Text style={[styles.TopText, styles.All, styles.greyText]}>
                    Item Created
          <Text style={[styles.gray, styles.date]}>                                              4/26/2016
          </Text>
                </Text>
                <Text style={[styles.BottemText, styles.All, styles.greyText]}>
                    Merchant: Louis Vuitton
          <Text style={[styles.more,]}>                                                   more
          </Text>
                </Text>
                <View style={{ width: 500, height: 30, backgroundColor: 'white' }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        color: '#8E8B93',
    },
    transfer: {
        color: '#4F66EE',
        fontSize: 18,
        backgroundColor: 'whitesmoke',
    },
    more: {
        color: '#4467DA',
        fontSize: 12,
    },
    Blue: {
        color: '#4467DA'
    },
    BlockInfo: {
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

});

export { BlockInfo };