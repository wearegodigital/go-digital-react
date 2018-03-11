import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Breakpoints from "../00-style/breakpoints";
import Margins from "../00-style/margins";
import HeaderBox from '../01-atom/boxes/header-box';
import ContactForm from '../04-template/contact-form.js';

class ContactUs extends Component {
  render() {

    const emailAddress = 'hello@wearego.digital';

    return(
      <div>
        <MediaQuery minWidth={Breakpoints.desktop}>
          <HeaderBox
            height='6em' width='60vw' maxWidth='320px'
            horizontalMargin={Margins.desktop.horizontal}
            verticalMargin={Margins.desktop.vertical}
            shadowMargin={Margins.desktop.shadow}
            text="Get In Touch"/>

          <ContactForm
            maxInputWidth='444px'
            inputHeight='48px'
            maxTAWidth='640px'
            TAHeight='20vh'
            buttonHeight='64px'
            buttonWidth='240px'
            horizontalMargin={Margins.desktop.horizontal}
            verticalMargin={Margins.desktop.vertical}
            shadowMargin={Margins.desktop.shadow}
            emailAddress={emailAddress}/>
        </MediaQuery>

        <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
          <HeaderBox
            height='6em' width='60vw' maxWidth='384px'
            horizontalMargin={Margins.tablet.horizontal}
            verticalMargin={Margins.tablet.vertical}
            shadowMargin={Margins.tablet.shadow}
            text="Get In Touch"/>

          <ContactForm
            maxInputWidth='384px'
            inputHeight='48px'
            maxTAWidth='640px'
            TAHeight='24vh'
            buttonHeight='64px'
            buttonWidth='240px'
            horizontalMargin={Margins.tablet.horizontal}
            verticalMargin={Margins.tablet.vertical}
            shadowMargin={Margins.tablet.shadow}
            emailAddress={emailAddress}/>
        </MediaQuery>

        <MediaQuery maxWidth={Breakpoints.mobile}>
          <HeaderBox
            height='4em' width='70vw' maxWidth='300px'
            horizontalMargin={Margins.mobile.horizontal}
            verticalMargin={Margins.mobile.vertical}
            shadowMargin={Margins.mobile.shadow}
            text="Get In Touch"/>

          <ContactForm
            maxInputWidth='240px'
            inputHeight='48px'
            maxTAWidth='400px'
            TAHeight='24vh'
            buttonHeight='48px'
            buttonWidth='240px'
            horizontalMargin={Margins.mobile.horizontal}
            verticalMargin={Margins.mobile.vertical}
            shadowMargin={Margins.mobile.shadow}
            emailAddress={emailAddress}/>
        </MediaQuery>

      </div>
    );
  }
}

export default ContactUs;
