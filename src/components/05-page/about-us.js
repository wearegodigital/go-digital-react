import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import SimpleTextPage from '../04-template/simple-text-page';
import PlaceholderText from '../03-organism/content/placeholder-text';
import { fetchPage } from '../../actions';

class AboutUs extends Component {
  componentDidMount(){
      this.props.fetchPage('about_us');
    }

  render() {

    const { page } = this.props;

    if(!page){
      return(
        <div className="container">
          <SimpleTextPage
            header=""
            content={<PlaceholderText />}
            buttonWidth="224px"
            contactButtonText=""
            nextButtonText=""
            nextButtonLink=""
          />
        </div>
      );
    }

    const content =   <div>
                        <div className={page.subheader_text_colour}>
                          <h3> {page.subheader_text} </h3>
                        </div>
                        <div className={page.body_text_colour}>
                          {ReactHtmlParser(page.body_text)}
                        </div>
                      </div>

    return(

      <div className="container">
        <SimpleTextPage
          header={page.header_text}
          content={content}
          buttonWidth="224px"
          contactButtonText={page.contact_us_button_text}
          nextButtonText={page.next_page_button_text}
          nextButtonLink={page.next_page}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { page: state.posts.about_us};
}

export default connect(mapStateToProps,{ fetchPage })(AboutUs);
