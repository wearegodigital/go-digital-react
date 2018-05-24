import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from 'react-router-dom';

import Colours from "../../00-style/colours";
import Breakpoints from "../../00-style/breakpoints";

class CookiePopup extends Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={Breakpoints.mobile + 1}>
          <CookieConsent
              location="bottom"
              buttonText="I Understand"
              cookieName="consentCookie"
              style={{ backgroundColor: Colours.primary, display: 'flex', flexFlow: 'nowrap row',justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}
              buttonStyle={{ backgroundColor: Colours.secondary, fontSize: "13px", color: "#fff" }}
          >
              <p style={{maxWidth: 'calc(100vw - 150px)',}}>We use cookies to give you the best online experience. By continuing to use our website, you are agreeing to our use of cookies. <Link to="/privacy-policy" id="privacy-policy" style={{ color: Colours.secondary}}>Privacy Policy</Link></p>
          </CookieConsent>
        </MediaQuery>
        <MediaQuery maxWidth={Breakpoints.mobile}>
          <CookieConsent
              location="bottom"
              buttonText="I Understand"
              cookieName="consentCookie"
              style={{ backgroundColor: Colours.primary, display: 'flex', flexFlow: 'nowrap column',justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', width: 'calc(100vw - 30px)'}}
              buttonStyle={{ backgroundColor: Colours.secondary, fontSize: "13px", color: "#fff", position: "relative", right: "0px"}}
          >
              <p style={{maxWidth: 'calc(100vw - 30px)'}}>We use cookies to give you the best online experience. By continuing to use our website, you are agreeing to our use of cookies. <Link to="/privacy-policy" id="privacy-policy" style={{ color: Colours.secondary}}>Privacy Policy</Link></p>
          </CookieConsent>
        </MediaQuery>
      </div>
    )
  }
}

export default CookiePopup;
