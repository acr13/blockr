import { fromJS } from 'immutable';
import {
  GO_BACK,
  START_QUIZ,
} from '../constants/routes';

const initialState = fromJS({
  current: 'home',
  params: {},
});

// reducer
function route(state = initialState, action = {}) {
  switch (action.type) {

    case START_QUIZ:
      return state.merge({
        current: 'quiz',
      });

    default:
      return state;
  }
}

// actions
export function goBack() {
  return {
    type: GO_BACK,
    payload: {},
  };
}

export default route;
