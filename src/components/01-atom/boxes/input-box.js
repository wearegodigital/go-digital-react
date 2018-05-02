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

  const boxContainer = {
    display: 'block',
    position: 'relative',
    margin: `${this.props.verticalMargin}px ${this.props.horizontalMargin + (this.props.shadowMargin*2)}px ${this.props.verticalMargin + this.props.shadowMargin}px ${this.props.horizontalMargin}px`,
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
    borderColor: Colours.secondary,
    borderRadius: '4px',
    backgroundColor: Colours.white,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    display: 'block',
    overflow: 'scroll',
  }

  const boxText = {
    padding: '0 16px',
    overflow: 'hidden',
    height: 'calc(100%)',
    width: 'calc(100% - 36px)',
    maxWidth: calculateMaxWidth,
    backgroundColor: Colours.white,
    Color: Colours.secondary,
    borderStyle: 'none',
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
  }

  return (
    <div className='text-container' style={boxContainer}>
      <div className='text-content' style={textDiv}>
        <input style={boxText} name={this.props.inputName} placeholder={this.props.inputPlaceholder} type={this.props.inputType} className={`${this.props.inputName}-form-input input-placeholder-text secondaryColour`} autoComplete={this.props.autocomplete}/>
      </div>
      <div className='text-shadow' style={hatchedShadow}>
      </div>
    </div>
  );
}
}

TextBox.defaultProps = {
  maxWidth: 'width'
};

export default TextBox;
