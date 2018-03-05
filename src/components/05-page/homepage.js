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
              height='32vh' width='80vw' maxWidth='800px'
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={16}
              borderWidth={16}
              text="A Bespoke Digital Agency"/>

            <ButtonGroup
              horizontalMargin={Margins.desktop.horizontal}
              verticalMargin={Margins.desktop.vertical}
              direction='row'
              buttonHeight='64px'
              inactiveButtonWidth='240px'
              inactiveButtonText='Who We Are'
              inactiveButtonLink='/about-us'
              accentButtonWidth='272px'
              accentButtonText='Lets Work Together'
              accentButtonLink='/contact-us'/>
          </MediaQuery>


          <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
            <HeroBox
              height='32vh' width='80vw' maxWidth='600px'
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={16}
              borderWidth={16}
              text="A Bespoke Digital Agency"/>

            <ButtonGroup
              horizontalMargin={Margins.tablet.horizontal}
              verticalMargin={Margins.tablet.vertical}
              buttonHeight='48px'
              inactiveButtonWidth='240px'
              inactiveButtonText='Who We Are'
              inactiveButtonLink='/about-us'
              accentButtonWidth='272px'
              accentButtonText='Lets Work Together'
              accentButtonLink='/contact-us'/>
          </MediaQuery>

          <MediaQuery maxWidth={Breakpoints.mobile}>
            <HeroBox
              height='36vh' width='90vw'
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={10}
              borderWidth={8}
              text="A Bespoke Digital Agency"/>

            <ButtonGroup
              horizontalMargin={Margins.mobile.horizontal}
              verticalMargin={Margins.mobile.vertical}
              buttonHeight='48px'
              inactiveButtonWidth='192px'
              inactiveButtonText='Who We Are'
              inactiveButtonLink='/about-us'
              accentButtonWidth='240px'
              accentButtonText='Lets Work Together'
              accentButtonLink='/contact-us'/>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default HomePage;
