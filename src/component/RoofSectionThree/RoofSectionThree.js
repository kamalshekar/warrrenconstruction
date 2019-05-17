import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import paint  from '../../images/table.png';
import wallpaint from '../../images/tea.png';
import wallpaper from '../../images/pant.png';
import './RoofSectionThree.css'
import { Button, ButtonToolbar,  } from 'react-bootstrap';
export default class RoofSectionThree extends Component {
  render() {
    return (
        <div className="row mx-0 Main_Section_BtPadding">
  <div class="col-lg-6 p-0">
  <div className="Box_c" ></div>
  <div className="row mx-0">
  <div class="col-lg-6 col-md-6">
 
 
  </div>
 

      <div class="col-lg-6 col-md-6 Carousel_Padding_bottom">
    
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={paint}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wallpaint}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wallpaper}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      </div>
      </div>
      <div className="col-lg-6 Florida_Content_center">
  <div>
    <h1>Florida modern city</h1>
    <p className="pt-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
    <ButtonToolbar>
  <Button className="btn-suces " variant="success">View Project</Button>

 </ButtonToolbar>
  </div>
     </div>
     </div>
  
    )
  }
}
