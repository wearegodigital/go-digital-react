import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Colours from "../../00-style/colours";
import Breakpoints from "../../00-style/breakpoints";

class PlaceholderText extends Component {

  render() {
    function textStyle(width,margin,height) {
      return ({
        width: width + '%',
        height: `${height}em`,
        backgroundColor: Colours.secondary,
        opacity: '0.7',
        margin: `${margin}px auto ${margin}px ${margin}px`,
        borderRadius: '4px',
      });
    }
    function headerStyle(width,margin,height) {
      return ({
          width: width + '%',
          height: `${height}em`,
          backgroundColor: Colours.secondary,
          opacity: '0.7',
          margin: `${margin}px auto ${margin * 2}px ${margin}px`,
          borderRadius: '4px',
      });
    }

    return(
      <div className="animated-background">
        <MediaQuery minWidth={Breakpoints.desktop}>
            <div className="phHeader" style={headerStyle(60,16,3.6)}></div>
            <div className="phText" style={textStyle(90,16,2)}></div>
            <div className="phText" style={textStyle(95,16,2)}></div>
            <div className="phText" style={textStyle(85,16,2)}></div>
            <div className="phText" style={textStyle(65,16,2)}></div>
        </MediaQuery>

        <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
            <div className="phHeader" style={headerStyle(70,8,3.6)}></div>
            <div className="phText" style={textStyle(90,8,2)}></div>
            <div className="phText" style={textStyle(95,8,2)}></div>
            <div className="phText" style={textStyle(85,8,2)}></div>
            <div className="phText" style={textStyle(65,8,2)}></div>
        </MediaQuery>

        <MediaQuery maxWidth={Breakpoints.mobile}>
            <div className="phHeader" style={headerStyle(70,8,2.4)}></div>
            <div className="phText" style={textStyle(90,8,1.6)}></div>
            <div className="phText" style={textStyle(95,8,1.6)}></div>
            <div className="phText" style={textStyle(85,8,1.6)}></div>
            <div className="phText" style={textStyle(90,8,1.6)}></div>
            <div className="phText" style={textStyle(85,8,1.6)}></div>
            <div className="phText" style={textStyle(65,8,1.6)}></div>
        </MediaQuery>
      </div>
    );
  }
}

export default PlaceholderText;
