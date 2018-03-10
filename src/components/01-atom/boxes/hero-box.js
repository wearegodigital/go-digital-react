import React, { Component } from 'react';

import Colours from "../../00-style/colours";
import TaglineSlider from "../../01-atom/slider/tagline-slider";

class HeroBox extends Component {

  render() {

    var calculateMaxWidth = ''
    if(this.props.maxWidth==='width'){
      calculateMaxWidth = this.props.width
    } else {
      calculateMaxWidth = this.props.maxWidth
    }

    const boxContainer = {
      display: 'block',
      margin: `${this.props.verticalMargin}vh ${this.props.horizontalMargin}px ${this.props.verticalMargin}vh ${this.props.horizontalMargin}px`,
      height: this.props.height,
      width: this.props.width,
      maxWidth: calculateMaxWidth,
      overflowX: 'hidden',
    }

    const sliderDiv = {
      display: 'flexbox',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      zIndex: '2',
      borderStyle: 'solid',
      borderWidth: `0 0 0 ${this.props.borderWidth}px`,
      borderColor: Colours.secondary,
      height: this.props.height,
      width: this.props.width,
      maxWidth: calculateMaxWidth,
      overflowX: 'hidden',
    }

    return (
      <div className='hero-container' style={boxContainer}>
        <div className='hero-slider' style={sliderDiv}>
          <TaglineSlider textWidth={this.props.textWidth} height= {this.props.height}/>
        </div>
      </div>
    );
  }
  }

HeroBox.defaultProps = {
  maxWidth: 'width',
  textWidth: '100%'
};

export default HeroBox;
