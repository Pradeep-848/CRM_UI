/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,html,js,jsx}",
    // "./App.jsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'poppins-black': ['Poppins-Black'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-regular': ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-thin': ['Poppins-Thin']
      },
      colors: {
        primary: '#000000',
        secondary: '#6366f1',
        background: '#f8fafc',
        white: '#ffffff',
        gray: '#64748b',
        lightGray: '#e2e8f0',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        blue: '#3b82f6',
        pink: '#ec4899',
        purple: '#8b5cf6'
      }
    },
  },
  plugins: [],
}