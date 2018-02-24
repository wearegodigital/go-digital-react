import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import menuLine from '../../../assets/img/menu/menu-item-line.png'

const menuItemStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%'
}

const menuTextStyle = {
  textAlign: 'right'
}

const menuLineStyle = {
  width: '24px',
  height: 'auto',
  marginLeft: '8px'
}

class MenuItem extends Component {

render() {
  return (
    <div style={menuItemStyle} className="menu-item">
      <div style={menuTextStyle}>
        <Link
          to={this.props.href}
          id={this.props.id}>
            {this.props.title}
         </Link>
       </div>
       <img  src={menuLine} style={menuLineStyle} alt="-" />
    </div>
  );
}
}

export default MenuItem;
