import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import MediaQuery from 'react-responsive';

import SimpleTextPage from '../04-template/simple-text-page';
import PlaceholderText from '../01-atom/placeholder/text';
import InlineButton from '../01-atom/buttons/inline-button';
import Breakpoints from "../00-style/breakpoints";

import { fetchPage } from '../../actions';

class AboutUs extends Component {
  componentDidMount(){
      this.props.fetchPage('about_us');
    }

  render() {

    const { page } = this.props;

    if(!page){
      return(
        <div className='container'>
          <SimpleTextPage
            header=''
            content={<PlaceholderText />}
            buttonWidth='224px'
            contactButtonText=''
            nextButtonText=''
            nextButtonLink=''
          />
        </div>
      );
    }

    const content =   <div className="cms-content">
                        <div className={page.subheader_text_colour}>
                          <MediaQuery minWidth={Breakpoints.mobile}>
                            <h3> {page.subheader_text} </h3>
                          </MediaQuery>
                          <MediaQuery maxWidth={Breakpoints.mobile - 1}>
                            <h4> {page.subheader_text} </h4>
                          </MediaQuery>
                        </div>
                        <div className={page.body_text_colour}>
                          {ReactHtmlParser(page.body_text)}
                        </div>
                        <MediaQuery minWidth={Breakpoints.mobile}>
                          <InlineButton
                            width='224px'
                            height='64px'
                            link='/team'
                            text='Our Team' />
                        </MediaQuery>
                        <MediaQuery maxWidth={Breakpoints.mobile - 1}>
                          <InlineButton
                            width='224px'
                            height='48px'
                            link='/team'
                            text='Our Team' />
                        </MediaQuery>
                      </div>

    return(

      <div className='container'>
        <SimpleTextPage
          header={page.header_text}
          content={content}
          buttonWidth='224px'
          contactButtonText='Get In Touch!'
          nextButtonText='What We Do'
          nextButtonLink='/services'
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { page: state.posts.about_us};
}

export default connect(mapStateToProps,{ fetchPage })(AboutUs);
