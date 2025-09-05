import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";

const StatCard = ({
  title,
  value,
  subtitle,
  color,
  progress,
  isWhiteCard = false,
}) => {
  const { colors } = useTheme();
  
  // Memoize all style calculations to prevent re-computation on every render
  const cardStyles = useMemo(() => {
    const cardColor = color || colors.primary;
    const textColor = isWhiteCard ? colors.text : colors.white;
    const subtitleColor = isWhiteCard ? colors.gray : colors.white;
    const progressBgColor = isWhiteCard ? colors.lightGray : 'rgba(255, 255, 255, 0.2)';
    const progressFillColor = isWhiteCard ? colors.primary : colors.white;
    
    return {
      container: {
        backgroundColor: cardColor,
        borderRadius: 8,
        margin: 8,
        padding: 12,
        flex: 1,
        minHeight: 80,
      },
      valueText: {
        color: textColor,
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22,
        marginBottom: 2,
      },
      titleText: {
        color: textColor,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14,
        marginBottom: 2,
      },
      subtitleText: {
        color: subtitleColor,
        fontSize: 8,
        fontWeight: '300',
        lineHeight: 10,
        opacity: 1,
        marginTop: 2,
      },
      progressContainer: {
        height: 6,
        backgroundColor: progressBgColor,
        borderRadius: 3,
        overflow: 'hidden',
        marginTop: 8,
      },
      progressFill: {
        height: '100%',
        backgroundColor: progressFillColor,
        borderRadius: 3,
        width: `${Math.max(0, Math.min(100, progress || 0))}%`,
      },
    };
  }, [colors, color, isWhiteCard, progress]);

  return (
    <View style={cardStyles.container}>
      {/* Value */}
      <Text style={cardStyles.valueText}>
        {value}
      </Text>

      {/* Title */}
      <Text style={cardStyles.titleText}>
        {title}
      </Text>

      {/* Subtitle */}
      {subtitle && (
        <Text style={cardStyles.subtitleText}>
          {subtitle}
        </Text>
      )}

      {/* Progress Bar */}
      {(progress !== undefined && progress !== null) && (
        <View style={cardStyles.progressContainer}>
          <View style={cardStyles.progressFill} />
        </View>
      )}
    </View>
  );
};

export default StatCard;