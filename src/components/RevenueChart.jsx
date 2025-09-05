// src/components/RevenueChart.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-gifted-charts';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../../assets/styles/GlobalStyles';

const RevenueChart = () => {
    const { colors } = useTheme();
    const globalStyles = createGlobalStyles(colors);

    // Line Chart Data
    const lineData = [
        { value: 20, label: 'S' },
        { value: 45, label: 'M' },
        { value: 28, label: 'T' },
        { value: 80, label: 'W' },
        { value: 99, label: 'T' },
        { value: 43, label: 'F' },
        { value: 65, label: 'S' },
    ];

    const lineData2 = [
        { value: 10 },
        { value: 25 },
        { value: 48 },
        { value: 60 },
        { value: 79 },
        { value: 33 },
        { value: 45 },
    ];

    // Pie Chart Data
    const pieData = [
        {
            value: 35,
            color: colors.primary,
            gradientCenterColor: colors.secondary,
            text: 'Electronics',
        },
        {
            value: 25,
            color: colors.success,
            gradientCenterColor: '#86E5FF',
            text: 'Clothing',
        },
        {
            value: 20,
            color: colors.pink,
            gradientCenterColor: '#FFA3FD',
            text: 'Home',
        },
        {
            value: 20,
            color: colors.purple,
            gradientCenterColor: '#C780FA',
            text: 'Others',
        },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={[globalStyles.title_1, { color: colors.text }]}>Revenue</Text>
                <View style={[styles.tabs, { backgroundColor: colors.lightGray }]}>
                    <Text style={[styles.tab, styles.activeTab, { backgroundColor: colors.primary }]}>Weekly</Text>
                    <Text style={[styles.tab, { color: colors.gray }]}>Monthly</Text>
                    <Text style={[styles.tab, { color: colors.gray }]}>Today</Text>
                </View>
            </View>

            {/* Line Chart */}
            <View style={styles.chartContainer}>
                <LineChart
                    data={lineData}
                    data2={lineData2}
                    height={180}
                    width={280}
                    color1={colors.primary}
                    color2={colors.pink}
                    thickness1={3}
                    thickness2={3}
                    curved
                    hideDataPoints={false}
                    dataPointsColor1={colors.primary}
                    dataPointsColor2={colors.pink}
                    dataPointsRadius={4}
                    hideRules
                    hideYAxisText
                    yAxisColor="transparent"
                    xAxisColor="transparent"
                    backgroundColor={colors.card}
                    animateOnDataChange
                    animationDuration={1000}
                    showVerticalLines={false}
                    xAxisLabelTextStyle={{
                        color: colors.gray,
                        fontSize: 12,
                    }}
                    maxValue={100}
                    noOfSections={4}
                    spacing={45}
                />
            </View>

            {/* Divider */}
            <View style={[styles.divider, { backgroundColor: colors.border }]} />

            {/* Pie Chart Header */}
            <Text style={[styles.subtitle, { color: colors.text, marginTop: 16 }]}>
                Sales by Category
            </Text>

            {/* Pie Chart */}
            <View style={styles.pieChartContainer}>
                <PieChart
                    data={pieData}
                    donut
                    showGradient
                    sectionAutoFocus
                    radius={80}
                    innerRadius={50}
                    innerCircleColor={colors.card}
                    centerLabelComponent={() => (
                        <View style={globalStyles.centerLabel}>
                            <Text style={[globalStyles.centerLabelText, { color: colors.text }]}>Total</Text>
                            <Text style={[globalStyles.centerLabelValue, { color: colors.primary }]}>$12,345</Text>
                        </View>
                    )}
                    focusOnPress
                    onPress={(item, index) => {
                        console.log('Selected:', item.text);
                    }}
                />

                {/* Legend */}
                <View style={globalStyles.legendContainer}>
                    {pieData.map((item, index) => (
                        <View key={index} style={globalStyles.legendItem}>
                            <View style={[globalStyles.legendColor, { backgroundColor: item.color }]} />
                            <Text style={[globalStyles.legendText, { color: colors.text }]}>
                                {item.text} ({item.value}%)
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 8,
        marginBottom: 12,
    },
    tabs: {
        flexDirection: 'row',
        borderRadius: 8,
        padding: 2,
    },
    tab: {
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 12,
        paddingVertical: 6,
        fontSize: 12,
    },
    activeTab: {
        color: '#ffffff',
        borderRadius: 6,
    },
    chartContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    divider: {
        height: 1,
        marginVertical: 16,
        opacity: 0.2,
    },
    pieChartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
});

export default RevenueChart;