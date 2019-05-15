import React, { Component } from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import Background2 from '../../images/coffe.png';
import Background3 from '../../images/pant.png';
import Background4 from '../../images/tea.png';
import Background5 from '../../images/farniture.png';
import Background6 from '../../images/table.png';
import './BedSectionSix.css'
export default class BedSectionSix extends Component {
  render() {
    return (
        <>
       

        <div className="row Md_Parent mx-0">
       
        <div className="col-md-2">
        </div>
      <div className="col-md-10 Card_Color">
      <h1 className="pb-5 H_Color">Instagram @ Cycle_Offical</h1>
         <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={Background2}
      />
    </div>
    <div>
      <img
        alt=''
        src={Background3}
      />
    </div>
    <div>
      <img
        alt=''
        src={Background4}
      />
    </div>
    <div>
      <img
        alt=''
        src={Background5}
      />
    </div>
    <div>
      <img
        alt=''
        src={Background6}
      />
    </div>
    <div>
      <img
        alt=''
        src={Background2}
      />
    </div>
    <div>
      <img
        alt=''
        src={Background2}
      />
    </div>
   
  
   
   
    
  </InfiniteCarousel>
, 
      </div>
      </div>
      </>
    )
  }
}
