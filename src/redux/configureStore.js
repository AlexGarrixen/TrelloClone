import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
import env from '../../config/env';

const configureStore = (preloadState = {}) => {
  let middlewwares = [thunk];
  let composeEnhancers;
  const middlewaresEnhancer = applyMiddleware(...middlewwares);

  if (env.isDev) composeEnhancers = composeWithDevTools(middlewaresEnhancer);
  else composeEnhancers = compose(middlewaresEnhancer);

  const store = createStore(reducer, preloadState, composeEnhancers);

  return store;
};

export default configureStore;
