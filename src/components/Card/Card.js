import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Card extends Component {

  render() {
    return (
      <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
});
