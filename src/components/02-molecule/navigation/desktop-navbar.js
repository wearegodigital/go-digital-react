import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Colours from "../../00-style/colours.js";
import Borders from "../../00-style/borders.js";

import Logo from '../../../assets/logo/Logo - Inline.svg';

var navStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '128px',
  width: '100%',
  border: 'solid ' + Colours.primary,
  borderWidth: Borders.thinLeft
};

var navLogoStyle = {
  margin: '16px'
};

var imgStyle = {
  height: '96px',
  width: 'auto'
};

class DesktopNavBar extends Component {

  render() {
    return(
      <div className="navmenu" style={navStyle}>
        <div className="logo-container" style={navLogoStyle}>
          <Link to="/">
            <img src={Logo} style={imgStyle} alt="Site Name"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default DesktopNavBar;
