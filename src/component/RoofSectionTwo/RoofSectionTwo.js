import React, { Component } from 'react'
import './RoofSectionTwo.css'
export default class RoofSectionTwo extends Component {
  
        state ={
          data :[
            {customStyle:"col-md-4  text-center  ",font:"fas fa-gopuram",title:'Design & Bulding', parag:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'},
            {customStyle:"col-md-4 text-center  ",font:'fab fa-resolving',title:'Renovate',parag:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'},
            {customStyle:"col-md-4 text-center  ",font:'fas fa-tools',title:'Constrct', parag:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'},
          ]
        }
        render() {
            return (
              <div class="Main_continer">
        <div className="container text-center P_T_B_Main ">
        <div className="">
        <h1 className="pb-3">We Specialized In Construction</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
        <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
            <div className="row mx-0 P_T_B ">
              {this.state.data.map(description =>{
                return(
                    
                  <div className={description.customStyle}>
                  <div className="F_T_S">
                    <li className={description.font}></li>
                      <h4 className="pt-3" >{description.title}</h4>
                      <p className="pt-3">{description.parag}</p>
                    </div>
                    </div>
              
                )
              })}
            </div>
            </div>
            </div>
        
        
            )
          }
        }
        
