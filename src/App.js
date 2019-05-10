import React, { Component } from 'react'
import SectionOne from './component/Section-one/SectionOne';
import Service from './component/AboutSecOne/AbourSecOne';

import Home from './Home/Main'
import {Switch,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      <SectionOne/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/service' exact component={Service}/>
      </Switch>
      

      
      </div>
    )
  }
}
