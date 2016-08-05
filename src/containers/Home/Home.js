import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startQuiz } from '../../reducers/words';
import { ROUTES } from '../../constants/routes';
import COLORS from '../../utils/colors';
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

class Home extends Component {

  render() {
    return (
      <View style={styles.home}>

        <View style={styles.logo}>
          <Text style={[styles.text, styles.blockr]}>{'Blockr'}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={() => {
                this.props.startQuiz();
                this.props.navigator.jumpTo(ROUTES[1]);
              }}
          >
            <View style={styles.button}>
              <Text style={styles.text}>{'Start'}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => {
                this.props.navigator.jumpTo(ROUTES[2]);
              }}
          >
            <View style={styles.button}>
              <Text style={styles.text}>{'Scores'}</Text>
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
)(Home);

const styles = StyleSheet.create({
  home: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 100,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    height: 40,
    backgroundColor: COLORS.blue,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
  },
  blockr: {
    color: COLORS.red,
  },
});
