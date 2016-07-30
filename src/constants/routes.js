export const HOME = 'home';
export const QUIZ = 'quiz';
export const SCORES = 'scores';

// Used for the <Navigator> component
// internally we will use these keys to keep track of our own routing
export const ROUTES = [
  { title: 'Blockr', index: 0, key: HOME },
  { title: 'Quiz', index: 1, key: QUIZ },
  { title: 'Results', index: 2, key: SCORES },
];

export const START_QUIZ = '@@ROUTE/START_QUIZ';
export const GO_BACK = '@@ROUTE/GO_BACK';
export const ADD_YES = '@@ROUTE/ADD_YES';
export const ADD_NO = '@@ROUTE/ADD_NO';
