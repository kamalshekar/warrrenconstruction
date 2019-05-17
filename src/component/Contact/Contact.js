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
                        <div class="form-group">
        <input type="text" id="name" class=" form-control form_Edit" required/>
        <label class="form-control-placeholder" for="name">First Name</label>
      </div>
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                        <div class="form-group">
        <input type="text" id="name2" class=" form-control form_Edit" required/>
        <label class="form-control-placeholder" for="name2">Email</label>
      </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4 col-sm-6">
                        <div class="form-group">
        <input type="Number" id="name3" class=" form-control form_Edit" required/>
        <label class="form-control-placeholder" for="name3">Phone Number</label>
      </div>
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                        <div class="form-group">
        <input type="Number" id="name4" class=" form-control form_Edit" required/>
        <label class="form-control-placeholder" for="name4">Post Code</label>
      </div>
                        </div>
                    </div>
                    <div className="form-row  ">
                        <div class="form-group col-md-8 col-sm-12">
                        <div class="form-group">
        <textarea type="Number" id="name5" class=" form-control form_Edit" required/>
        <label class="form-control-placeholder" for="name5">Message</label>
      </div>
                          
                        </div>
                    </div>
                    <button onClick={this.props.submit} type="button" className="btn fr-des col-md-8 col-sm-12 mt-5" style={{backgroundColor:"#817BFC"}}>Send Message</button>
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