import React, { Component } from 'react'
import { Form, Button,  } from 'react-bootstrap';
import './BedSectionSeven.css';
import Background from '../../images/wall.png';

var SectionS = {
  width: "100%",
  height: "81vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",

  backgroundImage: `url(${Background})`
  
};
export default class BedSectionSeven extends Component {
  render() {
    return (
        <div className="row mx-0 RW_BG">
      <div className="col-md-6 W_H_F">
      
            <div className="B_W">
            <h1>Application Form </h1>
            <p>Lerom firn piutn cmfdj</p>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
    <Button class="B_" variant="primary" type="submit">
    Submit
  </Button>
  <Form.Text className="text-muted pt-3">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

 
</Form>
      </div>
      </div>
      <div className="col-md-6" style={SectionS}>
      
      
      
      </div>
      </div>
    )
  }
}
