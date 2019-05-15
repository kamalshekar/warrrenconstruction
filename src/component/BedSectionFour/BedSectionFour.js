import React, { Component } from 'react'
import Back from '../../images/Chelsea.png';
import Back1 from '../../images/lamp.png';
import './BedSectionFour.css';
export default class BedSelectionFour extends Component {
  render() {
    return (
      <div className="row mx-0  P_A">
      
      <div className="col-md-6">
      <div className="B_X">
      </div>
      <div className="Imag">
      <img className="G_Img" src={Back} alt=" slide"/> 
      </div>
      <div>
      <h2 className="H_TEX">Chair</h2>
      <h2 className="P_TEX">special Chair</h2>
      <p className="P_TEXT">special Chair</p>
      </div>
      
      
      </div>
      <div className="col-md-6">
      <h2 className="R_Text_lamp">Hagging Lamp</h2>
      <img className="G_Img_lamp" src={Back1} alt=" slide"/> 
      <div className="B_X_Lamp ">
     
      </div>
      </div>  
      
      <div className="col-md-6">
      <div className="B_X">
      </div>
      <div className="Imag">
      <img className="G_Img" src={Back} alt=" slide"/> 
      </div>
      <div>
      <h2 className="H_TEX">Chair</h2>
      <h2 className="P_TEX">special Chair</h2>
      <p className="P_TEXT">special Chair</p>
      </div>
      
      
      </div>
      <div className="col-md-6">
      <div className="B_X-F">
      </div>
      <h2 className="F_Text">Furniture</h2>
      </div>
      </div>
    )
  }
}
