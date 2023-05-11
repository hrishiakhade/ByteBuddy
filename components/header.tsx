import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES } from '../utils/constants';


type HeaderProps = {
    title: string,
    subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: FONT_SIZES.large,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FONT_SIZES.medium,
        fontWeight: "600",
        color: COLORS.primary,
        textAlign: 'center'
    }
});