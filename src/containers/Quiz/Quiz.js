import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import SwipeCards from '../../components/SwipeCards/SwipeCards';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    startQuiz: () => dispatch(startQuiz()),
  };
}

// TODO get cards from state
const Cards = [
  {text: 'Tomato'},
  /*{text: 'Aubergine'},
  {text: 'Courgette'},
  {text: 'Blueberry'},
  {text: 'Umm...'},
  {text: 'orange'},
  */
];

class Quiz extends Component {

  render() {
    return (
      <SwipeCards
        cards={Cards}
        loop={false}
        renderCard={(cardData) => <Card {...cardData} />}
        showYup
        showNope
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        navigator={this.props.navigator}
      />
    );
  }

  handleYup() {
    console.log('yup');
  }

  handleNope() {
    console.log('nope');
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
