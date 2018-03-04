import React, { Component } from 'react';

import AccentButton from '../../01-atom/buttons/accent-button';
import InactiveButton from '../../01-atom/buttons/inactive-button';

class ButtonGroup extends Component {
  render() {
    const buttons = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin:`${this.props.verticalMargin}px ${this.props.horizontalMargin}px`
    }

    return(

      <div className='button-group' style={buttons}>
        <InactiveButton
          margin='0 32px 24px 0'
          height= {this.props.buttonHeight}
          maxWidth={this.props.buttonMaxWidth}
          width={this.props.buttonWidth}
          text={this.props.inactiveButtonText}
          link={this.props.inactiveButtonLink}  />
        <AccentButton
          margin='0 32px 24px 0'
          height= {this.props.buttonHeight}
          maxWidth={this.props.buttonMaxWidth}
          width={this.props.buttonWidth}
          text={this.props.accentButtonText}
          link={this.props.accentButtonLink}/>
      </div>
    );
  }
}

export default ButtonGroup;
