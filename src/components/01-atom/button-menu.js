import '../../style/tachyons.min.css';
import React, { Component } from 'react';


  render() {
    const buttonStyle = {
      borderStyle: '0 0 solid 0',
      borderWidth: '3px',
      borderColor: '#B64F59',
      color: '#B64F59'
    }

    const activeStyle = {
      borderStyle: '0 0 solid 0',
      borderWidth: '3px',
      borderColor: '#ffffff',
      color: '#ffffff'
    }

    return(
      <div>
        <li className = "w-10 fr pa3">
          <a href="#" style={buttonStyle} >Home</a>
        </li>
      </div>
    );
  }
}

export default MenuNavBar;
