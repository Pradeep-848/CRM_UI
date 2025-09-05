// src/components/RevenueChart.js
import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, PieChart } from 'react-native-gifted-charts';
import { useTheme } from '../context/ThemeContext';

const RevenueChart = () => {
    const { colors } = useTheme();

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
        <View
          className="m-4 rounded-xl p-4"
          style={{ backgroundColor: colors.card }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-base font-poppinsSemiBold" style={{ color: colors.text }}>
              Revenue
            </Text>

            <View
              className="flex-row rounded-lg p-1"
              style={{ backgroundColor: colors.lightGray }}
            >
              <Text
                className="px-3 py-1 text-xs rounded-md text-white"
                style={{ backgroundColor: colors.primary }}
              >
                Weekly
              </Text>
              <Text className="px-3 py-1 text-xs" style={{ color: colors.gray }}>
                Monthly
              </Text>
              <Text className="px-3 py-1 text-xs" style={{ color: colors.gray }}>
                Today
              </Text>
            </View>
          </View>

          {/* Line Chart */}
          <View className="items-center py-2">
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
          <View
            className="h-px my-4 opacity-20"
            style={{ backgroundColor: colors.border }}
          />

          {/* Pie Chart Header */}
          <Text
            className="ml-2 mb-3 text-sm font-poppinsSemiBold"
            style={{ color: colors.text }}
          >
            Sales by Category
          </Text>

          {/* Pie Chart */}
          <View className="flex-row items-center justify-between px-2">
            <PieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
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
                    className="mt-1 text-base font-poppinsSemiBold"
                    style={{ color: colors.primary }}
                  >
                    $12,345
                  </Text>
                </View>
              )}
              focusOnPress
              onPress={(item) => console.log("Selected:", item.text)}
            />

            {/* Legend */}
            <View className="flex-1 ml-4">
              {pieData.map((item, index) => (
                <View key={index} className="flex-row items-center mb-2">
                  <View
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <Text
                    className="text-xs font-poppinsRegular"
                    style={{ color: colors.text }}
                  >
                    {item.text} ({item.value}%)
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
    );
};

export default RevenueChart;