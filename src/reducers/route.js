import { fromJS } from 'immutable';
import {
  GO_BACK,
  ROUTES,
  START_QUIZ
} from '../constants/routes';

const initialState = fromJS({
  current: 'home',
  params: {}
});

// reducer
function route(state = initialState, action = {}) {
  switch (action.type) {

    case START_QUIZ:
      return state.merge({
        current: 'quiz'
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
  }
}

export function goBack() {
  return {
    type: GO_BACK,
    payload: {}
  }
}

export default route;
