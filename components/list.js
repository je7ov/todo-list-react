import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ListItem, Separator } from './';

class List extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.data}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => <ListItem item={item} onPress={this.props.onItemPress}/>}
        keyExtractor={item => item.key}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  }
});

export { List };
