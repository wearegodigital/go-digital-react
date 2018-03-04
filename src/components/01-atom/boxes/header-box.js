import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Colours from "../../00-style/colours";

class HeaderBox extends Component {

render() {

  const boxContainer = {
    display: 'block',
    position: 'relative',
    margin: `${this.props.verticalMargin}px ${this.props.horizontalMargin + this.props.shadowMargin}px ${this.props.verticalMargin + this.props.shadowMargin}px ${this.props.horizontalMargin}px`,
    height: this.props.height,
    width: this.props.width,
    maxWidth: this.props.maxWidth
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
    height: '100%',
    width: '100%',
    display: 'table'
  }

  /*const headerText = {
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '0 16px'
  }*/

  const headerText = 'display: table-cell; vertical-align: middle; padding: 0 16px;'

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
    height: '100%',
    width: '100%'
  }

  return (
    <div className='header-container' style={boxContainer}>
      <div className='header-text' style={textDiv}>
        {ReactHtmlParser(`<${this.props.headerDOM} style="${headerText}"> ${this.props.text} </${this.props.headerDOM}>`)}
      </div>
      <div className='header-shadow' style={hatchedShadow}>
      </div>
    </div>
  );
}
}

export default HeaderBox;
