import React, { Component } from 'react'
import SectionOne from '../src/component/Section-one/SectionOne'
import SectionTwo from './component/Section-Two/SectionTwo'
import SectionThree from './component/Section-Three/SectionThree'
import Features from './component/features/Features';
import Sectionseven from './component/Sectionseven/Sectionseven';
import SelectionSix from './component/SectionSix/SelectionSix';
import SectionFive from './component/SectionFive/SectionFive'


export default class App extends Component {
  render() {
    return (
      <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Features/>
      <SectionFive/>
      <Sectionseven/>
      < SelectionSix/>
      </div>
    )
  }
}
