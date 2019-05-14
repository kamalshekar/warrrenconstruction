import React, { Component } from 'react'
import './ServiceSectionEight.css';
import { Accordion , Card,  Dropdown } from 'react-bootstrap';

export default class ServiceSectionEight extends Component {
    state={
        frist:true,
    }
    frist=()=>
    {
        this.setState({
            frist:!this.state.frist
        }
            )
    }

  render() {
    return (
        <>
        <div class="row  mx-0">
      <div class="col-sm-12 Main-Box-div">
      <div class="box-div">
  
      </div>
      </div>
      <div class="col-sm-12 Main-Box-div pt-3">
      <div class="Sub-box-div">
  
      </div>
      </div>
      <div class="col-sm-12 Main-Box-div pt-3">
      <div class="Sub-box-text text-center">
  <h2>Frequetly Asked Question</h2>
  <h2>Based Industries</h2>
  <hr class="set-w"/>
  <h2 class="d-set-d"></h2>
      </div>
      </div>
      </div>

     
    
     
           <div class="container C-class">
        <div className="row mx-0">
    
      <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div>
  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div>

  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div> 
  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div> 
  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div> 
  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div> 
  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div> 
  <div class="col-md-6 pt-5 accor" >
      <Accordion >
  <Card>
    <Accordion.Toggle  onClick={this.frist} as={Card.Header} eventKey={this.state.frist?"1":"0"}>
      Are There any commitments or contracts
      <i class="fas fa-chevron-down F-T-N"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="p-3"><p>There are no commitmenst <br/> <br/> <br/>
      if you sign up service bull monthly subscription you can cancel yout subscription at any time without penality.if you sign up for an annual subscription you are billed for the entire year at the start of your subscription<br/> <br/> <br/>
      Ther will be refounds or credits for partial months of service upgrade or downgrade refunds for months unused <br/><br/> <br/> 
      Review our terms of service for more information
     </p></div>
      

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
  </div> 
    </div>
       </div>
       </>
    )
  }
}
