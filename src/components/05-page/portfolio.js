import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Breakpoints from "../00-style/breakpoints";
import Margins from "../00-style/margins";
import HeaderBox from '../01-atom/boxes/header-box';
import ClientCards from '../03-organism/group/client-cards';
import ButtonGroup from '../03-organism/group/buttons';

class Portfolio extends Component {
  render() {

    return(
      <div className="container">
        <MediaQuery minWidth={Breakpoints.desktop}>
            <HeaderBox
              height='6em' width='320px'
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={Margins.desktop.vertical}
              shadowMargin={Margins.desktop.shadow}
              text='Our Clients...'/>

            <ClientCards
              height='40vh'
              maxWidth='600px'
              width={`calc(100vw - ${Margins.desktop.horizontal * 2 + Margins.desktop.shadow}px)`}
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={Margins.desktop.vertical}
              shadowMargin={Margins.desktop.shadow}/>

            <ButtonGroup
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={Margins.desktop.vertical}
              direction='row'
              buttonHeight='64px'
              inactiveButtonWidth=''
              inactiveButtonText={this.props.nextButtonText}
              inactiveButtonLink={this.props.nextButtonLink}
              accentButtonWidth='240px'
              accentButtonText="Let's Do This!"
              accentButtonLink='/contact-us'/>
        </MediaQuery>

        <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
            <HeaderBox
              height='6em' width='320px'
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={Margins.tablet.vertical}
              shadowMargin={Margins.tablet.shadow}
              text='Our Clients...'/>

            <ClientCards
              height='40vh'
              maxWidth='600px'
              width={`calc(100vw - ${Margins.tablet.horizontal * 2 + Margins.tablet.shadow}px)`}
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={Margins.tablet.vertical}
              shadowMargin={Margins.tablet.shadow}/>

            <ButtonGroup
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={Margins.tablet.vertical}
              buttonHeight='48px'
              inactiveButtonWidth=''
              inactiveButtonText={this.props.nextButtonText}
              inactiveButtonLink={this.props.nextButtonLink}
              accentButtonWidth='240px'
              accentButtonText="Let's Do This!"
              accentButtonLink='/contact-us'/>
        </MediaQuery>

        <MediaQuery maxWidth={Breakpoints.mobile}>
            <HeaderBox
              height='4em'  width='212px'
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={Margins.mobile.vertical}
              shadowMargin={Margins.mobile.shadow}
              text='Our Clients...'/>

            <ClientCards
              height='36vh'
              maxWidth='600px'
              width={`calc(100vw - ${Margins.mobile.horizontal * 2 + Margins.mobile.shadow}px)`}
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={Margins.mobile.vertical}
              shadowMargin={Margins.mobile.shadow}/>

            <ButtonGroup
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={Margins.mobile.vertical}
              buttonHeight='48px'
              inactiveButtonWidth=''
              inactiveButtonText={this.props.nextButtonText}
              inactiveButtonLink={this.props.nextButtonLink}
              accentButtonWidth='192px'
              accentButtonText="Let's Do This!"
              accentButtonLink='/contact-us'/>
        </MediaQuery>
      </div>
    );
  }
}

export default Portfolio;
