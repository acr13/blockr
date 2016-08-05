import React, { Component } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import COLORS from '../../utils/colors';

import {
  ListView,
  ScrollView,
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

    this.state = { dataSource: dataSource.cloneWithRows(['row 1', 'row 2']) };
  }

  _renderRow(data) {
    console.log(data);
    return (
      <Text style={styles.word}>{data}</Text>
    );
  }

  render() {
    // const { words } = this.state;
    // const propwords = this.props.propwords;

    // console.log(propwords);
    // console.log('render');
    // console.log(this.state.dataSource);

    const rows = this.props.words.map((word) => {
      return (
        <View style={styles.row} key={word.get('word')}>
          <Text style={{flex: 1}}>{word.get('word')}</Text>
          <Text style={{flex: 1}}>{word.get('type')}</Text>
          <Text style={{flex: 1}}>{word.get('yes')}</Text>
          <Text style={{flex: 1}}>{word.get('no')}</Text>
        </View>
      );
    });

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.row} key={'header'}>
            <Text style={{flex: 1}}>{'Word'}</Text>
            <Text style={{flex: 1}}>{'Type'}</Text>
            <Text style={{flex: 1}}>{'Yes'}</Text>
            <Text style={{flex: 1}}>{'No'}</Text>
          </View>
          {rows}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.blue,
  },
  row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.blue,
  },
  word: {
    color: COLORS.white,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
