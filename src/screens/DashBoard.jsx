import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import DarkModeToggle from '../components/DarkModeToggle';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../../assets/styles/GlobalStyles';

const Dashboard = () => {
    const { colors, darkMode } = useTheme();
    const globalStyles = createGlobalStyles(colors);
    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.header}>
                    <Text style={[globalStyles.title, { color: colors.primary }]}>Dashboard</Text>
                    <View style={styles.headerRight}>
                        <DarkModeToggle />
                        <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                            <Icon name="user" size={20} color={colors.white} />
                        </View>
                    </View>
                </View>

                <View style={styles.statsGrid}>
                    <View style={styles.statsRow}>
                        <StatCard title="Total Products" value="180" subtitle="0%" color={colors.primary} progress={30} isWhiteCard={false} />
                        <StatCard title="Total Orders" value="210" subtitle="0%" color={colors.card} progress={70} isWhiteCard={true} />
                    </View>
                    <View style={styles.statsRow}>
                        <StatCard title="Total Clients" value="150" subtitle="0%" color={colors.success} progress={70} isSmall={true} isWhiteCard={false} />
                        <StatCard title="Revenue" value="110" subtitle="0%" color={colors.purple} progress={70} isSmall={true} isWhiteCard={false} />
                    </View>
                </View>
                <RevenueChart />
            </ScrollView>
        </SafeAreaView>);
};
const styles = StyleSheet.create({ 
    headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16, }, 
    avatar: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', }, 
    statsGrid: { paddingHorizontal: 8, }, 
    statsRow: { flexDirection: 'row', justifyContent: 'space-between', }, 
}); 

export default Dashboard;
// import React from 'react';
// import { ScrollView, View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import StatCard from '../components/StatCard';
// import RevenueChart from '../components/RevenueChart';
// import DarkModeToggle from '../components/DarkModeToggle';
// import { useTheme } from '../context/ThemeContext';

// const Dashboard = () => {
//     const { colors } = useTheme();

//     return (
//         <View className="flex-1 bg-background mt-[10%]">
//             {/* Header - fixed alignment */}
//             <View className="flex-row justify-between items-center px-4 py-4">
//                 <Text className="text-2xl text-primary font-poppins-black">
//                     Dashboard
//                 </Text>
//                 <View className="flex-row items-center gap-4">
//                     <DarkModeToggle />
//                     <View className="w-10 h-10 rounded-full bg-primary justify-center items-center">
//                         <Icon name="user" size={20} color="white" />
//                     </View>
//                 </View>
//             </View>

//             <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-2">
//                 {/* Stats Grid - 2x2 layout */}
//                 <View className="mb-4">
//                     {/* First Row */}
//                     <View className="flex-row justify-between mb-4">
//                         <View className="w-[48%]">
//                             <StatCard
//                                 title="Total Products"
//                                 value="180"
//                                 subtitle="0%"
//                                 color={colors.primary}
//                                 progress={30}
//                                 isWhiteCard={false}
//                             />
//                         </View>
//                         <View className="w-[48%]">
//                             <StatCard
//                                 title="Total Orders"
//                                 value="210"
//                                 subtitle="0%"
//                                 color={colors.card}
//                                 progress={70}
//                                 isWhiteCard={true}
//                             />
//                         </View>
//                     </View>

//                     {/* Second Row */}
//                     <View className="flex-row justify-between">
//                         <View className="w-[48%]">
//                             <StatCard
//                                 title="Total Clients"
//                                 value="150"
//                                 subtitle="0%"
//                                 color={colors.success}
//                                 progress={70}
//                                 isSmall={true}
//                                 isWhiteCard={false}
//                             />
//                         </View>
//                         <View className="w-[48%]">
//                             <StatCard
//                                 title="Revenue"
//                                 value="110"
//                                 subtitle="0%"
//                                 color={colors.purple}
//                                 progress={70}
//                                 isSmall={true}
//                                 isWhiteCard={false}
//                             />
//                         </View>
//                     </View>
//                 </View>

//                 {/* Revenue Chart */}
//                 <RevenueChart />
//             </ScrollView>
//         </View>
//     );
// };

// export default Dashboard;