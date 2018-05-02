import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Colours from "../../00-style/colours";
import Breakpoints from "../../00-style/breakpoints";

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
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      flex: '0 0 auto'
    }

    const hoverDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '5',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.primary,
      borderRadius: '4px',
      height: this.props.height,
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
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
      height: this.props.height,
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      display: 'block',
      backgroundColor: Colours.white,
      backgroundImage: `url(${this.props.backgroundImage}`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    const imageOverlayDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '3',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      borderRadius: '4px',
      height: this.props.height,
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      display: 'block',
      backgroundColor: Colours.primary,
      opacity: '0.3',
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
      height: this.props.height,
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      display: displayProperty,
      backgroundColor: Colours.white,
    }

    const titleDiv = {
      position: 'absolute',
      bottom: '-4px',
      left: '-4px',
      zIndex: '4',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      borderRadius: '0 0 4px 4px',
      backgroundColor: Colours.white,
      color: Colours.secondary,
      height: 'auto',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
    }

    const descriptionDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '6',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.primary,
      borderRadius: '4px',
      backgroundColor: Colours.white,
      height: this.props.height,
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      display: 'block',
      overflowY: 'auto'
    }

    const hoverText = {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center',
      cursor: 'pointer',
    }

    const boxText = {
      padding: '8px 16px',
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
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
    }

    return (
      <div  style={boxContainer}
            onMouseEnter={this.onMouseover.bind(this)}
            onMouseLeave={this.onMouseout.bind(this)}
            onClick={this.onClick.bind(this)}
            ref={this.setWrapperRef}
            id={`portfolio-item-${this.props.id}`}
            className='card'>
        <div style={placeholderDiv} className='loading-image phHeader'></div>
        <div style={imageDiv} className='card-image'>
          <div style={{...descriptionDiv,...this.state.descriptionStyle}}>
            <div style={boxText} className='whiteColour card-description'>
              {this.props.clientDescription}
            </div>
          </div>
          <div style={imageOverlayDiv} className='card-image-overlay'></div>
          <div style={{...hoverDiv,...this.state.hoverStyle}} className='card-hover'>
            <div style={hoverText} className='hover-text'>
              <MediaQuery minWidth={Breakpoints.mobile + 1}>
                <h3 className='whiteColour hover-header'> {this.props.hoverHeader} </h3>
              </MediaQuery>
              <MediaQuery maxWidth={Breakpoints.mobile}>
                <h4 className='whiteColour hover-header'> {this.props.hoverHeader} </h4>
              </MediaQuery>
            </div>
          </div>
          <div style={{...titleDiv,...this.state.titleStyle}} className='card-title'>
            <div style={boxText}>
              <MediaQuery minWidth={Breakpoints.mobile + 1}>
                <h3>{this.props.title}</h3>
              </MediaQuery>
              <MediaQuery maxWidth={Breakpoints.mobile}>
                <h4>{this.props.title}</h4>
              </MediaQuery>
            </div>
          </div>
        </div>
        <div style={hatchedShadow} className='card-shadow'>
        </div>
      </div>
    );
  }
}

ClientCard.defaultProps = {
  displayPlaceholder: false
};

export default ClientCard;
