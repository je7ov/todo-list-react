import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ListItem, Separator, TextButton } from './';

class List extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={styles.list}
          data={this.props.data}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <ListItem item={item} onPress={this.props.onItemPress}/>}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
  }
});

export { List };
