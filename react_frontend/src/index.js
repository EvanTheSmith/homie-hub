import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// const store = createStore(homieHubReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

