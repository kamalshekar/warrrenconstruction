import React, { Component } from 'react'
// import SectionOne from './component/Section-one/SectionOne';
// import Service from './component/ServiceSecOne/ServiceSecOne';

import Home from './Home/Main'
// import ServiceSectionTwo from './component/ServiceSectionTwo/ServiceSectionTwo'
// import ServiceSectionThree from './component/ServiceSectionThree/ServiceSectionThree'
// import ServiceSectionFour from './component/ServiceSectionFour/ServiceSectionFour'
// import ServiceSectionFive from './component/ServiceSectionFive/ServiceSectionFive'
// import ServiceSectionSeven from './component/ServiceSectionSeven/ServiceSectionSeven'
// import ServiceSectionSix from './component/ServiceSectionSix/ServiceSectionSix'
// import ServiceSectionEight from './component/ServiceSectionEight/ServiceSectionEight'
// import BedSectionOne from './component/BedSectionOne/BedSectionOne'
// import BedSectionTwo from './component/BedSectionTwo/BedSectionTwo'
// import BedSectionThree from './component/BedSectionThree/BedSectionThree'
// import BedSectionFour from './component/BedSectionFour/BedSectionFour'
// import BedSectionFive from './component/BedSectionFive/BedSectionFive'
// import BedSectionSix from './component/BedSectionSix/BedSectionSix'

// import BedSectionSeven from './component/BedSectionSeven/BedSectionSeven'
// import RoofSectionOne from './component/RoofSectionOne/RoofSectionOne'
// import RoofSectionTwo from './component/RoofSectionTwo/RoofSectionTwo'
// import RoofSectionThree from './component/RoofSectionThree/RoofSectionThree'
// import RoofSectionFour from './component/RoofSectionFour/RoofSectionFour'
// import RoofSectionFive from './component/RoofSectionFive/RoofSectionFive'
import ParentContact from './component/Contact/ParentContact'
import {Switch,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      {/* <SectionOne/> */}
     
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/contact" exact component={ParentContact} />
        {/* <Route path='/service' exact component={Service}/> */}
        {/* <Route path='/service' exact component={ServiceSectionTwo}/> */}
      </Switch>
    {/* <ServiceSectionTwo />
    <ServiceSectionThree />
    <ServiceSectionFour />
    <ServiceSectionFive />
    <ServiceSectionSix />
 
    <ServiceSectionSeven/>
    <ServiceSectionEight/>
    <BedSectionOne/>
    <BedSectionTwo/>
<BedSectionThree/>
<BedSectionFour/>
<BedSectionFive/> */}
{/* <BedSectionSix/>
<BedSectionSeven/>
< RoofSectionOne/>
< RoofSectionTwo/>
< RoofSectionThree/>
< RoofSectionFour/>
< RoofSectionFive/> */}
<ParentContact/>
      </div>
    )
  }
}
