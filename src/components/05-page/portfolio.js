import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import HeaderBox from '../01-atom/boxes/header-box';
import TextBox from '../01-atom/boxes/text-box';
import ClientCard from '../01-atom/cards/client-card';
import AccentButton from '../01-atom/buttons/accent-button';
import InactiveButton from '../01-atom/buttons/inactive-button';

import Colours from "../00-style/colours";
import Breakpoints from "../00-style/breakpoints";

import c4c from '../../assets/img/clients/c4c.png';

class Portfolio extends Component {
  render() {

    const buttonGroup = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }

    const text =  <div>
                    <h3 className='secondaryColour'> Go Digital, a bespoke digital agency </h3>
                    <p className='blackColour'> Lorem ipsum dolor sit amet, mnesarchum consequuntur vel id, aliquam accommodare cum cu, eu est civibus eligendi luptatum. Vero bonorum torquatos ex duo, ut mel putant appetere, mei facilisi interpretaris te. Ei eam ornatus invidunt scriptorem, alterum admodum mea in. Has fastidii rationibus argumentum ne, usu libris verear in. Quo rebum vocent ponderum at, est an illum paulo. Pericula abhorreant his in, atomorum imperdiet te sit.</p>

                    <p className='blackColour'> Saepe suscipit inciderint cu nec, laudem postea officiis eum ad. Eos ei albucius invidunt, nec animal numquam ea. Duo malis eleifend conclusionemque at, sed democritum contentiones necessitatibus ex. Ea ridens vocent eum.</p>

                    <p className='blackColour'> Nec sumo nibh consequat ea, ne forensibus definiebas sed. Duo partem invidunt in, sit no veniam eirmod. Vitae quodsi patrioque eum ei. Te rebum denique consequat pro. Te affert essent laoreet cum. Has ex molestiae voluptatum.</p>
                  </div>

    return(
      <div className="container">
        <MediaQuery minWidth={Breakpoints.desktop}>
            <HeaderBox
              height='6em' width='60%' maxWidth='300px'
              margin='32px 64px' shadowMargin='16px'
              shadowColour={Colours.primary} borderColour={Colours.primary} fillColour={Colours.white}
              text='Portfolio'/>

            <ClientCard
              height='40vh' width='calc(100%-128px)' maxWidth='900px'
              margin='48px 96px 48px 64px' shadowMargin='16px'
              text='Create For Causes'
              backgroundImage={c4c}/>

              <div style={{...buttonGroup,...{margin:'48px 64px'}}}>
                <InactiveButton height='64px' width='192px' maxWidth='300px' text='Test Button'
                  margin='16px 32px 16px 0' />
                <AccentButton height='64px' width='192px' maxWidth='300px' text='Test Button'
                  margin='16px 32px 16px 0' />
              </div>
        </MediaQuery>
        <MediaQuery minWidth={Breakpoints.mobile} maxWidth={Breakpoints.desktop - 1}>
            <HeaderBox
              height='6em' width='80%' maxWidth='300px'
              margin='32px 32px' shadowMargin='16px'
              shadowColour={Colours.primary} borderColour={Colours.primary} fillColour={Colours.white}
              text='Portfolio'/>

            <TextBox
              height='40vh' width='calc(100%-64px)' maxWidth='900px'
              margin='48px 48px 32px 32px' shadowMargin='16px'
              shadowColour={Colours.secondary} borderColour={Colours.secondary} fillColour={Colours.white}
              text={text}/>
              <div style={{...buttonGroup,...{margin:'32px'}}}>
                <InactiveButton height='64px' width='192px' maxWidth='300px' text='Test Button'
                  margin='16px 32px 16px 0' />
                <AccentButton height='64px' width='192px' maxWidth='300px' text='Test Button'
                  margin='16px 32px 16px 0' />
              </div>
        </MediaQuery>
        <MediaQuery maxWidth={Breakpoints.mobile - 1}>
            <HeaderBox
              height='64px' width='240px' maxWidth='240px'
              margin='16px 40px 32px 32px' shadowMargin='8px'
              shadowColour={Colours.primary} borderColour={Colours.primary} fillColour={Colours.white}
              text='Portfolio'/>

            <TextBox
              height='40vh' width='calc(100%-48px)' maxWidth='900px'
              margin='16px 40px 16px 32px' shadowMargin='8px'
              shadowColour={Colours.secondary} borderColour={Colours.secondary} fillColour={Colours.white}
              text={text}/>
              <div style={{...buttonGroup,...{margin:'16px 32px'}}}>
                <InactiveButton height='40px' width='192px' maxWidth='300px' text='Test Button'
                  margin='16px 32px 16px 0' />
                <AccentButton height='40px' width='192px' maxWidth='300px' text='Test Button'
                  margin='16px 32px 16px 0' />
              </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Portfolio;
