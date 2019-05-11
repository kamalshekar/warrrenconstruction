import React, { Component } from 'react'
import { Button, ButtonToolbar,  } from 'react-bootstrap';
import './ServiceSecOne.css'
import Backgroundimage from '../../images/chat.png';

var sectionStyling = {
  width: "100%",
 
  

  backgroundSize:"contain" ,
  
  backgroundPosition: "center",
  

 
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Backgroundimage})`
  
};
export default class AbourSecOne extends Component {
  render() {
    return (
      <div   class="row mx-0 m-r col-md-12 mt-5">
     
      <div class="col-md-7  colum-section">
      
        <div className="opt-section">
        <h1 className="font-weight">Optimize Your Service Bussiness!</h1>
        <p className="pt-3">Lorem ipsum donec id elit  at egetLorem ipsum donec id elit  at egetLorem ipsum donec id elit  at eget.</p>
        </div>
        <div className="btn-section pt-5">
        <ButtonToolbar>
  <Button className="btn-suces " variant="success">14 Days Free Trail</Button>
  <Button  className="btn-pry" variant="primary">Request Free Demo</Button>
 </ButtonToolbar>
        </div>
      </div>
      <div style={ sectionStyling } class="col-md-5 d-n">
      dsadasdasdfdsfsdfdf
      </div>
      {/* <div class="col-md-6 p-0 ">
     
      </div> */}
    
      </div>
    )
  }
}
