import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit'


const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
    render() {
        return (
            <Block safe center>
                <Block flex={false} padding={[20, 0]}>
                    <Text title semibold>VPN</Text>
                </Block>
                <Block center>
                    <Text>Servers</Text>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({

});