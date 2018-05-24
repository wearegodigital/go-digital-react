import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import './style/style.css';

import BackgroundAnimation from './components/01-atom/backgrounds/bg-animation';

import MobileNavBar from './components/02-molecule/navigation/mobile-navbar';
import DesktopNavBar from './components/02-molecule/navigation/desktop-navbar';
import MenuPush from './components/02-molecule/navigation/menu-push';

import SVGLoader from './components/04-template/svg-preloader.js';

import HomePage from './components/05-page/homepage';
import AboutUs from './components/05-page/about-us';
import Team from './components/05-page/team';
import Services from './components/05-page/services';
import OurPartners from './components/05-page/our-partners';
import ContactUs from './components/05-page/contact-us';
import PrivacyPolicy from './components/05-page/privacy-policy';


class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 4000); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block
      return <SVGLoader/>; // render null when app is not ready
    }

    return (
      <HashRouter>
        <div id="outer-container">
          <MenuPush/>
          <main id="page-wrap">
            <div id="background-overlay">
              <BackgroundAnimation/>
              <div id="page-content">
                <MediaQuery query="(max-width: 959px)">
                  <MobileNavBar/>
                </MediaQuery>
                <MediaQuery query="(min-width: 960px)">
                  <DesktopNavBar/>
                </MediaQuery>
                <Route render={({location}) => (
                  <ReactCSSTransitionReplace
                    transitionName="page"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <div key={location.pathname}>
                      <Switch location={location}>
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/our-partners" component={OurPartners} />
                        <Route path="/services" component={Services} />
                        <Route path="/team" component={Team} />
                        <Route path="/about-us" component={AboutUs} />
                        <Route path="/" component={HomePage} />
                      </Switch>
                    </div>
                  </ReactCSSTransitionReplace>
                )}/>
              </div>
            </div>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
