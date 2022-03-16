import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                <h1><span></span></h1>
                
                {resumeData.touch}

              </p>
            </div>
          </div>
          <div  className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <form >
                  <label for="name">Name<span>*</span></label>
                  <input type="text" id="name"  name="name"/>
                  <label for="email">Email<span>*</span></label>
                  <input type="email" id="email" name="email"/>
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject"/>
                  <label for="textarea">Massage<span>*</span></label>
                  <textarea type="text" id="textarea" name="massage"/>
                  <button className="submit">Submit</button>
                </form>


               
              </div>
            </aside>
            <div id="twitter" >
              <aside className="four columns footer-widgets" >

              <h2>{resumeData.feed}</h2>
              <ul>
                <li><b>{resumeData.name}</b></li>
                <li><b>{resumeData.email}</b></li>
                <br/>
                <li><b>{resumeData.address}</b></li>
                <li><b>{resumeData.number}</b></li>
                

              </ul>
              
            </aside>
            </div>
      
          </div>
        </section>
        );
  }
}