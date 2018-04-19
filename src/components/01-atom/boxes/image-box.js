import React, { Component } from 'react';

import Colours from "../../00-style/colours";

class ImageBox extends Component {

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
    margin: `${this.props.verticalMargin}px ${(this.props.shadowMargin*2)}px ${this.props.verticalMargin + this.props.shadowMargin}px ${0}px`,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    maxHeight: calculateMaxHeight,
    minHeight: this.props.minHeight,
  }

  var displayProperty = '';

  if(this.props.displayPlaceholder){
    displayProperty = 'block';
  } else {
    displayProperty = 'none';
  }

  const placeholderDiv = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '3',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: Colours.secondary,
    borderRadius: '4px',
    display: displayProperty,
    backgroundColor: Colours.white,
    height: this.props.height,
    width: this.props.width,
    maxWidth: calculateMaxWidth,
    maxHeight: calculateMaxHeight,
    minHeight: this.props.minHeight,
  }

  const imageDiv = {
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
    overflow: 'scroll',

    backgroundImage: `url("${this.props.image}")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
    <div className='image-container' style={boxContainer}>
      <div style={placeholderDiv} className='loading-image phHeader'></div>
      <div className='image-content' style={imageDiv}></div>
      <div className='image-shadow' style={hatchedShadow}></div>
    </div>
  );
}
}

ImageBox.defaultProps = {
  maxWidth: 'width',
  maxHeight: 'height',
  minHeight: '100px',
  image: 'url("../assets/img/services/half-circles.png")',
  displayPlaceholder: false
};

export default ImageBox;
