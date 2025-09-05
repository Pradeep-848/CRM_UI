// src/screens/Analytics.js
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { useTheme } from "../context/ThemeContext";
import StatCard from "../components/StatCard";

const Analytics = () => {
  const { colors } = useTheme();

  // Bar Chart Data
  const barData = [
    { value: 250, label: "Jan", frontColor: colors.primary },
    { value: 500, label: "Feb", frontColor: colors.secondary },
    { value: 745, label: "Mar", frontColor: colors.success },
    { value: 320, label: "Apr", frontColor: colors.pink },
    { value: 600, label: "May", frontColor: colors.purple },
    { value: 450, label: "Jun", frontColor: colors.blue },
  ];

  // Pie Chart Data
  const pieData = [
    { value: 40, color: colors.primary, text: "Mobile" },
    { value: 30, color: colors.success, text: "Desktop" },
    { value: 20, color: colors.pink, text: "Tablet" },
    { value: 10, color: colors.purple, text: "Other" },
  ];

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-5 pb-2">
          <Text
            className="text-xl font-poppinsSemiBold"
            style={{ color: colors.text }}
          >
            Analytics
          </Text>
        </View>

        {/* Stats Overview */}
        <View className="flex-row justify-between px-4">
          <StatCard
            title="Total Visits"
            value="12.4K"
            subtitle="+12% this month"
            color={colors.primary}
            isSmall
          />
          <StatCard
            title="Avg. Session"
            value="4m 32s"
            subtitle="-2% this month"
            color={colors.success}
            isSmall
          />
        </View>

        {/* Monthly Traffic Chart */}
        <View
          className="m-4 mb-2 rounded-xl p-4 shadow"
          style={{ backgroundColor: colors.card }}
        >
          <Text
            className="mb-4 text-base font-poppinsSemiBold"
            style={{ color: colors.text }}
          >
            Monthly Traffic
          </Text>
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
        <View
          className="m-4 my-2 rounded-xl p-4 shadow"
          style={{ backgroundColor: colors.card }}
        >
          <Text
            className="mb-4 text-base font-poppinsSemiBold"
            style={{ color: colors.text }}
          >
            Device Distribution
          </Text>
          <View className="flex-row items-center">
            <PieChart
              data={pieData}
              donut
              radius={80}
              innerRadius={50}
              innerCircleColor={colors.card}
              centerLabelComponent={() => (
                <View className="items-center">
                  <Text
                    className="text-xs font-poppinsRegular"
                    style={{ color: colors.text }}
                  >
                    Total
                  </Text>
                  <Text
                    className="text-lg font-poppinsSemiBold"
                    style={{ color: colors.primary }}
                  >
                    12.4K
                  </Text>
                </View>
              )}
            />
            <View className="ml-6">
              {pieData.map((item, index) => (
                <View key={index} className="flex-row items-center mb-2">
                  <View
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <Text
                    className="text-sm font-poppinsRegular"
                    style={{ color: colors.text }}
                  >
                    {item.text} ({item.value}%)
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View
          className="m-4 mt-2 rounded-xl p-4 shadow"
          style={{ backgroundColor: colors.card }}
        >
          <Text
            className="mb-4 text-base font-poppinsSemiBold"
            style={{ color: colors.text }}
          >
            Recent Activity
          </Text>
          {[1, 2, 3].map((item) => (
            <View
              key={item}
              className="flex-row py-3 border-b"
              style={{ borderBottomColor: colors.border }}
            >
              <View
                className="w-2 h-2 rounded-full mt-1 mr-3"
                style={{ backgroundColor: colors.primary }}
              />
              <View className="flex-1">
                <Text
                  className="text-sm font-poppinsMedium"
                  style={{ color: colors.text }}
                >
                  New order #{1000 + item}
                </Text>
                <Text
                  className="mt-1 text-xs font-poppinsRegular"
                  style={{ color: colors.gray }}
                >
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

export default Analytics;
