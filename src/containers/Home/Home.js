import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startQuiz } from '../../reducers/route';
import { ROUTES } from '../../constants/routes';
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

        <View style={styles.button}>
          <TouchableOpacity
              onPress={() => {
                this.props.navigator.push(ROUTES[1]);
              }}
          >
            <View style={styles.start}>
              <Text style={styles.text}>{'Start'}</Text>
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
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 200,
  },
  button: {
    flex: 1,
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
    textAlign: 'center',
  },
  blockr: {
    color: 'red',
  },
});
