import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import { pingEpic } from './epics';
import pingpong from './data/pingpong';

const defaultState = {
pingpong};

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(
  rootReducer, defaultState, compose(
    applyMiddleware(epicMiddleware), (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

export default store;
