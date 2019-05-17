import React, { Component } from 'react'
import wallpaper from '../../images/yellowcap.png';
import './RoofSectionFive.css'

import { Button, ButtonToolbar,  } from 'react-bootstrap';
var sec = {
    width: "100%",
    height: "80vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  
    backgroundImage: `url(${wallpaper})`
    
  };
export default class RoofSectionFive extends Component {
    
  render() {
    return (
      <div className="row mx-0">
      <div className="col-md-6" style={sec}>
      </div>
      <div className="col-md-6 Sub-text-cont">
    
     <div>
    <h1>Florida modern city</h1>
    <p className="pt-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
    <ButtonToolbar>
  <Button className="btn-suces " variant="success">More About Us</Button>

 </ButtonToolbar>
  </div>
     
      </div>
      </div>
    )
  }
}
