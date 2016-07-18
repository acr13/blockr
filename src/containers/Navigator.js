import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ROUTES } from '../constants/routes';
import { goBack } from '../reducers/route';
import Home from './Home/Home';

import {
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

function mapStateToProps (state) {
  return {
    currentRoute: state.route.get('current')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goBack: () => dispatch(goBack())
  };
}


class MyNavigator extends Component {

  _renderHeader() {

    return (
      <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
              console.log(route, index, navState);
              return (
                <TouchableHighlight
                    onPress={() => this.props.goBack()}
                >
                  <Text>{'Back'}</Text>
                </TouchableHighlight>
              );
            },

            RightButton: (route, navigator, index, navState) => {
              return null;
            },

            Title: (route, navigator, index, navState) => {
              return (<Text>{route.title}</Text>);
            },
         }}
         style={{backgroundColor: 'gray'}}
      />
    );
  }

  _renderScene = (props) => {
    const currentRoute = this.props.currentRoute;

    switch (currentRoute) {
      case 'home':
        return (<Home />);

      case 'quiz':
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

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavigator);
