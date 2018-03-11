import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Colours from "../../00-style/colours";
import Breakpoints from "../../00-style/breakpoints";

class HeaderBox extends Component {

render() {
  var calculateMaxWidth = ''
  if(this.props.maxWidth==='width'){
    calculateMaxWidth = this.props.width
  } else {
    calculateMaxWidth = this.props.maxWidth
  }

  const boxContainer = {
    display: 'block',
    position: 'relative',
    margin: `${this.props.verticalMargin}px ${this.props.horizontalMargin + this.props.shadowMargin}px ${this.props.verticalMargin + this.props.shadowMargin}px ${this.props.horizontalMargin}px`,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
  }

  const textDiv = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: Colours.primary,
    borderRadius: '4px',
    backgroundColor: Colours.white,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    display: 'table'
  }

  const headerText = {
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '0 16px',
  }

  /*const headerText = 'display: table-cell; vertical-align: middle; padding: 0 16px;'*/

  const hatchedShadow = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: Colours.primary,
    borderRadius: '4px',
    background:  `repeating-linear-gradient(45deg, ${Colours.primary}, ${Colours.primary} 2px, rgba(255, 255, 255, 0.75) 2px, rgba(255, 255, 255, 0.75) 8px)`,
    margin: `${this.props.shadowMargin}px 0 0 ${this.props.shadowMargin}px`,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
  }

  return (
    <div className='header-container' style={boxContainer}>
      <div className='header-text' style={textDiv}>
        <MediaQuery minWidth={Breakpoints.mobile + 1}>
          <h3 style={headerText}> {this.props.text} </h3>
        </MediaQuery>
        <MediaQuery maxWidth={Breakpoints.mobile}>
          <h3 style={headerText}> {this.props.text} </h3>
        </MediaQuery>
      </div>
      <div className='header-shadow' style={hatchedShadow}>
      </div>
    </div>
  );
}
}

HeaderBox.defaultProps = {
  maxWidth: 'width'
};

export default HeaderBox;
