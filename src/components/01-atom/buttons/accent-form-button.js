import React, { Component } from 'react';
import Colours from "../../00-style/colours.js";

class AccentFormButton extends Component {

  constructor() {
     super();
     this.state = { shadowMargin : '0px',
                    fillColour: Colours.secondary,
                    textColour: Colours.white,
                    }
   }

   onMouseover (e) {
     this.setState({shadowMargin : '2px',
                    fillColour: Colours.secondary,
                    textColour: Colours.white})
   }

   onMouseout (e) {
     this.setState({shadowMargin : '0px',
                    fillColour: Colours.secondary,
                    textColour: Colours.white})
   }

   onClick (e) {
     this.setState({shadowMargin : '8px',
                    fillColour: Colours.white,
                    textColour: Colours.primary,})
   }

  render() {
    var displayProperty = '';

    if(this.props.display){
      displayProperty = 'block';
    } else {
      displayProperty = 'none';
    }

    const boxContainer = {
      display: displayProperty,
      position: 'relative',
      cursor: 'pointer',
      margin: this.props.margin,
      height: this.props.height,
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      border: 'none',
      backgroundColor: 'none',
      textAlign: 'left',
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
      borderColor: Colours.primary,
      borderRadius: '4px',
      background:  `repeating-linear-gradient(45deg, ${Colours.primary}, ${Colours.primary} 2px, rgba(255, 255, 255, 0.75) 2px, rgba(255, 255, 255, 0.75) 8px)`,
      margin: '8px 0 0 8px',
      height: '100%',
      width: '100%'
    }


    return (
      <button
        className='accent-button'
        style={boxContainer}
        onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}
        onClick={this.onClick.bind(this)}
        type="submit">
        <div className='button-content' style={textDiv}>
          <div className='button-text' style={boxText}>{this.props.text}</div>
          <i className="fas fa-chevron-right" style={boxIcon}></i>
        </div>
        <div className='button-shadow' style={hatchedShadow}>
        </div>
      </button>
    );
  }
}

AccentFormButton.defaultProps = {
  display: true
};

export default AccentFormButton;
