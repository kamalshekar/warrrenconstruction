import React, { Component } from 'react'
import Background from '../../images/lab.png';
import './BedSectionFive.css';
var sectionSec = {
  width: "100%",
  height: "70vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",

  backgroundImage: `url(${Background})`
  
};
export default class BedSelectionFive extends Component {
  render() {
    return (
        <div className="row mx-0 R_W_o R-w">
        <div className="col-md-6" style={sectionSec}>
      
      </div>
      <div className="col-md-6 Text_C ">
      <div className="">
      <h2 >O_HOc</h2>
    <p className="pt-3">Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget  Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget </p>
          </div>
      </div>
      
      </div>
    )
  }
}
