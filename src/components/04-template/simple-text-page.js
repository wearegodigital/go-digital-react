import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import { fillHeight } from "../00-functions/helper";
import Breakpoints from "../00-style/breakpoints";
import Margins from "../00-style/margins";
import HeaderBox from '../01-atom/boxes/header-box';
import TextBox from '../01-atom/boxes/text-box';
import ButtonGroup from '../03-organism/group/buttons'

class SimpleTextPage extends Component {
  render() {

    return(
      <div className="container">
        <MediaQuery minWidth={Breakpoints.desktop}>
          <HeaderBox
            height='6em' width='60vw' maxWidth='256px'
            horizontalMargin={Margins.desktop.horizontal}
            verticalMargin={Margins.desktop.vertical}
            shadowMargin={Margins.desktop.shadow}
            text={this.props.header}/>

          <TextBox
            maxWidth='900px'
            height={`calc(${fillHeight('desktop','6em','64px')}`}
            width={`calc(100vw - ${Margins.desktop.horizontal * 2 + Margins.desktop.shadow}px)`}
            horizontalMargin={Margins.desktop.horizontal}
            verticalMargin={Margins.desktop.vertical}
            shadowMargin={Margins.desktop.shadow}
            text={this.props.content}/>

          <ButtonGroup
            horizontalMargin={Margins.desktop.horizontal}
            verticalMargin={Margins.desktop.vertical}
            direction='row'
            buttonHeight='64px'
            inactiveButtonWidth='240px'
            inactiveButtonText={this.props.nextButtonText}
            inactiveButtonLink={this.props.nextButtonLink}
            accentButtonWidth='272px'
            accentButtonText={this.props.contactButtonText}
            accentButtonLink='/contact-us'/>
        </MediaQuery>


        <MediaQuery minWidth={Breakpoints.mobile + 1} maxWidth={Breakpoints.desktop - 1}>
          <HeaderBox
            height='6em' width='60vw' maxWidth='256px'
            horizontalMargin={Margins.tablet.horizontal}
            verticalMargin={Margins.tablet.vertical}
            shadowMargin={Margins.tablet.shadow}
            text={this.props.header}/>

          <TextBox
            maxWidth='900px'
            height={`calc(${fillHeight('tablet','6em','48px')}`}
            width={`calc(100vw - ${Margins.tablet.horizontal * 2 + Margins.tablet.shadow}px)`}
            horizontalMargin={Margins.tablet.horizontal}
            verticalMargin={Margins.tablet.vertical}
            shadowMargin={Margins.tablet.shadow}
            text={this.props.content}/>

          <ButtonGroup
            horizontalMargin={Margins.tablet.horizontal}
            verticalMargin={Margins.tablet.vertical}
            buttonHeight='48px'
            inactiveButtonWidth='240px'
            inactiveButtonText={this.props.nextButtonText}
            inactiveButtonLink={this.props.nextButtonLink}
            accentButtonWidth='272px'
            accentButtonText={this.props.contactButtonText}
            accentButtonLink='/contact-us'/>
        </MediaQuery>

        <MediaQuery maxWidth={Breakpoints.mobile}>
          <HeaderBox
            height='4em' width='65vw' maxWidth='256px'
            horizontalMargin={Margins.mobile.horizontal}
            verticalMargin={Margins.mobile.vertical}
            shadowMargin={Margins.mobile.shadow}
            text={this.props.header}/>

          <TextBox
            maxWidth='900px'
            height={`calc(${fillHeight('mobile','4em','48px')}`}
            width={`calc(100vw - ${Margins.mobile.horizontal * 2 + Margins.mobile.shadow}px)`}
            horizontalMargin={Margins.mobile.horizontal}
            verticalMargin={Margins.mobile.vertical}
            shadowMargin={Margins.mobile.shadow}
            text={this.props.content}/>

          <ButtonGroup
            horizontalMargin={Margins.mobile.horizontal}
            verticalMargin={Margins.mobile.vertical}
            buttonHeight='48px'
            inactiveButtonWidth='192px'
            inactiveButtonText={this.props.nextButtonText}
            inactiveButtonLink={this.props.nextButtonLink}
            accentButtonWidth='256px'
            accentButtonText={this.props.contactButtonText}
            accentButtonLink='/contact-us'/>
        </MediaQuery>
      </div>
    );
  }
}

export default SimpleTextPage;
