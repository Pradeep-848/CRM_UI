// src/assets/styles/GlobalStyles.js
import { StyleSheet } from 'react-native';

export const createGlobalStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 8,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Black',
        color: colors.primary,
    },
    title_1: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
    card: {
        borderRadius: 12,
        padding: 16,
        backgroundColor: colors.card,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: colors.text,
    },
    tabBar: {
        backgroundColor: colors.card,
        borderTopColor: colors.border,
    },
    centerLabel: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerLabelText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    centerLabelValue: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 4,
    },
    legendContainer: {
        flex: 1,
        marginLeft: 16,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    legendColor: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 8,
    },
    legendText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
});