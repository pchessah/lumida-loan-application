import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '../interfaces/Button';
import styles from '../styles/ButtonStyles';

const Button: React.FC<ButtonProps> = ({ title, onPress, backgroundColor = '#30c2e3', textColor = '#ffffff', style, textStyle, outlined = false }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        outlined ? styles.outlinedButton : { backgroundColor }, 
        style
      ]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: outlined ? backgroundColor : textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
