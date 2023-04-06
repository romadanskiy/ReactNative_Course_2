import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconComponentProps {
  name: string;
  size?: number;
  color?: string;
  isOutline?: boolean;
}

export default function IconComponent({ name, size, color, isOutline }: IconComponentProps) {
  const iconName = isOutline ? name + '-outline' : name;

  return (
    <Icon name={iconName} size={size} color={color} />
  );
}