import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import MediaQuery from 'react-responsive';

import { fetchPages } from '../../../actions';

import Colours from "../../00-style/colours";
import Breakpoints from "../../00-style/breakpoints";
import PlaceholderText from '../../01-atom/placeholder/text';
import ClientCard from '../../02-molecule/cards/client-card';

class ClientCards extends Component {
  componentDidMount() {
    this.props.fetchPages('portfolio');
  }

  renderPages() {

    const { pages } = this.props;

    if(!pages){
      return(
        <ClientCard
          height={this.props.height}
          width={this.props.width}
          maxWidth={this.props.maxWidth}
          margin={`0 ${this.props.horizontalMargin}px ${this.props.shadowMargin}px 0`}
          shadowMargin={this.props.shadowMargin}
          title=''
          clientDescription={<PlaceholderText />}
          hoverHeader=''
          backgroundImage='' />
      );
    }

    return _.map(this.props.pages, page => {
      return (

        <ClientCard
          height={this.props.height}
          width={this.props.width}
          maxWidth={this.props.maxWidth}
          margin={`0 ${this.props.horizontalMargin}px ${this.props.shadowMargin}px 0`}
          shadowMargin={this.props.shadowMargin}
          title={page.client_name}
          hoverHeader={page.hover_text}
          id={page.id}
          backgroundImage={`http://directus.wearegodigital.com${page.cover_photo.data.url}`}
          clientDescription={<div>
                              <div className='secondaryColour'>
                                <MediaQuery minWidth={Breakpoints.mobile}>
                                  <h3> {page.client_name} </h3>
                                </MediaQuery>
                                <MediaQuery maxWidth={Breakpoints.mobile - 1}>
                                  <h4> {page.client_name} </h4>
                                </MediaQuery>
                              </div>
                              <div className='blackColour'>
                                {ReactHtmlParser(page.client_description)}
                              </div>
                            </div>}/>
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
      padding: `0px ${this.props.horizontalMargin + (this.props.shadowMargin*2)}px ${this.props.shadowMargin}px ${this.props.horizontalMargin}px`
    }

    return(
        <div className="card-container" style={cardContainer}>
          {console.log(this.props.shadowMargin)}
            {this.renderPages()}
        </div>
    );
  }
}

function mapStateToProps(state){
  return { pages: state.posts.portfolio};
}

export default connect(mapStateToProps,{ fetchPages })(ClientCards);
