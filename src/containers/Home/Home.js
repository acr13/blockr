import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startQuiz } from '../../reducers/route';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    startQuiz: () => dispatch(startQuiz())
  };
}

class Home extends Component {

  render() {
    const { startQuiz } = this.props;

    return (
      <View style={styles.home}>
        <Text>{'ASDSAKDBSAKDSABDKA'}</Text>

        <TouchableOpacity
            onPress={() => startQuiz() }
        >
          <View style={styles.start}>
            <Text style={styles.text}>{'Start'}</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  home: {
    flex: 1
  },
  start: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'red',
  },
  text: {
    flex: 1,
    textAlign: 'center'
  }
});