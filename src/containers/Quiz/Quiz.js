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

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
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
