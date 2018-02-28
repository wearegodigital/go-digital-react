import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './style/style.css';

import App from './app.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();
