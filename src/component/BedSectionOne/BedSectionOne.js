import React, { Component } from 'react'
import Chair from '../../images/chair.png';
import './BedSectionOne.css';
import Background from '../../images/sand.jpg';

var sectionS = {
  width: "100%",
  height: "81vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",

  backgroundImage: `url(${Background})`
  
};
export default class BedSectionOne extends Component {
  render() {
    return (
       
      
      <div className="col-md-12 p-0 ">
<div className="  containe9r">
<div className="row mx-0 M_Row_M">
      <div className="Img-Sec ">
      {/* <div className="Text_sec"> */}
      <h1 className="T-HStye">GO<span className="Span-Col">OSE</span></h1>
    
      <img
            className="Image-S"
            src={Chair}
            width="50%"
            height=""    
          

            alt="First slide"
          />
      </div>

      <div   className="col-md-6 Col-Bg M_Row">

      </div>
        <div className="col-md-6 Col-Bg-Sub">
        <div className="Sub-Col-Tex">
    Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
