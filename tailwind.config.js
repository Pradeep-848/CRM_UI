/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppinsBlack: ["Poppins-Black"],
        poppinsBold: ["Poppins-Bold"],
        poppinsSemiBold: ["Poppins-SemiBold"],
        poppinsRegular: ["Poppins-Regular"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsThin: ["Poppins-Thin"],
      },
      colors: {
        primary: "#000000",
        secondary: "#6366f1",
        background: "#f8fafc",
        white: "#ffffff",
        gray: "#64748b",
        lightGray: "#e2e8f0",
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        blue: "#3b82f6",
        pink: "#ec4899",
        purple: "#8b5cf6",
      },
    },
  },
  plugins: [],
};
