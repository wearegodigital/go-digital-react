import React, { Component } from 'react';

import NavLeftButton from '../../01-atom/buttons/nav-left-button';
import NavRightButton from '../../01-atom/buttons/nav-right-button';

class NavButtonGroup extends Component {
  render() {
    const buttons = {
      display: 'flex',
      flexFlow: `row nowrap`,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      margin:`${this.props.verticalMargin}px ${this.props.horizontalMargin}px`,
      height:this.props.height
    }

    return(

      <div className='nav-button-group' style={buttons}>
        <NavLeftButton
          scrollAmount={this.props.scrollAmount}
          scrollArea={this.props.scrollArea}/>

        <NavRightButton
          scrollAmount={this.props.scrollAmount}
          scrollArea={this.props.scrollArea}/>
      </div>
    );
  }
}

export default NavButtonGroup;
