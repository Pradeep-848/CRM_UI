import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../../assets/styles/GlobalStyles';

const Orders = () => {
    const { colors, darkMode } = useTheme();
    const globalStyles = createGlobalStyles(colors);

    // Sample orders data
    const orders = [
        {
            id: '#ORD-1001',
            date: 'Today, 10:45 AM',
            status: 'Delivered',
            statusColor: colors.success,
            items: 3,
            total: '$142.50',
            customer: 'John Smith',
        },
        {
            id: '#ORD-1002',
            date: 'Yesterday, 2:30 PM',
            status: 'Shipped',
            statusColor: colors.blue,
            items: 5,
            total: '$245.75',
            customer: 'Sarah Johnson',
        },
        {
            id: '#ORD-1003',
            date: 'Oct 12, 9:15 AM',
            status: 'Processing',
            statusColor: colors.warning,
            items: 2,
            total: '$89.99',
            customer: 'Michael Brown',
        },
        {
            id: '#ORD-1004',
            date: 'Oct 10, 4:20 PM',
            status: 'Cancelled',
            statusColor: colors.error,
            items: 1,
            total: '$45.00',
            customer: 'Emily Davis',
        },
    ];

    // Order status tabs
    const [activeTab, setActiveTab] = React.useState('All');

    const tabs = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

    const filteredOrders = activeTab === 'All'
        ? orders
        : orders.filter(order => order.status === activeTab);

    return (
        <SafeAreaView style={[globalStyles.container, { backgroundColor: colors.background }]}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: colors.card }]}>
                <Text style={[globalStyles.title, { color: colors.text }]}>Orders</Text>
                <TouchableOpacity>
                    <Icon name="search" size={22} color={colors.primary} />
                </TouchableOpacity>
            </View>

            {/* Stats Cards */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.statsContainer}
            >
                <StatCard
                    title="Total Orders"
                    value="124"
                    change="+12% this month"
                    color={colors.primary}
                />
                <StatCard
                    title="Completed"
                    value="89"
                    change="+8% this month"
                    color={colors.success}
                />
                <StatCard
                    title="Pending"
                    value="15"
                    change="-3% this month"
                    color={colors.warning}
                />
                <StatCard
                    title="Cancelled"
                    value="20"
                    change="+2% this month"
                    color={colors.error}
                />
            </ScrollView>

            {/* Status Tabs */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabsContainer}
            >
                {tabs.map(tab => (
                    <TouchableOpacity
                        key={tab}
                        style={[
                            styles.tab,
                            activeTab === tab && styles.activeTab,
                            activeTab === tab && { backgroundColor: colors.primary }
                        ]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === tab && styles.activeTabText,
                            { color: activeTab === tab ? colors.white : colors.text }
                        ]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Orders List */}
            <FlatList
                data={filteredOrders}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.orderCard, { backgroundColor: colors.card }]}
                        onPress={() => console.log('View order', item.id)}
                    >
                        <View style={styles.orderHeader}>
                            <Text style={[globalStyles.title_1, { color: colors.primary }]}>{item.id}</Text>
                            <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
                                <Text style={styles.statusText}>{item.status}</Text>
                            </View>
                        </View>

                        <Text style={[styles.orderDate, { color: colors.gray }]}>{item.date}</Text>

                        <View style={styles.orderDetails}>
                            <View style={styles.detailItem}>
                                <Icon name="user" size={14} color={colors.gray} />
                                <Text style={[styles.detailText, { color: colors.text }]}>{item.customer}</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Icon name="box" size={14} color={colors.gray} />
                                <Text style={[styles.detailText, { color: colors.text }]}>{item.items} items</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <Icon name="dollar-sign" size={14} color={colors.gray} />
                                <Text style={[styles.detailText, { color: colors.text }]}>{item.total}</Text>
                            </View>
                        </View>

                        <View style={styles.orderActions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Text style={[styles.actionText, { color: colors.primary }]}>View Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[
                                styles.actionButton,
                                styles.primaryAction,
                                { backgroundColor: colors.primary }
                            ]}>
                                <Text style={[styles.actionText, { color: colors.white }]}>Track</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

// Reusable StatCard component
const StatCard = ({ title, value, change, color }) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.statTitle, { color: colors.gray }]}>{title}</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>{value}</Text>
            <Text style={[styles.statChange, { color: change.includes('+') ? colors.success : colors.error }]}>
                {change}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    statsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 10
    },
    statCard: {
        width: 150,
        borderRadius: 12,
        padding: 12,
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statTitle: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginBottom: 4,
    },
    statValue: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 10,
    },
    statChange: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    tabsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderRadius: 20,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    activeTab: {
        borderWidth: 0,
    },
    tabText: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    activeTabText: {
        fontFamily: 'Poppins-SemiBold',
    },
    listContainer: {
        padding: 16,
    },
    orderCard: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: 'white',
    },
    orderDate: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginBottom: 12,
    },
    orderDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginLeft: 4,
    },
    orderActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    primaryAction: {
        borderWidth: 0,
    },
    actionText: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
});

export default Orders;