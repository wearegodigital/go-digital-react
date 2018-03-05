import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';
import _ from 'lodash';

import { fetchPages } from '../../../actions';

import Breakpoints from "../../00-style/breakpoints";

class TaglineSlider extends Component {

  componentDidMount() {
    this.props.fetchPages('homepage');
  }

  renderPages() {

    const { pages } = this.props;

    const heroText = {
      display: 'table-cell',
      verticalAlign: 'middle',
      padding: '0 16px',
      maxWidth: this.props.maxWidth,
    }

    const taglineContainer = {
      height: this.props.height,
      width: this.props.width,
      maxWidth: this.props.maxWidth,
    }

    if(!pages){
      return(
        <div>
          <MediaQuery minWidth={Breakpoints.mobile + 1}>
            <h1 style={heroText}> </h1>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile}>
            <h2 style={heroText}> </h2>
          </MediaQuery>
        </div>
      );
    }

    return _.map(this.props.pages, page => {
      return (
        <div style={taglineContainer} id={`tagline-${page.sort}`}>
          <MediaQuery minWidth={Breakpoints.mobile + 1}>
            <h1 style={heroText}> {page.tagline} </h1>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.mobile}>
            <h2 style={heroText}> {page.tagline} </h2>
          </MediaQuery>
        </div>
      );
    });
  }

  render() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
          <Slider {...settings}>
            {this.renderPages()}
          </Slider>
    );
  }
  }

TaglineSlider.defaultProps = {
  maxWidth: 'width'
};

function mapStateToProps(state){
  return { pages: state.posts.homepage};
}

export default connect(mapStateToProps,{ fetchPages })(TaglineSlider);
