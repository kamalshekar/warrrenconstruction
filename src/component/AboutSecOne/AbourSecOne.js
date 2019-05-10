import React, { Component } from 'react'
import { Button, ButtonToolbar,  } from 'react-bootstrap';
import './AboutSecOne.css'
export default class AbourSecOne extends Component {
  render() {
    return (
      <div class="row">
      <div class="col-md-6 p-5 colum-section">
        <div className="opt-section">
        <h1>Optimize Your Service Bussiness!</h1>
        <p>Lorem ipsum donec id elit  at egetLorem ipsum donec id elit  at egetLorem ipsum donec id elit  at eget.</p>
        </div>
        <div className="btn-section">
        <ButtonToolbar>
  <Button className="btn-success" variant="success">Success</Button>
  <Button  className="btn-primary" variant="primary">Primary</Button>
 </ButtonToolbar>
        </div>
      </div>

      </div>
    )
  }
}
