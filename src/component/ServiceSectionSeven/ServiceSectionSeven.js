import React, { Component } from 'react'
import './ServiceSectionSeven.css';
import { Button, ButtonToolbar,  } from 'react-bootstrap';
export default class ServiceSectionSeven extends Component {
    state ={
        data :[
          {customStyle:"col-md-4 boxshow  col-sm-6  text-center",title:'Personal',currency:'$39',bill:'Per Month Billed Annually', para:'Customer RelationShips',para1:'ManaerSMS $ Email Notification',para2:'Online Payments',para3:'Mobile & Tablet App',para4:'Signature Capture',para5:'Job Notes & Attachment',but:'14 Days  Free Trail'},
          {customStyle:"col-md-4  boxshow  col-sm-6 text-center ",title:'Team',currency:'$39',bill:'Per Month Billed Annually', para:'Customer RelationShips',para1:'ManaerSMS $ Email Notification',para2:'Online Payments',para3:'Mobile & Tablet App',para4:'Signature Capture',para5:'Job Notes & Attachment',but:'14 Days  Free Trail'},
          {customStyle:"col-md-4   boxshow  col-sm-6 text-center ",title:'Pro',currency:'$39',bill:'Per Month Billed Annually', para:'Customer RelationShips',para1:'ManaerSMS $ Email Notification',para2:'Online Payments',para3:'Mobile & Tablet App',para4:'Signature Capture',para5:'Job Notes & Attachment',but:'14 Days  Free Trail'}
        ]
      }
      render() {
        return (
            <>
            <div class="col-sm-12 Main-Box-div Main-Box-seven">
           
            <div class="box-div-Seven">
        
             </div>
        
            </div>
            <div class=" p-b-symain">
    <div class="container p-b-sty">
     <div class="Sub-box-text lead text-center">
     <h2>Flexible Pricing Plans </h2>
        <hr class="set-w"/>
        
        <p>Hassle Free-No Contracts Cancel Anytime</p>
            </div>
            <div class="b-t pb-5">
         
        </div>
        <div className="row mx-0 P-T ">
          {this.state.data.map(description =>{
            return(
              <div className={description.customStyle}>
                <h4 className="pt-3 ">{description.title}</h4>
                <h1 class="h-s H-T">{description.currency}</h1>
                <p>{description.bill}</p>
                <div className="pt-5"> 
                <p>{description.para}</p>
                <p>{description.para1}</p>
                <p>{description.para2}</p>
                <p>{description.para3}</p>
                <p>{description.para4}</p>
                <p>{description.para5}</p>
                <p>{description.para6}</p>
                <button class="b-St mt-5 mb-3">{description.but}</button>
                </div> 
          </div>
            )
          })}
        
        </div>
        
        </div>
       
        </div>
        <div class="col-sm-12  Main-Box-seven">
           
           <div class="box-div-Sev">
       
            </div>
       
           </div>
        
    </>
    
        )
      }
    }
    