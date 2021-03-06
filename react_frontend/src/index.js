import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { composeWithDevTools } from 'redux-devtools-extension'; // for testing in Chrome

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homieReducer from './reducers/homieReducer';

const store = createStore(homieReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

