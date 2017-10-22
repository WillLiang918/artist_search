import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import artistSearchApp from './reducers/index.js';
import AppContainer from './containers/AppContainer.jsx';

const el = document.getElementById('app');
const store = createStore(artistSearchApp, applyMiddleware(thunkMiddleware, createLogger()));

ReactDOM.render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), el);
