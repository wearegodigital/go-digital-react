import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import HeaderBox from '../01-atom/boxes/header-box';
import TextBox from '../01-atom/boxes/text-box';
import AccentButton from '../01-atom/buttons/accent-button';
import InactiveButton from '../01-atom/buttons/inactive-button';

import Colours from "../00-style/colours";
import Breakpoints from "../00-style/breakpoints";



class SimpleTextPage extends Component {
  render() {

    const buttonGroup = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }
    return(
      <div className="container">
        {console.log(this.props)}
        <MediaQuery minWidth={Breakpoints.desktop}>
            <HeaderBox
              height='6em' width='60%' maxWidth='300px'
              margin='32px 64px' shadowMargin='16px'
              shadowColour={Colours.primary} borderColour={Colours.primary} fillColour={Colours.white}
              text={this.props.header}/>

            <TextBox
              height='40vh' width='calc(100%-128px)' maxWidth='900px'
              margin='48px 96px 48px 64px' shadowMargin='16px'
              shadowColour={Colours.secondary} borderColour={Colours.secondary} fillColour={Colours.white}
              text={this.props.content}/>
              <div style={{...buttonGroup,...{margin:'48px 64px'}}}>
                <InactiveButton height='64px' width={this.props.buttonWidth} maxWidth='300px' text={this.props.nextButtonText}
                  margin='16px 32px 16px 0' link={this.props.nextButtonLink}  />
                <AccentButton height='64px' width={this.props.buttonWidth} maxWidth='300px' text={this.props.contactButtonText}
                  margin='16px 32px 16px 0' link='/contact-us'/>
              </div>
        </MediaQuery>
        <MediaQuery minWidth={Breakpoints.mobile} maxWidth={Breakpoints.desktop - 1}>
            <HeaderBox
              height='6em' width='80%' maxWidth='300px'
              margin='32px 32px' shadowMargin='16px'
              shadowColour={Colours.primary} borderColour={Colours.primary} fillColour={Colours.white}
              text={this.props.header}/>

            <TextBox
              height='40vh' width='calc(100%-64px)' maxWidth='900px'
              margin='48px 48px 32px 32px' shadowMargin='16px'
              shadowColour={Colours.secondary} borderColour={Colours.secondary} fillColour={Colours.white}
              text={this.props.content}/>
              <div style={{...buttonGroup,...{margin:'32px'}}}>
                <InactiveButton height='64px' width={this.props.buttonWidth} maxWidth='300px' text={this.props.nextButtonText}
                  margin='16px 32px 16px 0' link={this.props.nextButtonLink}  />
                <AccentButton height='64px' width={this.props.buttonWidth} maxWidth='300px' text={this.props.contactButtonText}
                  margin='16px 32px 16px 0' link='/contact-us'/>
              </div>
        </MediaQuery>
        <MediaQuery maxWidth={Breakpoints.mobile - 1}>
            <HeaderBox
              height='64px' width='240px' maxWidth='240px'
              margin='16px 40px 32px 32px' shadowMargin='8px'
              shadowColour={Colours.primary} borderColour={Colours.primary} fillColour={Colours.white}
              text={this.props.header}/>

            <TextBox
              height='40vh' width='calc(100%-48px)' maxWidth='900px'
              margin='16px 40px 16px 32px' shadowMargin='8px'
              shadowColour={Colours.secondary} borderColour={Colours.secondary} fillColour={Colours.white}
              text={this.props.content}/>
              <div style={{...buttonGroup,...{margin:'16px 32px'}}}>
                <InactiveButton height='40px' width={this.props.buttonWidth} maxWidth='300px' text={this.props.nextButtonText}
                  margin='16px 32px 16px 0' link={this.props.nextButtonLink} />
                <AccentButton height='40px' width={this.props.buttonWidth} maxWidth='300px' text={this.props.contactButtonText}
                  margin='16px 32px 16px 0' link='/contact-us' />
              </div>
        </MediaQuery>
      </div>
    );
  }
}

export default SimpleTextPage;
