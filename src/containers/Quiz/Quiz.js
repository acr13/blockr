import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    startQuiz: () => dispatch(startQuiz()),
  };
}

class Quiz extends Component {

  render() {
    return (
      <View style={styles.home}>

        <View style={styles.media}>
          <Text>{'Top'}</Text>
        </View>

        <View style={styles.buttons}>

          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>{'No'}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.text}>{'Yes'}</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  media: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    marginBottom: 100,
    borderWidth: 2,
    borderColor: '#000',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40,
    height: 40,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#FFF',
  },
});
