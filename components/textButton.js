import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const TextButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#aaa',
    padding: 8,
    alignSelf: 'center',
  }
});

export { TextButton };
