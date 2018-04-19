import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Colours from "../../00-style/colours.js";

class AccentButton extends Component {

  constructor() {
     super();
     this.state = { shadowMargin : '0px',
                    fillColour: Colours.white,
                    textColour: Colours.secondary,
                    redirect: false
                    }
   }

   onMouseover (e) {
     this.setState({fillColour: Colours.secondary,
                    textColour: Colours.white})
   }

   onMouseout (e) {
     this.setState({fillColour: Colours.white,
                    textColour: Colours.secondary})
   }

   onClick (e) {
     this.setState({fillColour: Colours.primary,
                    textColour: Colours.white,
                    redirect: true})
   }

  render() {
    const textDiv = {
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      backgroundColor: this.state.fillColour,
      borderRadius: '4px',
      fontSize: '1.618rem',
      fontFamily: 'cabin',
      fontWeight: '400',
      width: this.props.width,
      height: this.props.height,

      display: 'flex',
      float: this.props.float,
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer'
    }

    const boxText = {
      color: this.state.textColour,
      padding: '16px'
    }

    const boxIcon = {
      padding: '16px',
      color: Colours.secondary
    }

    if (this.state.redirect) {
      return <Redirect push to={this.props.link} />;
    }


    return (
      <div
        className='inline-button'
        style={textDiv}
        onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}
        onClick={this.onClick.bind(this)}>
        <div className='button-text' style={boxText}>{this.props.text}</div>
        <i className="fas fa-chevron-right" style={boxIcon}></i>
      </div>
    );
  }
}

AccentButton.defaultProps = {
  display: true,
  float: 'right',
};

export default AccentButton;
