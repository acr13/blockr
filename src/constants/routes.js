// Used for the <Navigator> component
// internally we will use these keys to keep track of our own routing
export const ROUTES = [
  { title: 'Blockr', index: 0, key: 'home' },
  { title: 'Quiz', index: 1, key: 'quiz' }
];

export const START_QUIZ = '@@ROUTE/START_QUIZ';
export const GO_BACK = '@@ROUTE/GO_BACK';