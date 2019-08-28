import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit'


const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
    render() {
        return (
            <Block middle center>
                <Text>VPN</Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({

});