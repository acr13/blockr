import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from '../store/configureStore';
import MyNavigator from './Navigator';

const store = createStore();

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <MyNavigator />
      </Provider>
    );
  }
};

export default Root;
