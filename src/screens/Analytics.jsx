import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { BarChart, PieChart } from 'react-native-gifted-charts';
import { useTheme } from '../context/ThemeContext';
import StatCard from '../components/StatCard';
import { createGlobalStyles } from '../../assets/styles/GlobalStyles';

const Analytics = () => {
    const { colors, darkMode } = useTheme();
    const globalStyles = createGlobalStyles(colors);

    // Bar Chart Data
    const barData = [
        { value: 250, label: 'Jan', frontColor: colors.primary },
        { value: 500, label: 'Feb', frontColor: colors.secondary },
        { value: 745, label: 'Mar', frontColor: colors.success },
        { value: 320, label: 'Apr', frontColor: colors.pink },
        { value: 600, label: 'May', frontColor: colors.purple },
        { value: 450, label: 'Jun', frontColor: colors.blue },
    ];

    // Pie Chart Data
    const pieData = [
        { value: 40, color: colors.primary, text: 'Mobile' },
        { value: 30, color: colors.success, text: 'Desktop' },
        { value: 20, color: colors.pink, text: 'Tablet' },
        { value: 10, color: colors.purple, text: 'Other' },
    ];

    return (
        <SafeAreaView style={[globalStyles.container, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={[globalStyles.title, { color: colors.primary }]}>Analytics</Text>
                </View>

                {/* Stats Overview */}
                <View style={styles.statsRow}>
                    <StatCard
                        title="Total Visits"
                        value="12.4K"
                        subtitle="+12% this month"
                        color={colors.primary}
                        isSmall={true}
                    />
                    <StatCard
                        title="Avg. Session"
                        value="4m 32s"
                        subtitle="-2% this month"
                        color={colors.success}
                        isSmall={true}
                    />
                </View>
                {/* <View style={styles.statsRow}>
                    <StatCard
                        title="Bounce Rate"
                        value="34%"
                        subtitle="+5% this month"
                        color={colors.pink}
                        isSmall={true}
                    />
                    <StatCard
                        title="Conversion"
                        value="3.2%"
                        subtitle="+0.8% this month"
                        color={colors.purple}
                        isSmall={true}
                    />
                </View> */}

                {/* Monthly Traffic Chart */}
                <View style={[styles.chartContainer, { backgroundColor: colors.card }]}>
                    <Text style={[styles.chartTitle, { color: colors.text }]}>Monthly Traffic</Text>
                    <BarChart
                        data={barData}
                        barWidth={20}
                        spacing={20}
                        roundedTop
                        roundedBottom
                        hideRules
                        xAxisColor={colors.border}
                        yAxisColor={colors.border}
                        yAxisTextStyle={{ color: colors.gray, fontSize: 10 }}
                        xAxisLabelTextStyle={{ color: colors.gray, fontSize: 10 }}
                        noOfSections={5}
                        maxValue={1000}
                        height={200}
                        initialSpacing={10}
                        backgroundColor={colors.card}
                    />
                </View>

                {/* Device Distribution */}
                <View style={[styles.pieChartContainer, { backgroundColor: colors.card }]}>
                    <Text style={[styles.chartTitle, { color: colors.text }]}>Device Distribution</Text>
                    <View style={styles.pieWrapper}>
                        <PieChart
                            data={pieData}
                            donut
                            radius={80}
                            innerRadius={50}
                            innerCircleColor={colors.card}
                            centerLabelComponent={() => (
                                <View style={globalStyles.centerLabel}>
                                    <Text style={[globalStyles.centerLabelText, { color: colors.text }]}>Total</Text>
                                    <Text style={[globalStyles.centerLabelValue, { color: colors.primary }]}>12.4K</Text>
                                </View>
                            )}
                        />
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

                {/* Recent Activity */}
                <View style={[styles.activityContainer, { backgroundColor: colors.card }]}>
                    <Text style={[styles.chartTitle, { color: colors.text }]}>Recent Activity</Text>
                    {[1, 2, 3].map((item) => (
                        <View key={item} style={[styles.activityItem, { borderBottomColor: colors.border }]}>
                            <View style={[styles.activityDot, { backgroundColor: colors.primary }]} />
                            <View style={styles.activityText}>
                                <Text style={[styles.activityTitle, { color: colors.text }]}>
                                    New order #{1000 + item}
                                </Text>
                                <Text style={[styles.activityTime, { color: colors.gray }]}>
                                    {item * 2} hours ago
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingBottom: 10,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    chartContainer: {
        borderRadius: 12,
        padding: 16,
        margin: 16,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    pieChartContainer: {
        borderRadius: 12,
        padding: 16,
        margin: 16,
        marginTop: 8,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    chartTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 16,
    },
    pieWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityContainer: {
        borderRadius: 12,
        padding: 16,
        margin: 16,
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    activityItem: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
    },
    activityDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: 4,
        marginRight: 12,
    },
    activityText: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    activityTime: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop: 2,
    },
});

export default Analytics;