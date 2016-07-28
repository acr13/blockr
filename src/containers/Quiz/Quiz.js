import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import SwipeCards from '../../components/SwipeCards/SwipeCards';
import { addYes, addNo } from '../../reducers/words';

function mapStateToProps(state) {
  return {
    quizWords: state.words.get('quizWords'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addYes: (card) => dispatch(addYes(card)),
    addNo: (card) => dispatch(addNo(card)),
  };
}

class Quiz extends Component {

  render() {
    return (
      <SwipeCards
        cards={this.props.quizWords}
        loop={false}
        renderCard={(cardData) => <Card card={cardData} />}
        showYup
        showNope
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        navigator={this.props.navigator}
      />
    );
  }

  handleYup(card) {
    addYes(card);
  }

  handleNope(card) {
    addNo(card);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
