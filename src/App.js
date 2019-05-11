import React, { Component } from 'react'
import SectionOne from './component/Section-one/SectionOne';
import Service from './component/ServiceSecOne/ServiceSecOne';

import Home from './Home/Main'
import ServiceSectionTwo from './component/ServiceSectionTwo/ServiceSectionTwo'
import ServiceSectionThree from './component/ServiceSectionThree/ServiceSectionThree'
import ServiceSectionFour from './component/ServiceSectionFour/ServiceSectionFour'
import ServiceSectionFive from './component/ServiceSectionFive/ServiceSectionFive'
import ServiceSectionSix from './component/ServiceSectionSix/ServiceSectionSix'
import {Switch,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      <SectionOne/>
     
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/service' exact component={Service}/>
        {/* <Route path='/service' exact component={ServiceSectionTwo}/> */}
      </Switch>
    <ServiceSectionTwo />
    <ServiceSectionThree />
    <ServiceSectionFour />
    <ServiceSectionFive />
    <ServiceSectionSix />
      </div>
    )
  }
}
