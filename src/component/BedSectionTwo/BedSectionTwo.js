import React, { Component } from 'react'
import Background from '../../images/men.png';
import './BedSectionTwo.css';
var sectionSe = {
  width: "100%",
  height: "70vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",

  backgroundImage: `url(${Background})`
  
};
export default class BedSectionTwo extends Component {
  render() {
    return (
        <div className="row mx-0 ">
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
      <div className="col-md-6" style={sectionSe}>
      
      </div>
      </div>
    )
  }
}
