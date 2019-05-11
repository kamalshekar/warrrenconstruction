import React, { Component } from 'react'
import './ServiceSectionSix.css'
import { Button, ButtonToolbar,  } from 'react-bootstrap';
export default class ServiceSectionSix extends Component {
  render() {
    return (
      <div class="row mx-0 st-pt-m">
      <div class="col-md-6 st-pt">
      <div class="t-text">
      <h1>Ready To Become More Successfull?</h1>
      <hr class="hr-sty"/>
      <div class="pt-5">
      <p>Amazing Feature But - Credit Card Required</p>
      </div>
    </div>
      </div>
      <div class="col-md-6 st-pt-sec ">
      
      <div class="btn-section btn-edit">
        <ButtonToolbar>
  <Button className="btn-suces btn-suces-su" variant="success">14 Days Free Trail</Button>
  <Button  className="btn-pry" variant="primary">Request Free Demo</Button>
 </ButtonToolbar>
        </div>
      </div>
        
      </div>
    )
  }
}
