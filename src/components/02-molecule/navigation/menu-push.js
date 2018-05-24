import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import MenuItem from '../../01-atom/navigation/menu-item.js';

var mobileStyles = {
   bmMenu: {
     backgroundImage: "url('./assets/img/menu/menu-reveal-shadow.png')",
     backgroundPosition: "left top",
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat'
   }, bmCrossButton: {
     position: 'fixed',
     width: '24px',
     height: '24px',
     right: '32px',
     top: '32px'
   }, bmCross: {
      background: '#B64F59',
      width: '4px',
      height: '24px'
   }, bmItemList: {
      height: 'calc(100%-96px)'
   }
 }

 var desktopStyles = {
    bmMenu: {
      backgroundImage: "url('./assets/img/menu/menu-reveal-shadow.png')",
      backgroundPosition: "left top",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }, bmCrossButton: {
      position: 'fixed',
      width: '24px',
      height: '24px',
      right: '32px',
      top: '48px'
    }, bmCross: {
       background: '#B64F59',
       width: '4px',
       height: '24px'
    }, bmItemList: {
       height: 'calc(100%-96px)'
    }
  }

class MenuPush extends Component {
  render () {
    return (
      <div>
        <MediaQuery query="(max-width: 959px)">
          <Menu
            right
            pageWrapId={ "page-wrap" }
            styles={ mobileStyles }
            className={ "menu-push" }
            outerContainerId={ "outer-container" }
            width={ '264px' }
            isOpen={false}>
            <MenuItem href="/" id="home" title="Home"/>
            <MenuItem href="/about-us" id="about-us" title="About Us"/>
            <MenuItem href="/services" id="services" title="Services"/>
            <MenuItem href="/our-partners" id="our-partners" title="Our Partners"/>
            <MenuItem href="/contact-us" id="contact-us" title="Contact Us"/>
          </Menu>
        </MediaQuery>
        <MediaQuery query="(min-width: 960px)">
          <Menu
            right
            pageWrapId={ "page-wrap" }
            styles={ desktopStyles }
            className={ "menu-push" }
            outerContainerId={ "outer-container" }
            width={ '264px' }
            isOpen={false}>
            <MenuItem href="/" id="home" title="Home"/>
            <MenuItem href="/about-us" id="about-us" title="About Us"/>
            <MenuItem href="/services" id="services" title="Services"/>
            <MenuItem href="/our-partners" id="our-partners" title="Our Partners"/>
            <MenuItem href="/contact-us" id="contact-us" title="Contact Us"/>

            <Link
              to="/privacy-policy"
              id="privacy-policy">
                Privacy Policy
             </Link>
          </Menu>
        </MediaQuery>
      </div>
    )
  }
}

export default MenuPush;
