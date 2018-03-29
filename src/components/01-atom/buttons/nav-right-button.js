import React, { Component } from 'react';
import $ from "jquery";

import Colours from "../../00-style/colours.js";

class NavRightButton extends Component {

  onClick () {
     $(`.${this.props.scrollArea}`).animate({
       scrollLeft: `+=${this.props.scrollAmount}px`
     }, "slow");
   }

  render() {

    const boxIcon = {
      padding: '0 16px',
      color: Colours.primary,
      margin: '0 auto',
    }

    const buttonDiv = {
      height: 'auto',
      width: 'auto',
    }

    return (
        <div
          id='right-button'
          style={buttonDiv}
          onClick={this.onClick.bind(this)}>
            <i className="fas fa-3x fa-chevron-right" id='scroll-right' style={boxIcon}></i>
        </div>
    );
  }
}

NavRightButton.defaultProps = {
  scrollAmount: '500px',
  scrollArea: 'container',
  height: '3em',
};

export default NavRightButton;
