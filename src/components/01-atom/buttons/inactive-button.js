import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Colours from "../../00-style/colours.js";

class InactiveButton extends Component {

  constructor() {
     super();
     this.state = { shadowMargin : '0px',
                    fillColour: Colours.white,
                    textColour: Colours.primary,
                    redirect: false
                    }
   }

   onMouseover (e) {
     this.setState({shadowMargin : '2px',
                    fillColour: Colours.white,
                    textColour: Colours.primary})
   }

   onMouseout (e) {
     this.setState({shadowMargin : '0px',
                    fillColour: Colours.white,
                    textColour: Colours.primary})
   }

   onClick (e) {
     this.setState({shadowMargin : '8px',
                    fillColour: Colours.secondary,
                    textColour: Colours.white,
                    redirect: true})
   }

  render() {

    const boxContainer = {
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      margin: this.props.margin,
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
      backgroundColor: this.state.fillColour,
      fontSize: '1.618em',
      fontFamily: 'cabin',
      fontWeight: '400',
      height: '100%',
      width: '100%',
      margin: `${this.state.shadowMargin} 0 0 ${this.state.shadowMargin}`,

      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    }

    const boxText = {
      color: this.state.textColour,
      padding: '16px'
    }

    const boxIcon = {
      padding: '16px',
      color: Colours.primary
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
      background:  `repeating-linear-gradient(45deg, ${Colours.secondary}, ${Colours.secondary} 2px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0) 8px)`,
      margin: '8px 0 0 8px',
      height: '100%',
      width: '100%'
    }
    
    if (this.state.redirect) {
      return <Redirect push to={this.props.link} />;
    }

    return (
      <div  style={boxContainer}
            onMouseEnter={this.onMouseover.bind(this)}
            onMouseLeave={this.onMouseout.bind(this)}
            onClick={this.onClick.bind(this)}>
        <div style={textDiv}>
          <div style={boxText}>{this.props.text}</div>
          <i class="fas fa-chevron-right" style={boxIcon}></i>
        </div>
        <div style={hatchedShadow}>
        </div>
      </div>
    );
  }
}

export default InactiveButton;
