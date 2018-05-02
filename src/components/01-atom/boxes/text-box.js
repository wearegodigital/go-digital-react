import React, { Component } from 'react';

import Colours from "../../00-style/colours";

class TextBox extends Component {

render() {
  var calculateMaxWidth = ''
  if(this.props.maxWidth==='width'){
    calculateMaxWidth = this.props.width
  } else {
    calculateMaxWidth = this.props.maxWidth
  }

  var calculateMaxHeight = ''
  if(this.props.maxHeight==='height'){
    calculateMaxHeight = this.props.height
  } else {
    calculateMaxHeight = this.props.maxHeight
  }

  const boxContainer = {
    display: 'block',
    position: 'relative',
    margin: `${this.props.verticalMargin}px ${this.props.horizontalMargin + (this.props.shadowMargin*2)}px ${this.props.verticalMargin + this.props.shadowMargin}px ${this.props.horizontalMargin}px`,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    maxHeight: calculateMaxHeight,
    minHeight: this.props.minHeight,
  }

  const textDiv = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: Colours.secondary,
    borderRadius: '4px',
    backgroundColor: Colours.white,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    maxHeight: calculateMaxHeight,
    minHeight: this.props.minHeight,
    display: 'block',
    overflowY: 'auto',
  }

  const boxText = {
    padding: '16px',
    overflow: 'auto'
  }

  const hatchedShadow = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: Colours.secondary,
    borderRadius: '4px',
    background:  `repeating-linear-gradient(45deg, ${Colours.secondary}, ${Colours.secondary} 2px, rgba(255, 255, 255, 0.75) 2px, rgba(255, 255, 255, 0.75) 8px)`,
    margin: `${this.props.shadowMargin}px 0 0 ${this.props.shadowMargin}px`,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    maxHeight: calculateMaxHeight,
    minHeight: this.props.minHeight,
  }

  return (
    <div className='text-container' style={boxContainer}>
      <div className='text-content' style={textDiv}>
        <div style={boxText}>{this.props.text}</div>
      </div>
      <div className='text-shadow' style={hatchedShadow}>
      </div>
    </div>
  );
}
}

TextBox.defaultProps = {
  maxWidth: 'width',
  maxHeight: 'height',
  minHeight: '200px',
};

export default TextBox;
