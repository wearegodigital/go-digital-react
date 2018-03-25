import React, { Component } from 'react';

import InputBox from '../01-atom/boxes/input-box';
import TextareaBox from '../01-atom/boxes/textarea-box';
import FormButtonGroup from '../03-organism/group/form-buttons';

class ContactUs extends Component {
  render() {

    return(
      <form method="POST" action={`https://formspree.io/${this.props.emailAddress}`}>
          <InputBox
            maxWidth={this.props.maxInputWidth}
            height={this.props.inputHeight}
            width={`calc(100vw - ${this.props.horizontalMargin * 2 + this.props.shadowMargin}px)`}
            horizontalMargin={this.props.horizontalMargin}
            verticalMargin={this.props.verticalMargin}
            shadowMargin={this.props.shadowMargin}
            inputName="name"
            inputPlaceholder="Full Name"
            inputType="text" />

          <InputBox
            maxWidth={this.props.maxInputWidth}
            height={this.props.inputHeight}
            width={`calc(100vw - ${this.props.horizontalMargin * 2 + this.props.shadowMargin}px)`}
            horizontalMargin={this.props.horizontalMargin}
            verticalMargin={this.props.verticalMargin}
            shadowMargin={this.props.shadowMargin}
            inputName="email"
            inputPlaceholder="Email Address"
            inputType="email" />

          <TextareaBox
            maxWidth={this.props.maxTAWidth}
            height={this.props.TAHeight}
            width={`calc(100vw - ${this.props.horizontalMargin * 2 + this.props.shadowMargin}px)`}
            horizontalMargin={this.props.horizontalMargin}
            verticalMargin={this.props.verticalMargin}
            shadowMargin={this.props.shadowMargin}
            inputName="message"
            inputPlaceholder="Your Message"/>

          <FormButtonGroup
            horizontalMargin={this.props.horizontalMargin}
            verticalMargin={this.props.verticalMargin}
            direction='row'
            buttonHeight={this.props.buttonHeight}
            accentButtonWidth={this.props.buttonWidth}
            accentButtonText='Get In Touch!'/>
      </form>
    );
  }
}

export default ContactUs;
