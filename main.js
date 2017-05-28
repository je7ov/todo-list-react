import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View } from 'react-native';
import { Header, Input, List, ListHeader, Card, TextButton } from './components';

class App extends Component {
  state = {
    inputValue: '',
    data: [],
    hasChecked: true,
  };

  // Generate pseudo-random keys. Good enough, I guess
  generateKey() {
    return Math.floor(Math.random() * 100000);
  }

  checkPressed(data) {
    hasChecked = false;
    data.map((obj) => {
      if(obj.checked === true) hasChecked = true;
    });
    return hasChecked;
  }

  //****************************************************************************
  // ON PRESS METHODS
  //****************************************************************************

  // onPress method for add button. Adds the new item from input to data array
  onAddPress() {
    if(this.state.inputValue !== '') {
      data = this.state.data === null ? [] : this.state.data.slice(0);
      key = this.generateKey();
      item = this.state.inputValue;
      data.push({ key, item, checked: false });
      this.setState({ data, inputValue: '' });
      this.setData(data);
    }
  }

  // onPress method for list item. Finds the item in the data array
  // and changes it's checked state
  onItemPress(item) {
    data = this.state.data.slice(0);  // get copy of data array
    let index;
    data.map((obj, i) => {            // map through and find index of item
      if (obj.key === item.key) {
        index = i;
        return true
      }
    });
    data[index] = { key: item.key, item: item.item, checked: !item.checked };
    hasChecked = this.checkPressed(data);
    this.setState({ data, hasChecked });      // update data array in state
    this.setData(data);           // update data array in storage
  }

  // onPress method for clear all or clear checked button. Sets data array to empty
  onClearPress() {
    if(this.state.hasChecked) {
      data = this.state.data.slice(0);      // get copy of array
      data = data.filter((obj) => {         // filter out all checked items
        return !obj.checked;
      })
      this.setState({ data, hasChecked: false });
      this.setData(data);
    } else {
      this.setState({ data: [], hasChecked: false });
      this.setData([]);
    }
  }

  //****************************************************************************
  // LIFE CYCLE METHODS
  //****************************************************************************

  // Retreive all data on app startup
  componentWillMount() {
    AsyncStorage.getItem('data')
      .then((rawData) => {
        data = JSON.parse(rawData);
        hasChecked = false;
        if (data !== null) hasChecked = this.checkPressed(data);
        this.setState({ data, hasChecked });
      });
  }

  // Save data array on device
  setData(data) {
    rawData = JSON.stringify(data);
    AsyncStorage.setItem('data', rawData);
  }

  //****************************************************************************
  // RENDER METHODS
  //****************************************************************************

  // Renders the list of todo items, as well as Clear All button and
  // empty list placeholder text
  renderList() {
    clearText = this.state.hasChecked ? 'CLEAR CHECKED' : 'CLEAR ALL';
    return (
      this.state.data === null || this.state.data.length === 0 ?
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>Everything is done!</Text>
        </View> :
        <View style={{ flex: 1 }}>
          <List data={this.state.data} onItemPress={this.onItemPress.bind(this)} />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TextButton
              text={clearText}
              onPress={this.onClearPress.bind(this)}
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
  },
});

Expo.registerRootComponent(App);
