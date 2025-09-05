// src/screens/Orders.js
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../context/ThemeContext";
import { Dimensions } from "react-native";

const Orders = () => {
  const { colors } = useTheme();
  const height = Dimensions.get("window").height;

  // Sample orders data
  const orders = [
    {
      id: "#ORD-1001",
      date: "Today, 10:45 AM",
      status: "Delivered",
      statusColor: colors.success,
      items: 3,
      total: "142.50",
      customer: "John Smith",
    },
    {
      id: "#ORD-1002",
      date: "Yesterday, 2:30 PM",
      status: "Shipped",
      statusColor: colors.blue,
      items: 5,
      total: "245.75",
      customer: "Sarah Johnson",
    },
    {
      id: "#ORD-1003",
      date: "Oct 12, 9:15 AM",
      status: "Processing",
      statusColor: colors.warning,
      items: 2,
      total: "89.99",
      customer: "Michael Brown",
    },
    {
      id: "#ORD-1004",
      date: "Oct 10, 4:20 PM",
      status: "Cancelled",
      statusColor: colors.error,
      items: 1,
      total: "45.00",
      customer: "Emily Davis",
    },
  ];

  // Tabs
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Processing", "Shipped", "Delivered", "Cancelled"];

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-5 py-4 border-b"
        style={{ backgroundColor: colors.card, borderBottomColor: colors.border }}
      >
        <Text
          className="text-xl font-poppinsSemiBold"
          style={{ color: colors.text }}
        >
          Orders
        </Text>
        <TouchableOpacity>
          <Icon name="search" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-4 py-3 mb-2"
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
        contentContainerClassName="px-4 py-3"
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full mr-2 border ${
              activeTab === tab ? "border-0" : "border"
            }`}
            style={{
              backgroundColor: activeTab === tab ? colors.primary : "transparent",
              borderColor: colors.border,
            }}
          >
            <Text
              className={`text-sm ${
                activeTab === tab ? "font-poppinsSemiBold" : "font-poppinsMedium"
              }`}
              style={{ color: activeTab === tab ? colors.white : colors.text }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Orders List */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="rounded-xl p-2 mb-3 ml-2.5 w-[95%] shadow"
            style={{ backgroundColor: colors.card }}
            onPress={() => console.log("View order", item.id)}
          >
            {/* Header */}
            <View className="flex-row justify-between items-center mb-2">
              <Text
                className="text-base font-poppinsSemiBold"
                style={{ color: colors.primary }}
              >
                {item.id}
              </Text>

              {/* Date */}
              <Text
                className="text-[10px] font-poppinsRegular"
                style={{ color: colors.success }}
              >
                {item.date}
              </Text>

              <View
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: item.statusColor }}
              >
                <Text className="text-xs font-poppinsMedium text-white">
                  {item.status}
                </Text>
              </View>
            </View>

            {/* Details */}
            <View className="flex-row justify-between mb-4">
              <View className="flex-row items-center">
                <Icon name="user" size={14} color={colors.gray} />
                <Text
                  className="ml-1 text-xs font-poppinsRegular"
                  style={{ color: colors.text }}
                >
                  {item.customer}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Icon name="box" size={14} color={colors.gray} />
                <Text
                  className="ml-1 text-xs font-poppinsRegular"
                  style={{ color: colors.text }}
                >
                  {item.items} items
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-sm" style={{ color: colors.gray }}>₹</Text>
                <Text
                  className="ml-1 text-xs font-poppinsRegular"
                  style={{ color: colors.text }}
                >
                  {item.total}
                </Text>
              </View>
            </View>

            {/* Actions */}
            <View className="flex-row justify-between">
              <TouchableOpacity className="px-4 py-2 rounded-lg border">
                <Text
                  className="text-sm font-poppinsMedium"
                  style={{ color: colors.primary }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="px-3 py-2 rounded-lg"
                style={{ backgroundColor: colors.primary }}
              >
                <Text className="text-sm font-poppinsMedium text-white">
                  Track
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

// Reusable StatCard
const StatCard = ({ title, value, change }) => {
  const { colors } = useTheme();
  return (
    <View
      className="w-36 rounded-xl p-3 mr-3 shadow"
      style={{ backgroundColor: colors.card }}
    >
      <Text
        className="text-xs font-poppinsRegular mb-1"
        style={{ color: colors.gray }}
      >
        {title}
      </Text>
      <Text
        className="text-lg font-poppinsSemiBold mb-2"
        style={{ color: colors.text }}
      >
        {value}
      </Text>
      <Text
        className="text-xs font-poppinsRegular"
        style={{
          color: change.includes("+") ? colors.success : colors.error,
        }}
      >
        {change}
      </Text>
    </View>
  );
};

export default Orders;
