import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import NavBar from './components/03-organism/navbar';
import HomePage from './components/05-page/homepage';
import Portfolio from './components/05-page/portfolio';
import AboutUs from './components/05-page/about-us';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='h-100'>
        <NavBar/>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();
