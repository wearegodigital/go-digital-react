import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Breakpoints from "../00-style/breakpoints";
import Margins from "../00-style/margins";
import HeroBox from '../01-atom/boxes/hero-box';
import ButtonGroup from '../03-organism/group/buttons'

class HomePage extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <MediaQuery minWidth={Breakpoints.desktop}>
            <HeroBox
              height='40vh'
              width={`calc(100vw - ${Margins.desktop.horizontal}px)`}
              textWidth='720px'
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={12}
              borderWidth={16}/>

            <ButtonGroup
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={Margins.desktop.vertical}
              direction='row'
              buttonHeight='64px'
              inactiveButtonWidth='240px'
              inactiveButtonText='Who We Are'
              inactiveButtonLink='/about-us'
              accentButtonWidth='224px'
              accentButtonText='Say Hello!'
              accentButtonLink='/contact-us'/>
          </MediaQuery>


          <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
            <HeroBox
              height='24vh'
              width={`calc(100vw - ${Margins.tablet.horizontal}px)`}
              textWidth='480px'
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={12}
              borderWidth={8}/>

            <ButtonGroup
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={Margins.tablet.vertical}
              buttonHeight='48px'
              inactiveButtonWidth='240px'
              inactiveButtonText='Who We Are'
              inactiveButtonLink='/about-us'
              accentButtonWidth='224px'
              accentButtonText='Say Hello!'
              accentButtonLink='/contact-us'/>
          </MediaQuery>

          <MediaQuery maxWidth={Breakpoints.mobile}>
            <HeroBox
              height='36vh'
              width={`calc(100vw - ${Margins.tablet.horizontal}px)`}
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={8}
              borderWidth={8}/>

            <ButtonGroup
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={Margins.mobile.vertical}
              buttonHeight='48px'
              inactiveButtonWidth='192px'
              inactiveButtonText='Who We Are'
              inactiveButtonLink='/about-us'
              accentButtonWidth='176px'
              accentButtonText='Say Hello!'
              accentButtonLink='/contact-us'/>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default HomePage;
