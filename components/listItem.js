import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';

class ListItem extends Component {
  render() {
    textStyle = this.props.item.checked ? styles.checkedText : styles.text;

    return (
      <CheckBox
        style={styles.checkBox}
        isChecked={this.props.item.checked}
        checkedImage={<Image source={require('../assets/images/ic_custom_check_box.png')} style={styles.checkBoxImage} />}
        rightText={this.props.item.item}
        rightTextStyle={textStyle}
        onClick={() => this.props.onPress(this.props.item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  checkBox: {
    flex: 1,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },

  text: {
    fontSize: 20,
    color: '#000',
  },

  checkedText: {
    fontSize: 20,
    color: '#ccc',
  },

  checkBoxImage: {
    width: 24,
    height: 24,
  }
});

export { ListItem };
