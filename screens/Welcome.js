import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit'

import { background } from '../constants/images';

const backgrounds = [
    {
        title: 'Secured, forever.',
        description: 'Clube da Arábia Saudita que fez proposta pelo jogador do Tricolor conversa para fechar com Lucas Lima, atualmente no Nantes. Acordo pode encerrar possibilidade de são-paulino sair',
        img: background.welcome
    },
    {
        title: 'Secured, forever.',
        description: 'Clube da Arábia Saudita que fez proposta pelo jogador do Tricolor conversa para fechar com Lucas Lima, atualmente no Nantes. Acordo pode encerrar possibilidade de são-paulino sair',
        img: background.encrypted
    },
    {
        title: 'Secured, forever.',
        description: 'Clube da Arábia Saudita que fez proposta pelo jogador do Tricolor conversa para fechar com Lucas Lima, atualmente no Nantes. Acordo pode encerrar possibilidade de são-paulino sair',
        img: background.privacy
    }
]

const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class Welcome extends Component {
    renderImages() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            >
                {
                    backgrounds.map((item, index) => (
                        <Block key={`img-${index}`} center bottom style={{ width: SIZES.width }}>
                            <Image source={item.img} resizeMode="center" style={{
                                width: SIZES.width / 1.5,
                                height: "100%"
                            }} />
                        </Block>
                    ))
                }
            </ScrollView>
        );
    }

    renderDots() {
        return (
            <Block flex={false} row center middle margin={[20, 0, 40, 0]}>
                <Block gray flex={false} margin={[0, 5]} color={rgba(COLORS.gray)} radius={3} style={{ width: 8, height: 8 }} />
                <Block gray flex={false} margin={[0, 5]} color={rgba(COLORS.gray, 0.5)} radius={3} style={{ width: 8, height: 8 }} />
                <Block gray flex={false} margin={[0, 5]} color={rgba(COLORS.gray, 0.5)} radius={3} style={{ width: 8, height: 8 }} />
            </Block>
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block safe>
                <Block middle center>
                    {this.renderImages()}
                </Block>
                <Block bottom flex={false} center margin={60}>
                    <Text h3 semibold>Secured, forever.</Text>
                    <Text center gray margin={[10, 0]} caption></Text>
                    {this.renderDots()}
                    <Button primary style={{ borderRadius: 30 }} onPress={() => navigation.navigate("VPN")}>
                        <Text white center caption bold margin={[6, 26]}>GET STARTED</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({

});