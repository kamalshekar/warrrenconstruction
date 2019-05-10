import React, { Component } from 'react'
// import backimage from '../../images/SelectionS.png';
import './SelectionSix.css';
import Background from '../../images/nature.jpg';

var sectionStyling = {
  width: "100%",
  height: "74vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",

  backgroundImage: `url(${Background})`
  
};
export default class SelectionSix extends Component {
  render() {
    return (
      <div className="main-contianer  p-0 pt-5 mx-0 " >
      <section style={ sectionStyling }>
     
          <div className="sub-containerdiv p-3 col-sm-6 col-md-6 col-lg-3 col-xs-4">
          <div className="info-text">
          <p>Lorem ipsum donec id elit  at eget Lorem ipsum donec id elit  at eget Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
           metus.</p>
           <div className="sub-inner-text">
           <h4 class="txt-colr"><span class="line-border mr-3"> </span>Subash krish</h4>
           </div>

          </div>
                  
                </div>
                </section>
      </div>
    )
  }
}
