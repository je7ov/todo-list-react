import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.separator} />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginLeft: 16,
    marginRight: 16,

    backgroundColor: '#ddd',
    height: 2,
  }
});

export { Separator };
