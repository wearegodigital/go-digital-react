import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { reveal as Menu } from 'react-burger-menu'

import MobileNavBar from './components/02-molecule/navigation/mobile-navbar'
import DesktopNavBar from './components/02-molecule/navigation/desktop-navbar'

var navBarStyle = {
  backgroundColor: "#B64F59",
  borderRadius: "0 0 50px 50px"
}

var navStyle = {
  height: '150px'
}

class NavBar extends Component {
  render() {
    return(
      <div>
        <nav className="w-100" style={navStyle}>
          <div className="w6 fl">
            <Link className="link dim" to="/">
              <img src={Logo} className="w-70 pa3 shadow-4 ml3" style={navBarStyle} alt="Site Name"/>
            </Link>
          </div>
          <MenuNavBar/>
        </nav>
      </div>
    );
  }
}

export default NavBar;
