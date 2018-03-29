import React, { Component } from 'react';
import $ from "jquery";

import Colours from "../../00-style/colours.js";

class NavLeftButton extends Component {

  onClick () {
     $(`.${this.props.scrollArea}`).animate({
       scrollLeft: `-=${this.props.scrollAmount}px`
     }, "slow");
   }

  render() {

    const boxIcon = {
      padding: '0 16px',
      color: Colours.primary,
      margin: '0 auto',
    }

    const buttonDiv = {
      height: this.props.height,
      width: 'auto',
    }

    return (
        <div
          id='left-button'
          style={buttonDiv}
          onClick={this.onClick.bind(this)}>
            <i className="fas fa-3x fa-chevron-left" id='scroll-left' style={boxIcon}></i>
        </div>
    );
  }
}

NavLeftButton.defaultProps = {
  scrollAmount: '500px',
  scrollArea: 'container',
  height: '3em',
};

export default NavLeftButton;
