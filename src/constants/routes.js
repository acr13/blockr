export const HOME = 'home';
export const QUIZ = 'quiz';
export const TABLE = 'table';

// Used for the <Navigator> component
// internally we will use these keys to keep track of our own routing
export const ROUTES = [
  { title: 'Blockr', index: 0, key: HOME },
  { title: 'Quiz', index: 1, key: QUIZ },
  { title: 'Results', index: 2, key: TABLE },
];

export const START_QUIZ = '@@ROUTE/START_QUIZ';
export const GO_BACK = '@@ROUTE/GO_BACK';
