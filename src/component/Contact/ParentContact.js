import React, { Component } from 'react';
import Contact from './Contact';
import ThankYou from './Thankyou'

export default class ParentContact extends Component {
    state={
        toggle:true
    }
    toggleThank=()=>{
        this.setState({
            toggle:false
        })
    }
  render() {
    return (
      <div>
        {this.state.toggle?<Contact submit={this.toggleThank}/>:<ThankYou/>}
      </div>
    )
  }
}
