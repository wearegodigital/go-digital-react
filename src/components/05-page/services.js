import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Breakpoints from "../00-style/breakpoints";
import Margins from "../00-style/margins";
import HeaderBox from '../01-atom/boxes/header-box';
import ServiceCards from '../03-organism/group/service-cards';
import ButtonGroup from '../03-organism/group/buttons';

class Services extends Component {
  render() {

    return(
      <div className="container">
        <MediaQuery minWidth={Breakpoints.desktop}>
            <HeaderBox
              height='6em' width='448px'
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={Margins.desktop.vertical}
              shadowMargin={Margins.desktop.shadow}
              text='What We Do...'/>

            <ServiceCards
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
              inactiveButtonWidth='328px'
              inactiveButtonText="Who We've Worked With"
              inactiveButtonLink='/portfolio'
              accentButtonWidth='240px'
              accentButtonText="Let's Do This!"
              accentButtonLink='/contact-us'/>
        </MediaQuery>

        <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
            <HeaderBox
              height='6em' width='420px'
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={Margins.tablet.vertical}
              shadowMargin={Margins.tablet.shadow}
              text='What We Do...'/>

            <ServiceCards
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
              inactiveButtonWidth='328px'
              inactiveButtonText="Who We've Worked With"
              inactiveButtonLink='/portfolio'
              accentButtonWidth='240px'
              accentButtonText="Let's Do This!"
              accentButtonLink='/contact-us'/>
        </MediaQuery>

        <MediaQuery maxWidth={Breakpoints.mobile}>
            <HeaderBox
              height='4em'  width='256px'
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={Margins.mobile.vertical}
              shadowMargin={Margins.mobile.shadow}
              text='What We Do...'/>

            <ServiceCards
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
              inactiveButtonWidth='312px'
              inactiveButtonText="Who We've Worked With"
              inactiveButtonLink='/portfolio'
              accentButtonWidth='224px'
              accentButtonText="Let's Do This!"
              accentButtonLink='/contact-us'/>
        </MediaQuery>
      </div>
    );
  }
}

export default Services;
