import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../../assets/styles/GlobalStyles';

const Settings = () => {
    const { colors, darkMode, toggleTheme } = useTheme();
    const globalStyles = createGlobalStyles(colors);

    // Sample settings states
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [biometricEnabled, setBiometricEnabled] = React.useState(false);
    const [autoSyncEnabled, setAutoSyncEnabled] = React.useState(true);

    const settingsOptions = [
        {
            title: "Account",
            icon: "user",
            items: [
                { label: "Edit Profile", icon: "edit", action: () => console.log("Edit Profile") },
                { label: "Change Password", icon: "lock", action: () => console.log("Change Password") },
                { label: "Payment Methods", icon: "credit-card", action: () => console.log("Payment Methods") },
            ]
        },
        {
            title: "Preferences",
            icon: "settings",
            items: [
                {
                    label: "Dark Mode",
                    icon: "moon",
                    component: (
                        <Switch
                            value={darkMode}
                            onValueChange={toggleTheme}
                            thumbColor={colors.white}
                            trackColor={{ false: colors.lightGray, true: colors.primary }}
                        />
                    )
                },
                {
                    label: "Notifications",
                    icon: "bell",
                    component: (
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            thumbColor={colors.white}
                            trackColor={{ false: colors.lightGray, true: colors.primary }}
                        />
                    )
                },
                {
                    label: "Biometric Login",
                    icon: "fingerprint",
                    component: (
                        <Switch
                            value={biometricEnabled}
                            onValueChange={setBiometricEnabled}
                            thumbColor={colors.white}
                            trackColor={{ false: colors.lightGray, true: colors.primary }}
                        />
                    )
                },
            ]
        },
        {
            title: "More",
            icon: "more-horizontal",
            items: [
                { label: "Help Center", icon: "help-circle", action: () => console.log("Help Center") },
                { label: "Terms & Privacy", icon: "shield", action: () => console.log("Terms") },
                { label: "Log Out", icon: "log-out", action: () => console.log("Log Out"), isDestructive: true },
            ]
        },
    ];

    return (
        <SafeAreaView style={[globalStyles.container, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={[styles.header, { borderBottomColor: colors.border }]}>
                    <Text style={[globalStyles.title, { color: colors.text }]}>Settings</Text>
                </View>

                {/* Settings Sections */}
                {settingsOptions.map((section, sectionIndex) => (
                    <View key={sectionIndex} style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Icon
                                name={section.icon}
                                size={18}
                                color={colors.primary}
                                style={styles.sectionIcon}
                            />
                            <Text style={[globalStyles.title_1, { color: colors.primary }]}>
                                {section.title}
                            </Text>
                        </View>

                        <View style={[styles.sectionContent, { backgroundColor: colors.card }]}>
                            {section.items.map((item, itemIndex) => (
                                <View
                                    key={itemIndex}
                                    style={[
                                        styles.settingItem,
                                        itemIndex !== section.items.length - 1 && {
                                            borderBottomWidth: 1,
                                            borderBottomColor: colors.border
                                        }
                                    ]}
                                >
                                    <View style={styles.settingLeft}>
                                        <Icon
                                            name={item.icon}
                                            size={20}
                                            color={item.isDestructive ? colors.error : colors.primary}
                                            style={styles.itemIcon}
                                        />
                                        <Text style={[
                                            styles.settingLabel,
                                            { color: item.isDestructive ? colors.error : colors.text }
                                        ]}>
                                            {item.label}
                                        </Text>
                                    </View>

                                    {item.component ? item.component : (
                                        <Icon
                                            name="chevron-right"
                                            size={20}
                                            color={colors.gray}
                                        />
                                    )}
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                {/* App Version */}
                <Text style={[styles.versionText, { color: colors.gray }]}>
                    v1.0.0 • Build 42
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        marginBottom: 8,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 8,
    },
    sectionIcon: {
        marginRight: 12,
    },
    sectionContent: {
        borderRadius: 12,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        marginRight: 16,
    },
    settingLabel: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    versionText: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop: 8,
        marginBottom: 24,
    },
});

export default Settings;