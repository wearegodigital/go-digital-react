import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Colours from '../../00-style/colours';
import Breakpoints from '../../00-style/breakpoints';
import Margins from '../../00-style/margins';
import ImageBox from '../../01-atom/boxes/image-box';
import TextBox from '../../01-atom/boxes/text-box';

class TeamMember extends Component {

  render() {

    const cardDimensions = {
      height: `calc(${this.props.height})`,
      maxHeight: `calc(${this.props.width})`,
      minHeight: '200px',
      width: `calc(${this.props.width})`,
      maxWidth: `calc(${this.props.maxWidth})`,
      display: 'flex',
      flexFlow: `${this.props.direction} nowrap`,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }

    const cardContainer = {...{
      display: 'block',
      position: 'relative',
      flex: '0 0 auto',
      margin: this.props.margin,
    },...cardDimensions}

    return (
      <div style={cardContainer} className='team-member' id={`team-member-${this.props.id}`}>

        <ImageBox
          height={`calc(((${this.props.width}))/3 - (${this.props.horizontalMargin}px))`}
          width={`calc(((${this.props.width}))/3 - (${this.props.horizontalMargin}px))`}
          maxWidth={`calc(((${this.props.maxWidth}))/3 - (${this.props.horizontalMargin}px))`}
          maxHeight={`calc(((${this.props.maxWidth}))/3 - (${this.props.horizontalMargin}px))`}
          horizontalMargin={this.props.horizontalMargin}
          verticalMargin={0}
          shadowMargin={this.props.shadowMargin}
          image={this.props.image}
          displayPlaceholder={this.props.displayPlaceholder} />

        <TextBox
          height={`calc(${this.props.height} - 32px)`}
          width={`calc((2*(${this.props.width}))/3 - (${this.props.horizontalMargin}px))`}
          maxWidth={`calc((2*(${this.props.maxWidth}))/3 - (${this.props.horizontalMargin}px))`}
          minHeight={'200px'}
          horizontalMargin={0}
          verticalMargin={0}
          shadowMargin={this.props.shadowMargin}
          text={this.props.content}/>

      </div>
    );
  }
}

TeamMember.defaultProps = {
  displayPlaceholder: false,
  direction: 'row'
};

export default TeamMember;
