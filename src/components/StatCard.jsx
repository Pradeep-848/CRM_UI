// src/components/StatCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const StatCard = ({ title, value, subtitle, color, progress, isSmall = false, isWhiteCard = false }) => {
    const { colors } = useTheme();
    const cardColor = color || colors.primary;

    return (
        <View style={[styles.container, { backgroundColor: cardColor }, isSmall && styles.smallContainer]}>
            <Text style={[
                styles.value,
                isSmall && styles.smallValue,
                isWhiteCard ? { color: colors.text } : { color: colors.white }
            ]}>
                {value}
            </Text>
            <Text style={[
                styles.title,
                isSmall && styles.smallTitle,
                isWhiteCard ? { color: colors.text } : { color: colors.white }
            ]}>
                {title}
            </Text>
            {subtitle && (
                <Text style={[
                    styles.subtitle,
                    isSmall && styles.smallSubtitle,
                    isWhiteCard ? { color: colors.gray } : { color: colors.white, opacity: 0.8 }
                ]}>
                    {subtitle}
                </Text>
            )}
            {progress && (
                <View style={[
                    styles.progressContainer,
                    isSmall && styles.smallProgressContainer,
                    isWhiteCard && { backgroundColor: colors.lightGray }
                ]}>
                    <View style={[
                        styles.progressBar,
                        { width: `${progress}%` },
                        { backgroundColor: isWhiteCard ? colors.primary : colors.white }
                    ]} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 12,
        margin: 8,
        flex: 1,
    },
    smallContainer: {
        padding: 12,
        borderRadius: 10,
    },
    value: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
    },
    smallValue: {
        fontSize: 18,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    smallTitle: {
        fontSize: 12,
    },
    subtitle: {
        fontSize: 10,
        fontFamily: 'Poppins-Thin',
        marginTop: 2,
    },
    smallSubtitle: {
        fontSize: 8,
        marginTop: 1,
    },
    progressContainer: {
        height: 8,
        borderRadius: 4,
        marginTop: 8,
        overflow: 'hidden',
    },
    smallProgressContainer: {
        height: 6,
        marginTop: 6,
    },
    progressBar: {
        height: '100%',
        borderRadius: 2,
    },
});

export default StatCard;