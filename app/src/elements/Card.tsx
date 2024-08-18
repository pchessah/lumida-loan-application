import React from 'react';
import { View } from 'react-native';
import { CardProps } from '../interfaces/Card';
import styles from '../styles/CardStyles';

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

export default Card;
