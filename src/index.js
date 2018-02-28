import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import MediaQuery from 'react-responsive';

import './style/style.css';

import reducers from './reducers';
import MobileNavBar from './components/02-molecule/navigation/mobile-navbar';
import DesktopNavBar from './components/02-molecule/navigation/desktop-navbar';
import MenuPush from './components/02-molecule/navigation/menu-push';
import HomePage from './components/05-page/homepage';
import AboutUs from './components/05-page/about-us';
import Services from './components/05-page/services';
import Portfolio from './components/05-page/portfolio';
import ContactUs from './components/05-page/contact-us';
import BackgroundAnimation from './components/01-atom/backgrounds/bg-animation';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
        <div id="outer-container">
          <MenuPush/>
          <main id="page-wrap">
            <BackgroundAnimation/>
            <MediaQuery query="(max-width: 959px)">
              <MobileNavBar/>
            </MediaQuery>
            <MediaQuery query="(min-width: 960px)">
              <DesktopNavBar/>
            </MediaQuery>
            <Switch>
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/services" component={Services} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </div>
      </HashRouter>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();
