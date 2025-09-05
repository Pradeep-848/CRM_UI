import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '../context/ThemeContext';

const DarkModeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <TouchableOpacity
            onPress={toggleTheme}
            className="p-2 rounded-full justify-center items-center"
            activeOpacity={0.7}
        >
            <Icon
                name={darkMode ? 'sun' : 'moon'}
                size={24}
                color={darkMode ? '#fbbf24' : '#1e293b'}
            />
        </TouchableOpacity>
    );
};

export default DarkModeToggle;