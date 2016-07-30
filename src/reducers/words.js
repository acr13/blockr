import { fromJS } from 'immutable';
import { ADD_YES, ADD_NO, START_QUIZ } from '../constants/routes';
import WORDS from '../data/words';

const initialState = fromJS({
  quizWords: [],
  words: WORDS,
});

const NUM_WORDS = 30;

function getQuizWords(state) {
  const length = state.get('words').size;
  const randomWords = [];

  // get 30 random words
  for (let i = 0; i < NUM_WORDS; i++) {
    const randomIdx = Math.floor(Math.random() * (length - 1));
    randomWords.push(state.get('words').get(randomIdx));
  }

  return randomWords;
}

// reducer
function route(state = initialState, action = {}) {
  switch (action.type) {

    case START_QUIZ:
      return state.merge({
        quizWords: getQuizWords(state),
      });

    case ADD_YES:
      return state.updateIn(['words'], (words) => {
        return words.map((word) => {
          if (word.get('word') === action.payload.card.get('word')) {
            return word.update('yes', val => val + 1);
          }

          return word;
        });
      });

    case ADD_NO:
      return state.updateIn(['words'], (words) => {
        return words.map((word) => {
          if (word.get('word') === action.payload.card.get('word')) {
            return word.update('no', val => val + 1);
          }

          return word;
        });
      });

    default:
      return state;
  }
}

// actions
export function startQuiz() {
  return {
    type: START_QUIZ,
    payload: {},
  };
}

export function addYes(card) {
  return {
    type: ADD_YES,
    payload: {
      card: card,
    },
  };
}

export function addNo(card) {
  return {
    type: ADD_NO,
    payload: {
      card: card,
    },
  };
}

export default route;
