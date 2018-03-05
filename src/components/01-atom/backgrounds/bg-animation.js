import React, { Component } from 'react';
import Colours from '../../00-style/colours.js';
import '../../00-style/animation/animation.css';

class BackgroundAnimation extends Component {

  constructor() {
     super();
     this.state = { shadowMargin : '0px',
                    fillColour: Colours.secondary,
                    textColour: Colours.white,
                    }
   }


  render() {
    var shapes = [];
    var shapeClass = '';

    for (var i = 1; i <= 50; i ++) {
        shapeClass = 'shape-container--' + i
        shapes.push(<div className={shapeClass}><div className='random-shape'></div></div>);
    }

    return (
      <div className='background'>
          <div className='inner-background'>
              <div className='shape'>
                  {shapes}
              </div>
          </div>
      </div>
    );
  }
}

export default BackgroundAnimation;
