import React, { Component } from 'react';
import Colours from "../../00-style/colours";

class PlaceholderText extends Component {

  render() {
    function textStyle(width) {
      return ({
        width: width + '%',
        height: '2em',
        backgroundColor: Colours.secondary,
        opacity: '0.7',
        margin: '16px auto 16px 16px'
      });
    }
    const header = {
      width: '60%',
      height: '3.6em',
      backgroundColor: Colours.secondary,
      opacity: '0.7',
      margin: '16px auto 32px 16px'
    }

    return(
      <div className="animated-background">
        <div className="phHeader" style={header}></div>
        <div className="phText" style={textStyle(90)}></div>
        <div className="phText" style={textStyle(95)}></div>
        <div className="phText" style={textStyle(85)}></div>
        <div className="phText" style={textStyle(65)}></div>
      </div>
    );
  }
}

export default PlaceholderText;
