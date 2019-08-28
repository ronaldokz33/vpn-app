import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit'

import { imagens } from '../constants';


const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
    state = {
        connected: false
    }

    handleConnect = () => {
        const { connected } = this.state;

        this.setState({ connected: !connected });
    }
    render() {
        const { connected } = this.state;

        return (
            <Block safe center space="between">
                <Block flex={false} padding={[20, 0]}>
                    <Text title semibold>VPN</Text>
                </Block>
                <Block center middle flex={false}>
                    <Block row flex={false} center middle white shadow radius={SIZES.base * 3} padding={[SIZES.base, SIZES.padding]}>
                        <Text subtitle semibold gray height={30}>
                            {connected ? "CONNECTED" : "DISCONNECTED"}
                        </Text>
                        <Block flex={false} radius={10} color={connected ? COLORS.success : rgba(COLORS.gray, 0.5)} style={styles.status} />
                    </Block>
                    <Image style={styles.image} source={imagens.icons[connected ? "online" : "offline"]} />

                    <Button outlined={!connected} style={styles.connect} onPress={this.handleConnect}>
                        <Text capiton center bold white={!connected} margin={[SIZE.padding / 2, 0]}>
                            {connected ? "DISCONNECT" : "CONNECT NOW"}
                        </Text>
                    </Button>
                </Block>
                <Block flex={false} middle white shadow style={styles.servers}>
                    <Button transparent>
                        <Text center>Current server</Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    connect: {
        width: SIZES.width / 2
    },
    image: {
        width: 180,
        height: 180,
        marginVertical: 20
    },
    status: {
        width: 8,
        height: 8,
        marginLeft: 10
    },
    servers: {
        width: SIZES.width,
        height: SIZES.base * 9
    }
});