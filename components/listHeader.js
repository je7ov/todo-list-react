import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListHeader = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ text }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',

  },

  text: {
    fontSize: 26,
  }
});



export { ListHeader };
