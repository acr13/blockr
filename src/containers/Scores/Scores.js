import React, { Component } from 'react';
import { connect } from 'react-redux';
import COLORS from '../../utils/colors';

import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function mapStateToProps(state) {
  return {
    words: state.words.get('words'),
  };
}

function mapDispatchToProps() {
  return {};
}

class Scores extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1, r2),
    });

    this.state = { words: dataSource };
  }

  componentWillReceiveProps() {
    this.setState({
      words: this.state.words.cloneWithRows(words.toArray()),
    });
  }

  _renderRow(data) {
    return (
      <Text>{data.word}</Text>
    );
  }

  render() {
    const { words } = this.state;

    return (
      <View style={styles.main}>

        <ListView
          style={styles.listView}
          dataSource={words}
          renderRow={(data) => this._renderRow(data)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
