import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Input, List, ListHeader, Card, TextButton } from './components';

class App extends Component {
  state = {
    inputValue: '',
    data: [],
    checked: 0,
  };

  onAddPress() {
    if(this.state.inputValue !== '') {
      var data = this.state.data.slice(0);
      var key = data.length + 1;
      var item = '' + this.state.inputValue;
      data.push({ key, item });
      this.setState({ data, inputValue: '' });
    }
  }

  checkedCount(add) {
    if(add) {
      this.setState({ checked: this.state.checked + 1});
    } else {
      this.setState({ checked: this.state.checked - 1});
    }
  }

  onClearAllPress() {
    this.setState({ data: [] });
  }

  renderList() {
    return (
      this.state.data.length === 0 ?
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>Everything is done!</Text>
        </View> :
        <View style={{ flex: 1 }}>
          <List data={this.state.data} />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TextButton
              text='CLEAR ALL'
              onPress={this.onClearAllPress.bind(this)}
            />
          </View>
        </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text='Do Stuff' color='#6666ff' />
        <Input
          value={this.state.inputValue}
          placeholder='What should we do today, boss?'
          onChangeText={ inputValue => this.setState({ inputValue })}
          onPress={this.onAddPress.bind(this)}
        />
        <Card>
          <ListHeader text='ToDo' />
          {this.renderList()}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  placeholderText: {
    fontSize: 18,
    color: '#ddd',
  },

  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

Expo.registerRootComponent(App);
