// src/context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const themeColors = {
        darkMode,
        colors: darkMode ? {
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
        },
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeColors}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);