import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ROUTES, HOME, QUIZ } from '../constants/routes';
import { goBack } from '../reducers/route';
import COLORS from '../utils/colors';
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';

import {
  Navigator,
  StatusBar,
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
    goBack: () => dispatch(goBack()),
  };
}

class MyNavigator extends Component {

  _renderHeader() {
    return (
      <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator) => {
              if (route.index === 0) {
                return null;
              }

              return (
                <TouchableOpacity
                  onPress={() => {
                    navigator.pop();
                    this.props.goBack();
                  }}
                >
                  <Text style={styles.left}>{'Back'}</Text>
                </TouchableOpacity>
              );
            },

            RightButton: () => {
              return null;
            },

            Title: (route) => {
              return (<Text style={styles.navTitle}>{route.title}</Text>);
            },
          }}
         style={styles.navbar}
      />
    );
  }

  _renderScene(route, navigator) {
    switch (route.key) {
      case HOME:
        return (<Home navigator={navigator} />);

      case QUIZ:
        return (<Quiz navigator={navigator} />);

      default:
        return (<Text>{'default route'}</Text>);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle={'light-content'}
        />
        <Navigator
            initialRoute={ROUTES[0]}
            initialRouteStack={ROUTES}
            navigationBar={this._renderHeader()}
            renderScene={this._renderScene}
            style={{ paddingTop: 65 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: COLORS.blue,
  },
  navTitle: {
    marginTop: 10,
    color: COLORS.white,
  },
  left: {
    color: COLORS.white,
    margin: 10,
  },
});

MyNavigator.PropTypes = {
  goBack: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavigator);
