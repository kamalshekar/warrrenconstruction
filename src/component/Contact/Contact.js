import React, { Component } from 'react'

import './Contact.css'
export default class Contact extends Component {
  render() {
    return (
        <div className="bg-clr-main">
      
            <div className="container container_bg">
            <div className="row p-0 m-0">
            <div className="col-md-7 col-sm-12 Border_style ">
                
                <h1 className="">FULL THE FORM.</h1>
                <h1 className="pb-5">IT'S EASY!</h1>

            <form className="B_L">
                    <div className="form-row">
                        <div className="form-group col-md-4 col-sm-6">
                        <input type="text" class="form-control form_Edit" placeholder="First name"/>
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                        <input type="email" className="form-control form_Edit" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4 col-sm-6">
                        <input type="number" className="form-control form_Edit" placeholder="Phone number"/>
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                        <input type="text" className="form-control form_Edit" placeholder="Post Code"/>
                        </div>
                    </div>
                    <div className="form-row  ">
                        <div class="form-group col-md-8 col-sm-12">
                            <textarea class="form-control form_Edit" rows="3" placeholder="Message"/>
                        </div>
                    </div>
                    <button type="submit" className="btn fr-des col-md-8 col-sm-12 mt-5" style={{backgroundColor:"#817BFC"}}>Send Message</button>
                </form>
            </div>
            <div className="col-md-5 Context_text_Section text-center pl-0">
            <div>
                <h1>Need Presentation ? </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem  </p>
            </div>

         
            </div>
        </div>
        </div>
      </div>
    )
  }
}