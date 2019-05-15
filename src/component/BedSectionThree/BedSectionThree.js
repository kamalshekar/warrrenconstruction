import React, { Component } from 'react'
import './BedSectionThree.css';

import Background1 from '../../images/black.png';
export default class BedSectionThree extends Component {
  render() {
    return (
        <div className="row mx-0 pb-stlye ">
        <div className="col-sm-12 col-md-3 p-3 text-center Text_Doc ">
      <div className="text-center">
      <h2 >O_HOc</h2>
    <p className="pt-3">Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget
         
          Lorem ipsum donec id elit  at eget
          Lorem ipsum donec id elit  at eget </p>
          </div>
      </div>
      <div class=" col-sm-4 col-md-3">
    <div class="hovereffect">
        <img class="img-responsive" src={Background1} alt=""/>
            <div class="overlay">
                <h1 className="Chair_color">Chair</h1>
				
					<h1 className="Chair_color pt-3">$78</h1>
				
            </div>
    </div>
</div>
<div class="col-sm-4 col-md-3 ">
    <div class="hovereffect">
        <img class="img-responsive" src={Background1} alt=""/>
            <div class="overlay">
            <h1 className="Chair_color">Chair</h1>
				
                <h1 className="Chair_color pt-3">$78</h1>
            </div>
    </div>
</div>
<div class="col-sm-4 col-md-3 ">
    <div class="hovereffect">
        <img class="img-responsive" src={Background1} alt=""/>
            <div class="overlay">
            <h1 className="Chair_color">Chair</h1>
				
                <h1 className="Chair_color pt-3">$78</h1>
            </div>
    </div>
</div>
</div>
    )
  }
}
