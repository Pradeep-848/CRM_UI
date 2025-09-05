import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../context/ThemeContext';

import Dashboard from '../screens/DashBoard';
import Analytics from '../screens/Analytics';
import Orders from '../screens/Orders';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const { colors } = useTheme();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Analytics':
                                iconName = 'bar-chart-2';
                                break;
                            case 'Orders':
                                iconName = 'shopping-cart';
                                break;
                            case 'Settings':
                                iconName = 'settings';
                                break;
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.gray,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: colors.card,
                        borderTopColor: colors.border,
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'Poppins-Regular',
                        fontSize: 10
                    },
                    headerTitleStyle: {
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 18,
                        color: colors.text,
                    },
                })}
            >
                <Tab.Screen name="Home" component={Dashboard} />
                <Tab.Screen name="Analytics" component={Analytics} />
                <Tab.Screen name="Orders" component={Orders} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomNavigation;