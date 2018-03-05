import React, { Component } from 'react';

import AccentButton from '../../01-atom/buttons/accent-button';
import InactiveButton from '../../01-atom/buttons/inactive-button';

class ButtonGroup extends Component {
  render() {
    const buttons = {
      display: 'flex',
      flexFlow: `${this.props.direction} wrap`,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin:`${this.props.verticalMargin}px ${this.props.horizontalMargin}px`
    }

    var inactiveDisplay = true

    if (this.props.inactiveButtonWidth === '') {
        inactiveDisplay = false
    }

    var accentDisplay = true

    if (this.props.accentButtonWidth === '') {
        accentDisplay = false
    }

    return(

      <div className='button-group' style={buttons}>
        <InactiveButton
          margin='0 32px 24px 0'
          height= {this.props.buttonHeight}
          maxWidth={this.props.inactiveButtonWidth}
          width={this.props.inactiveButtonWidth}
          text={this.props.inactiveButtonText}
          link={this.props.inactiveButtonLink}
          display={inactiveDisplay}/>
        <AccentButton
          margin='0 32px 24px 0'
          height= {this.props.buttonHeight}
          maxWidth={this.props.accentButtonWidth}
          width={this.props.accentButtonWidth}
          text={this.props.accentButtonText}
          link={this.props.accentButtonLink}
          display={accentDisplay}/>
      </div>
    );
  }
}

ButtonGroup.defaultProps = {
  direction: 'column'
};

export default ButtonGroup;
