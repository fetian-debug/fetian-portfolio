import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/fetian.png" alt="fetianFace" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutMe
               }
               </p>

               <div className="row">

                  
                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       					
                    <span>{resumeData.name}</span>
                     
                     <br></br>
                   
                    <span>{resumeData.address}</span>
       					  
                    <br></br>

                    <span>{resumeData.number}</span>
    
                    <br></br>

                    <span>{resumeData.email}</span>
                             
                             
                             
                              </p>
                 
                 
                  </div>

                  <div className=" main-col download button">
                 
                  <a className="fa fa-download" href="images/cv-fetian-ans.pdf" title="I love you" download>&nbsp;&nbsp;Download Resume</a>
                  
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}