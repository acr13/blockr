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
        handleYup={(card) => this.handleYup(card)}
        handleNope={(card) => this.handleNope(card)}
        navigator={this.props.navigator}
      />
    );
  }

  handleYup(card) {
    this.props.addYes(card);
  }

  handleNope(card) {
    this.props.addNo(card);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
