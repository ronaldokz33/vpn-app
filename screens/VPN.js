import React, { Component } from 'react';
import { StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit'

import { images, servers } from '../constants';


const { icons } = images;

const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
    state = {
        connected: false,
        server: null,
        showModal: false,
        automatic: {
            name: "Automatic",
            icon: icons.automatic
        }
    }

    handleConnect = () => {
        const { connected } = this.state;

        this.setState({ connected: !connected });
    }

    handleServer = (server) => {
        this.setState({ server: server, connected: false, showModal: false });
    }

    renderServer = () => {

        const { server, automatic } = this.state;

        const connection = server || automatic;

        return (

            <Block flex={false} row center middle>
                <Image source={connection.icon} />
                <Text margin={[0, 10, 0, 20]}>{connection.name}</Text>
                <Image source={icons.dropdown} />
            </Block>
        )
    }

    renderServers = () => {
        const { showModal, server, automatic } = this.state;
        const connection = server || automatic;

        return (
            <Modal visible={showModal} animationType="fade" transparent>
                <Block bottom gray>
                    <Block white middle flex={false} padding={[SIZES.padding, 0]}>
                        <Text center gray subtitle>Pick your Server</Text>
                        <ScrollView>
                            {
                                servers.map((item, index) => {
                                    const isConnected = connection.name === item.name;
                                    const isChecked = icons[isConnected ? "checked" : "unchecked"];

                                    return (
                                        <Button transparent key={`server-${index}`} onPress={() => this.handleServer(item)}>
                                            <Block row center flex={false} space="between" margin={[SIZES.padding / 2, SIZES.padding]}>
                                                <Block row center flex={false}>
                                                    <Image source={item.icon} />
                                                    <Text padding={[0, SIZES.padding]}>{item.name}</Text>
                                                </Block>
                                                <Image source={isChecked} />
                                            </Block>
                                        </Button>
                                    );
                                })
                            }
                        </ScrollView>
                    </Block>
                </Block>
            </Modal>
        )
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
                    <Image style={styles.image} source={icons[connected ? "online" : "offline"]} />

                    <Button outlined={!connected} style={styles.connect} onPress={this.handleConnect}>
                        <Text capiton center bold white={connected} margin={[SIZES.padding / 2, 0]}>
                            {connected ? "DISCONNECT" : "CONNECT NOW"}
                        </Text>
                    </Button>
                </Block>
                <Block flex={false} middle white shadow style={styles.servers}>
                    <Button onPress={() => this.setState({ showModal: true })} transparent>
                        {this.renderServer()}
                    </Button>
                </Block>
                {this.renderServers()}
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
        height: SIZES.base * 9,
        shadowOffset: {
            width: 0,
            height: -5
        },
        shadowOpacity: 0.05,
        shadowRadius: SIZES.base / 2
    }
});