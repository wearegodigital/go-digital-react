import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Colours from "../../00-style/colours";
import Breakpoints from "../../00-style/breakpoints";

class ServiceCard extends Component {

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
                    titleStyle: {display: 'block'},
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

    const iframe = {
      position: 'absolute',
      bottom: '-4px',
      left: '-4px',
      zIndex: '3',
      borderStyle: 'none',
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
    }

    const hoverDiv = {
      position: 'absolute',
      bottom: '-4px',
      left: '-4px',
      zIndex: '4',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      borderRadius: '4px',
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      color: Colours.white,
      backgroundColor: 'rgba(29, 45, 88,0.8)'
    }

    const titleDiv = {
      position: 'absolute',
      top: '-4px',
      left: '-4px',
      zIndex: '7',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      borderRadius: '4px 4px 0 0',
      backgroundColor: Colours.white,
      color: Colours.secondary,
      height: 'auto',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      overflowY: 'hidden',
    }

    const descriptionDiv = {
      position: 'absolute',
      bottom: '-4px',
      left: '-4px',
      zIndex: '6',
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: Colours.secondary,
      borderRadius: '4px',
      backgroundColor: Colours.white,
      maxHeight: this.props.width,
      minHeight: '200px',
      width: this.props.width,
      maxWidth: this.props.maxWidth,
      display: 'block',
      overflowY: 'scroll'
    }

    const hoverText = {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center',
      cursor: 'pointer',
    }

    const boxText = {
      overflow: 'auto',
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

    const desktopTitle = 2.618 * 1.2
    const mobileTitle = 1.618 * 1.2

    return (
      <div  style={boxContainer}
            onMouseEnter={this.onMouseover.bind(this)}
            onMouseLeave={this.onMouseout.bind(this)}
            onClick={this.onClick.bind(this)}
            ref={this.setWrapperRef}
            id={`services-item-${this.props.id}`}
            className='card'>
        <div style={placeholderDiv} className='loading-image phHeader'></div>
        <div style={imageDiv} className='service-card-image'>
          <MediaQuery minWidth={Breakpoints.mobile + 1}>
            <div style={{...descriptionDiv,...this.state.descriptionStyle,...{height: `calc(${this.props.height} - ${desktopTitle}rem - 16px)`,}}}>
              <div style={{...boxText,...{padding: `calc(${desktopTitle}rem ) 16px`,}}} className='whiteColour card-description'>
                {this.props.clientDescription}
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile}>
            <div style={{...descriptionDiv,...this.state.descriptionStyle,...{height: `calc(${this.props.height} - ${mobileTitle}rem - 16px)`,}}}>
              <div style={{...boxText,...{padding: `calc(${desktopTitle}rem) 16px`,}}} className='whiteColour card-description'>
                {this.props.clientDescription}
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={Breakpoints.mobile + 1}>
            <div style={{...hoverDiv,...this.state.hoverStyle,...{height: `calc(${this.props.height} - ${desktopTitle}rem - 16px)`,}}} className='card-hover'>
              <div style={hoverText} className='hover-text'>
                <h3 className='whiteColour hover-header'> {this.props.hoverHeader} </h3>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile}>
            <div style={{...hoverDiv,...this.state.hoverStyle,...{height: `calc(${this.props.height} - ${mobileTitle}em - 16px)`,}}} className='card-hover'>
              <div style={hoverText} className='hover-text'>
                <h4 className='whiteColour hover-header'> {this.props.hoverHeader} </h4>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={Breakpoints.mobile + 1}>
            <div style={{...titleDiv,...this.state.titleStyle,...{height: `calc(${desktopTitle}rem + 16px)`,}}} className='card-title'>
              <div style={{...boxText,...{padding: '8px 16px',}}}>
                  <h3>{this.props.title}</h3>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile}>
            <div style={{...titleDiv,...this.state.titleStyle,...{height: `calc(${mobileTitle}rem + 16px)`,}}} className='card-title'>
              <div style={{...boxText,...{padding: '8px 16px',}}}>
                  <h4>{this.props.title}</h4>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={Breakpoints.mobile + 1}>
            <img src={this.props.serviceIcon} style={{...iframe,...{height: `calc(${this.props.height} - ${desktopTitle}rem - 16px)`,}}} id={`service-icon-${this.props.id}`} alt={`icon for ${this.props.title}`}/>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile}>
            <img src={this.props.serviceIcon} style={{...iframe,...{height: `calc(${this.props.height} - ${mobileTitle}rem - 16px)`,}}} id={`service-icon-${this.props.id}`} alt={`icon for ${this.props.title}`}/>
          </MediaQuery>
        </div>
        <div style={hatchedShadow} className='card-shadow'>
        </div>
      </div>
    );
  }
}

ServiceCard.defaultProps = {
  displayPlaceholder: false
};

export default ServiceCard;
