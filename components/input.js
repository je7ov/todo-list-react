import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';


class Input extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { placeholder, value, onChangeText, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize='sentences'
          maxLength={140}
          onSubmitEditing={onPress}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Image style={styles.addImage} source={require('../assets/images/add.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 8,
    paddingTop: 16,
    fontSize: 18,
    lineHeight: 23,
  },

  button: {
    width: 24,
    height: 24,
    marginLeft: 12,
  },

  addImage: {
    width: 24,
    height: 24,
  },

  container: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

export { Input };
