import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Card extends Component {

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.word}>{this.props.text}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.teal,
    borderColor: COLORS.teal,
    borderWidth: 2,
    borderRadius: 5,
    width: 200,
    height: 200,
  },
  word: {
    color: COLORS.white,
  },
});
