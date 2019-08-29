import React, { Component } from 'react';
import { Image, Animated, ScrollView, StyleSheet } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit'

import { images, theme } from '../constants';
const { background } = images;

const { rgba } = Utils;
const { SIZES, COLORS } = theme;

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


export default class Welcome extends Component {
    scrollX = new Animated.Value(0);

    renderImages() {
        return (
            <Block middle center>
                <ScrollView
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={
                        Animated.event([
                            { nativeEvent: { contentOffset: { x: this.scrollX } } }
                        ])
                    }
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
            </Block>
        );
    }

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, SIZES.width);

        return (
            <Block flex={false} row center middle margin={[SIZES.small, 0, SIZES.padding * 2, 0]}>
                {backgrounds.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });
                    return (
                        <Block key={`dots-${index}`} gray animated flex={false} margin={[0, SIZES.small / 2]} radius={SIZES.small} style={[styles.dot, { opacity }]} />
                    );
                })}
            </Block>
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block safe>
                {this.renderImages()}
                <Block bottom flex={false} center margin={60}>
                    <Text h3 semibold theme={theme}>Secured, forever.</Text>
                    <Text center theme={theme} gray margin={[SIZES.small, 0]} subtitle>Clube da Arábia Saudita que fez proposta pelo jogador do Tricolor conversa para fechar com Lucas Lima, atualmente no Nantes. Acordo pode encerrar possibilidade de são-paulino sair</Text>
                    {this.renderDots()}
                    <Button theme={theme} primary style={{ borderRadius: 30 }} onPress={() => navigation.navigate("VPN")}>
                        <Text white center caption bold margin={[SIZES.padding / 2, SIZES.padding * 2]}>GET STARTED</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    dot: {
        width: SIZES.base,
        height: SIZES.base
    }
});