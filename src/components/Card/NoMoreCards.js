import React, { Component } from 'react';
import { ROUTES } from '../../constants/routes';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class NoMoreCards extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { this.props.navigator.jumpTo(ROUTES[0]); }}>
          <View style={styles.button}>
            <Text style={styles.text}>{'Home'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.button}>
            <Text style={styles.text}>{'Scores'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 300,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: COLORS.blue,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
  },
});
