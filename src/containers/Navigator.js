import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ROUTES, HOME, QUIZ } from '../constants/routes';
import { goBack } from '../reducers/route';
import Home from './Home/Home';

import {
  Navigator,
  TouchableHighlight,
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
              return (
                <TouchableHighlight onPress={() => {
                  navigator.pop();
                  this.props.goBack();
                }}
                >
                  <Text>{'Back'}</Text>
                </TouchableHighlight>
              );
            },

            RightButton: () => {
              return null;
            },

            Title: (route) => {
              return (<Text>{route.title}</Text>);
            },
          }}
         style={{backgroundColor: 'gray'}}
      />
    );
  }

  _renderScene(route, navigator) {
    switch (route.key) {
      case HOME:
        return (<Home navigator={navigator} />);

      case QUIZ:
        return (<Text>{'Quiz'}</Text>);

      default:
        return (<Text>{'default route'}</Text>);
    }
  }

  render() {
    return (
        <Navigator
            initialRoute={ROUTES[0]}
            initialRouteStack={ROUTES}
            navigationBar={this._renderHeader()}
            renderScene={this._renderScene}
            style={{ paddingTop: 65 }}
        />
    );
  }
}

MyNavigator.PropTypes = {
  goBack: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavigator);
