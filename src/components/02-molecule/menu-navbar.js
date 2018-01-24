import '../../style/tachyons.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuNavBar extends Component {

  renderMenu(title,href,active=0){
    const buttonStyle = {
      borderBottom: '3px solid #B64F59',
      color: '#B64F59',
      display: 'inline-block',
      textDecoration: 'none'
    }

    const activeStyle = {
      borderStyle: '0 0 solid 0',
      borderWidth: '3px',
      borderColor: '#ffffff',
      color: '#ffffff',
      display: 'inline-block'
    }

    /**if(active=1){
      return(
        <li className = "w-10 fr pa3" style={activeStyle}>
          <Link to={href}>
              {title}
          </Link>
        </li>
      );
    }**/

    return(
      <li className = "w-20 fr pa3">
        <Link to={href} style={buttonStyle} className = "pa3 f5 avenir tc">
            {title}
        </Link>
      </li>
    );
  }

  render() {
    const menuStyle = {
        listStyleType: 'none',
        overflow: 'hidden'
    };

    return(
      <div>
        <ul className = "w-75 fr" style={menuStyle}>
          {this.renderMenu('Portfolio','/portfolio',0)}
          {this.renderMenu('About Us','/about-us',1)}
        </ul>
      </div>
    );
  }
}

export default MenuNavBar;
