import React, { Component } from 'react'
import './RoofSectionOne.css'
import Background from '../../images/cap.png';

var sec = {
  width: "100%",
  height: "80vh",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",

  backgroundImage: `url(${Background})`
  
};
// import { directive } from '@babel/types';
export default class RoofSectionOne extends Component {
    state ={
        data :[
          {fontawsme:'fas fa-person-booth',parag:'Year Experience',num:'10'},
          {fontawsme:'fas fa-user-clock',parag:'Trained Member',num:'60'},
          {fontawsme:'fab fa-quinscape',parag:'Project Finished',Fon:"font-size:2.3rem",num:'100'},
          {fontawsme:'fas fa-heart',parag:'Total Employee',num:'60'}
        ]
      }
  render() {
    return (
           
        
                <div className="row mx-0">
                <div className="col-lg-1">
                </div>
            <div className="col-lg-5 col-sm-12"style={sec} >
         
         
            </div>
           
            <div className="col-lg-6 C_M">
         <h1 className="pb-3">Create Buliding Innovaction</h1>
         <p className="P_Blo ">
             we're proud not to be stuido that only works in particular section</p>
            <div className="row">
        
            {this.state.data.map(description =>{
            return(
                <div className="col-lg-6 col-md-6">
                <div className="  I_B ">
                <i class="fon" className={description.fontawsme}>
                </i>
              <div className="I_B_S">
           
              <p className="mb-0 ">{description.parag}</p>
              <p className="mb-0">
                    {description.num}
              </p>
              </div>
             </div>
            {/* <ul>
                <li className={description.fontawsme}></li>
                <li></li>
                <li></li>
            </ul> */}
  
              
                
          </div>
            )
          })}
            </div>
            
            </div>
            </div>
     
         
    )
      }
    }

   
    