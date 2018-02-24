import React, { Component } from 'react';
import Colours from "../../00-style/colours";

class ClientCard extends Component {

  constructor() {
     super();
     this.state = { hoverStyle: {display: 'none'},
                    textStyle: {display: 'block'}
                    }
   }

   onMouseover (e) {
     this.setState({hoverStyle: {display: 'table'},
                    textStyle: {display: 'none'}})
   }

   onMouseout (e) {
     this.setState({hoverStyle: {display: 'none'},
                    textStyle: {display: 'block'}})
   }

   onClick (e) {
     this.setState({hoverStyle: {display: 'none'},
                    textStyle: {display: 'block'}})
   }

  render() {

    const boxContainer = {
      display: 'block',
      position: 'relative',
      margin: this.props.margin,
      height: this.props.height,
      width: this.props.width,
      maxWidth: this.props.maxWidth
    }

    const hoverDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '3',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.primary,
      borderRadius: '4px',
      height: '100%',
      width: '100%',
      color: Colours.white,
      backgroundColor: 'rgba(182, 79, 89,0.8)'
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
      height: '100%',
      width: '100%',
      display: 'block',

      backgroundImage: `url(${this.props.backgroundImage}`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'

    }

    const textDiv = {
      position: 'absolute',
      bottom: '-4px',
      left: '-4px',
      zIndex: '3',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      borderRadius: '0 0 4px 4px',
      backgroundColor: Colours.white,
      color: Colours.secondary,
      height: 'auto',
      width: '100%'
    }

    const hoverText = {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center'
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
      background:  `repeating-linear-gradient(45deg, ${Colours.secondary}, ${Colours.secondary} 2px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0) 8px)`,
      margin: `${this.props.shadowMargin} 0 0 ${this.props.shadowMargin}`,
      height: '100%',
      width: '100%'
    }

    return (
      <div  style={boxContainer}
            onMouseEnter={this.onMouseover.bind(this)}
            onMouseLeave={this.onMouseout.bind(this)}
            onClick={this.onClick.bind(this)}>
        <div style={imageDiv}>
          <div style={{...hoverDiv,...this.state.hoverStyle}}>
            <div style={hoverText}>
              <h3 className='whiteColour'>
                Find Out More
              </h3>
            </div>
          </div>
          <div style={{...textDiv,...this.state.textStyle}}>
            <div style={boxText}>
              <h3>{this.props.text}</h3>
            </div>
          </div>
        </div>
        <div style={hatchedShadow}>
        </div>
      </div>
    );
  }
}

export default ClientCard;
