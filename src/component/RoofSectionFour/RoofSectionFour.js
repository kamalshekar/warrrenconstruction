import React, { Component } from 'react'
import { Button, ButtonToolbar,  } from 'react-bootstrap';
import './RoofSectionFour.css'
import wallpaper from '../../images/pant.png';
export default class RoofSectionFour extends Component {
    render() {
        return (
            <div className="row mx-0 Main_Section_BtPadding Main_continer">
                <div className="col-lg-6 Florida_Content_center">
      <div>
        <h1>Why  Choose Us </h1>
        <p className="pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
        <div className="row mx-0">
        <div className="col-sm-6 p-0">
        <ul className="Ul_Float p-0">
            <li><i class="fas fa-user-cog"></i></li>
            <li>Great Services</li>
            </ul>
            <ul className="Ul_Float p-0 ">
            <li><i class="fas fa-rocket"></i></li>
            <li></li>High Quality
            </ul>
       
        </div>
        <div className="col-sm-6 p-0">
        <ul className="Ul_Float p-0">
           
            <li><i class="fas fa-users"></i></li>
            <li>Perfessional Team</li>
            </ul>
            <ul className="Ul_Float p-0">
            <li><i class="fas fa-clock"></i></li>
            <li>Timely Delivery</li>
            </ul>
        </div>
        </div>
        <ButtonToolbar>
      <Button className="btn-suces mt-5" variant="success">More About Us </Button>
    
     </ButtonToolbar>
      </div>
         </div>
      <div class="col-lg-6 p-0">
      <div className="Box_c_Sub" ></div>
      <div className="row mx-0">
      <div class="col-lg-6 col-md-6 p-0">
      <img
      className="d-block w-100 Image-Stying_top"
      src={wallpaper}
      alt="First slide"
    />
      
      </div>
     
    
          <div class="col-lg-6 col-md-6 Carousel_Padding_Left">
        
   

          </div>
          </div>
          </div>
      
         </div>
      
        )
      }
    }
    