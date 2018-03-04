import React, { Component } from 'react';
import Colours from "../../00-style/colours";

class ClientCard extends Component {

  constructor() {
     super();
     this.setWrapperRef = this.setWrapperRef.bind(this);
     this.handleClickOutside = this.handleClickOutside.bind(this);
     this.state = { hoverStyle: {display: 'none'},
                    titleStyle: {display: 'block'},
                    descriptionStyle: {display: 'none'},
                    active: false,
                    clicked: false
                    }
   }

   onMouseover (e) {
     if(!this.state.active && !this.state.clicked){
       this.setState({hoverStyle: {display: 'table'},
                    titleStyle: {display: 'none'},
                    descriptionStyle: {display: 'none'},
                    active: true })
      }
   }

   onMouseout (e) {
     this.setState({hoverStyle: {display: 'none'},
                    titleStyle: {display: 'block'},
                    active: false})
   }

   onClick (e) {
     this.setState({hoverStyle: {display: 'none'},
                    titleStyle: {display: 'block'},
                    descriptionStyle: {display: 'block'},
                    clicked: true})
   }

   componentDidMount() {
       document.addEventListener('mousedown', this.handleClickOutside);
   }

   componentWillUnmount() {
       document.removeEventListener('mousedown', this.handleClickOutside);
   }

   /**
    * Set the wrapper ref
    */
   setWrapperRef(node) {
       this.wrapperRef = node;
   }

   /**
    * Alert if clicked on outside of element
    */
   handleClickOutside(event) {
       if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.clicked) {
         this.setState({  hoverStyle: {display: 'none'},
                          titleStyle: {display: 'block'},
                          descriptionStyle: {display: 'none'},
                          active: false,
                          clicked: false
                          })
       }
   }

  render() {

    const boxContainer = {
      display: 'block',
      position: 'relative',
      margin: this.props.margin,
      height: this.props.height,
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      flex: '0 0 auto'
    }

    const hoverDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '4',
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

    const titleDiv = {
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

    const descriptionDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '5',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.primary,
      borderRadius: '4px',
      backgroundColor: Colours.white,
      height: '100%',
      width: '100%',
      display: 'block',
      overflow: 'scroll'
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
            onClick={this.onClick.bind(this)}
            ref={this.setWrapperRef}>
        <div style={imageDiv}>
          <div style={{...descriptionDiv,...this.state.descriptionStyle}}>
            <div style={boxText} className='whiteColour'>
              {this.props.clientDescription}
            </div>
          </div>
          <div style={{...hoverDiv,...this.state.hoverStyle}}>
            <div style={hoverText}>
              <h3 className='whiteColour'>
                {this.props.hoverHeader}
              </h3>
            </div>
          </div>
          <div style={{...titleDiv,...this.state.titleStyle}}>
            <div style={boxText}>
              <h3>{this.props.title}</h3>
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
