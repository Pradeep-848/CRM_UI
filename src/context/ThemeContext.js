// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemColorScheme = useColorScheme(); // Get system theme
    const [themeMode, setThemeMode] = useState('system'); // 'light', 'dark', 'system'

    // Calculate the actual dark mode state based on theme mode and system preference
    const isDarkMode = useMemo(() => {
        if (themeMode === 'system') {
            return systemColorScheme === 'dark';
        }
        return themeMode === 'dark';
    }, [themeMode, systemColorScheme]);

    // Theme toggle function with three states
    const toggleTheme = () => {
        setThemeMode(prevMode => {
            switch (prevMode) {
                case 'light': return 'dark';
                case 'dark': return 'system';
                case 'system': return 'light';
                default: return 'system';
            }
        });
    };

    // Set specific theme mode (useful for settings)
    const setTheme = (mode) => {
        if (['light', 'dark', 'system'].includes(mode)) {
            setThemeMode(mode);
        }
    };

    // Memoize the colors object to prevent unnecessary re-renders
    const colors = useMemo(() => {
        return isDarkMode ? {
            primary: '#6366f1', // purple for dark mode
            background: '#0f172a', // dark blue
            text: '#ffffff',
            card: '#1e293b',
            border: '#334155',
            white: '#ffffff',
            gray: '#94a3b8',
            lightGray: '#334155',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            blue: '#3b82f6',
            pink: '#ec4899',
            purple: '#8b5cf6',
        } : {
            primary: '#000000',
            background: '#f8fafc',
            text: '#000000',
            card: '#ffffff',
            border: '#e2e8f0',
            white: '#ffffff',
            gray: '#64748b',
            lightGray: '#e2e8f0',
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            blue: '#3b82f6',
            pink: '#ec4899',
            purple: '#8b5cf6',
        };
    }, [isDarkMode]);

    // Memoize the entire context value to prevent unnecessary re-renders
    const themeValue = useMemo(() => ({
        darkMode: isDarkMode, // For backward compatibility
        themeMode, // 'light', 'dark', or 'system'
        systemColorScheme, // The actual system preference
        colors,
        toggleTheme,
        setTheme,
    }), [isDarkMode, themeMode, systemColorScheme, colors]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};