import React, { Component } from 'react';

import AccentFormButton from '../../01-atom/buttons/accent-form-button';

class FormButtonGroup extends Component {
  render() {
    const buttons = {
      display: 'flex',
      flexFlow: `${this.props.direction} wrap`,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin:`${this.props.verticalMargin}px ${this.props.horizontalMargin}px`
    }

    var accentDisplay = true

    if (this.props.accentButtonWidth === '') {
        accentDisplay = false
    }

    return(

      <div className='button-group' style={buttons}>
        <AccentFormButton
          margin='0 32px 24px 0'
          height= {this.props.buttonHeight}
          maxWidth={this.props.accentButtonWidth}
          width={this.props.accentButtonWidth}
          text={this.props.accentButtonText}
          display={accentDisplay}/>
      </div>
    );
  }
}

FormButtonGroup.defaultProps = {
  direction: 'column'
};

export default FormButtonGroup;
