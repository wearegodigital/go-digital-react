import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import MediaQuery from 'react-responsive';
import _ from 'lodash';

import { fetchPages } from '../../../actions';

import Breakpoints from "../../00-style/breakpoints";
import PlaceholderText from '../../01-atom/placeholder/text';
import TeamMember from '../../02-molecule/cards/team-member-card';
import ClientCard from '../../02-molecule/cards/client-card';

class TeamMembers extends Component {
  componentDidMount() {
    this.props.fetchPages('team');
  }

  renderPages() {

    const { pages } = this.props;

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
      margin: `0 ${this.props.horizontalMargin}px 0 0`
    },...cardDimensions}

    if(!pages){
      return(
        <div style={cardContainer} className={`card-container-placeholder`}>
          <MediaQuery minWidth={Breakpoints.mobile}>
            <TeamMember
              height={this.props.height}
              width={this.props.width}
              maxWidth={this.props.maxWidth}
              horizontalMargin={this.props.horizontalMargin}
              shadowMargin={this.props.shadowMargin}
              id="placeholder-client-card"
              content={<PlaceholderText />}
              image=''
              displayPlaceholder={true} />
          </MediaQuery>

          <MediaQuery maxWidth={Breakpoints.mobile - 1}>
            <ClientCard
              height={`calc(${this.props.height})`}
              width={this.props.width}
              maxWidth={this.props.maxWidth}
              margin={`0 ${this.props.horizontalMargin}px 0 0`}
              shadowMargin={this.props.shadowMargin}
              title=''
              id="placeholder-client-card"
              clientDescription={<PlaceholderText />}
              hoverHeader=''
              backgroundImage=''
              displayPlaceholder={true} />
            </MediaQuery>
          </div>
      );
    }

    return _.map(this.props.pages, page => {

      const content = <div>
                        <div className='primaryColour'>
                          <h3 style={{padding:'0.3em 0 0 0',fontWeight:'700'}}> {page.first_name} </h3>
                          <h3 style={{padding:'0 0 0.3em 0',fontWeight:'700'}}> {page.last_name} </h3>
                        </div>

                        <div className='secondaryColour'>
                            <h4 style={{padding:'0 0 0.3em 0'}}> {page.position} </h4>
                        </div>

                        <div className='primaryColour'>
                            <h4 style={{padding:'0.3em 0 0.3em 0',fontWeight:'300'}}> Written By {page.writers_name} </h4>
                        </div>

                        <div className='blackColour'>
                          {ReactHtmlParser(page.description)}
                        </div>

                        <div>
                            <h4 className='primaryColour'>Fun Facts: </h4>
                          <ol>
                            <li className='secondaryColour' style={{fontWeight:'500'}}>
                                <p style={{fontWeight:'500'}}> {page.fun_fact_1} </p>
                            </li>
                            <li className='secondaryColour' style={{fontWeight:'500'}}>
                                <p style={{fontWeight:'500'}}> {page.fun_fact_2} </p>
                            </li>
                            <li className='secondaryColour' style={{fontWeight:'500'}}>
                                <p style={{fontWeight:'500'}}> {page.fun_fact_3} </p>
                            </li>
                          </ol>
                        </div>
                      </div>

      return (
        <div style={cardContainer} className='card-container' id={`card-container-${page.id}`}>
          <MediaQuery minWidth={Breakpoints.mobile}>
            <TeamMember
              height={this.props.height}
              width={this.props.width}
              maxWidth={this.props.maxWidth}
              horizontalMargin={this.props.horizontalMargin}
              shadowMargin={this.props.shadowMargin}
              id={page.id}
              image={`http://directus.wearegodigital.com${page.member_image.data.url}`}
              content={content}/>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile - 1}>
            <ClientCard
              height={`calc(${this.props.height})`}
              width={this.props.width}
              maxWidth={this.props.maxWidth}
              margin={`0 ${this.props.horizontalMargin}px 0 0`}
              shadowMargin={this.props.shadowMargin}
              title={page.first_name + ' ' + page.last_name}
              hoverHeader='Find Out More'
              id={page.id}
              backgroundImage={`http://directus.wearegodigital.com${page.member_image.data.url}`}
              clientDescription={content}/>
          </MediaQuery>
        </div>
      );
    });
  }

  render() {

    const cardContainer = {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'flex-start',

      width:'auto',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      msOverflowStyle: '-ms-autohiding-scrollbar',
      padding: `0px ${this.props.horizontalMargin + (this.props.shadowMargin*2)}px ${this.props.shadowMargin+8}px ${this.props.horizontalMargin}px`
    }

    return(
        <div className="card-container" style={cardContainer}>
            {this.renderPages()}
        </div>
    );
  }
}

function mapStateToProps(state){
  return { pages: state.posts.team};
}

export default connect(mapStateToProps,{ fetchPages })(TeamMembers);
