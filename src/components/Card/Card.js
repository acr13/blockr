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
        <Text style={styles.word}>{this.props.card.get('word')}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderColor: COLORS.blue,
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    width: 200,
    height: 200,
  },
  word: {
    color: COLORS.white,
  },
});
