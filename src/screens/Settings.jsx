import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Switch } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { colors, darkMode, toggleTheme } = useTheme();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(true);

  const settingsOptions = [
    {
      title: "Account",
      icon: "user",
      items: [
        { label: "Edit Profile", icon: "edit", action: () => console.log("Edit Profile") },
        { label: "Change Password", icon: "lock", action: () => console.log("Change Password") },
        { label: "Payment Methods", icon: "credit-card", action: () => console.log("Payment Methods") },
      ],
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
          ),
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
          ),
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
          ),
        },
      ],
    },
    {
      title: "More",
      icon: "more-horizontal",
      items: [
        { label: "Help Center", icon: "help-circle", action: () => console.log("Help Center") },
        { label: "Terms & Privacy", icon: "shield", action: () => console.log("Terms") },
        { label: "Log Out", icon: "log-out", action: () => console.log("Log Out"), isDestructive: true },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1"  style={{ backgroundColor: colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pb-4 pt-5 border-b border-lightGray mb-2">
          <Text className="text-xl font-poppinsSemiBold" style={{ color: colors.text }}>Settings</Text>
        </View>

        {/* Settings Sections */}
        {settingsOptions.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-3">
            <View className="flex-row items-center px-6 mb-2 mt-2">
              <Icon name={section.icon} size={18} color={colors.primary} style={{ marginRight: 12 }} />
              <Text className="text-base font-poppinsMedium" style={{ color: colors.text }}>{section.title}</Text>
            </View>

            <View className="mx-4 rounded-xl elevation-5" style={{ backgroundColor: colors.card }}>
              {section.items.map((item, itemIndex) => (
                <View
                  key={itemIndex}
                  className="flex-row justify-between items-center px-5 py-4"
                  style={
                    itemIndex !== section.items.length - 1
                      ? { borderBottomWidth: 1, borderBottomColor: colors.border }
                      : {}
                  }
                >
                  <View className="flex-row items-center">
                    <Icon
                      name={item.icon}
                      size={20}
                      color={item.isDestructive ? colors.error : colors.primary}
                      style={{ marginRight: 16 }}
                    />
                    <Text
                      className="text-[15px] font-poppins-medium"
                      style={{ color: item.isDestructive ? colors.error : colors.text }}
                    >
                      {item.label}
                    </Text>
                  </View>

                  {item.component ? (
                    item.component
                  ) : (
                    <Icon name="chevron-right" size={20} color={colors.gray} />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* App Version */}
        <Text className="text-center text-xs font-poppins-regular text-gray mt-1 mb-1">
          v1.0.0 • Build 42
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
