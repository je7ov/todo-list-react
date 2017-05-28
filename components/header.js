import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Header extends Component {
  headerStyle = (color) => {
    return ({
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingTop: Expo.Constants.statusBarHeight,
      height: 60 + Expo.Constants.statusBarHeight,
      width: '100%',
      shadowColor: '#fff',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    });
  };

  render() {
    return (
      <View style={this.headerStyle(this.props.color)}>
      <Image
        source={require('../assets/icons/app.png')}
        style={styles.icon}
      />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  icon: {
    width: 32,
    height: 32,
    marginLeft: 16,
    marginRight: 16,
  }
});

export { Header };
