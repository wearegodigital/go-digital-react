import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';
import _ from 'lodash';

import { fetchPages } from '../../../actions';

import Breakpoints from "../../00-style/breakpoints";
import Colours from "../../00-style/colours";

class TaglineSlider extends Component {

  componentDidMount() {
    this.props.fetchPages('homepage');
  }

  renderPages() {

    const { pages } = this.props;

    const heroText = {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'left',
      padding: '0 16px',
      maxWidth: this.props.textWidth,
    }

    const placeholderDiv = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }

    function textStyle(width,textWidth,margin,height) {
      return ({
        width: width + 'vw',
        maxWidth: textWidth,
        height: `${height}em`,
        backgroundColor: Colours.secondary,
        opacity: '0.7',
        margin: `${margin}px auto ${margin}px ${margin}px`,
        borderRadius: '4px',
      });
    }

    if(!pages){
      return(
        <div>
          <div style={placeholderDiv}>
            <MediaQuery minWidth={Breakpoints.desktop}>
              <div className="phText" style={textStyle(50,this.props.textWidth,16,6.8)}></div>
              <div className="phText" style={textStyle(45,this.props.textWidth,16,6.8)}></div>
            </MediaQuery>

            <MediaQuery maxWidth={Breakpoints.desktop - 1}>
              <div className="phText" style={textStyle(65,this.props.textWidth,8,4.2)}></div>
              <div className="phText" style={textStyle(75,this.props.textWidth,8,4.2)}></div>
              <div className="phText" style={textStyle(55,this.props.textWidth,8,4.2)}></div>
            </MediaQuery>
          </div>
        </div>
      );
    }

    return _.map(this.props.pages, page => {
      return (
        <div id={`tagline-${page.sort}`}>
          <MediaQuery minWidth={Breakpoints.desktop}>
            <h1 style={heroText}> {page.tagline} </h1>
          </MediaQuery>
          <MediaQuery maxWidth={Breakpoints.desktop-1}>
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

function mapStateToProps(state){
  return { pages: state.posts.homepage};
}

export default connect(mapStateToProps,{ fetchPages })(TaglineSlider);
