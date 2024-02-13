import React from 'react';
import "./Info.css";
import { studentIcon, videoIcon, bgElement2 } from "../../assets"

const Info = () => {
  return (
    <section id="info" className='dark-gray'>
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="Student icon" 
            />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={videoIcon} alt="Video icon" 
            />
            <div className="amount">26 hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img src={bgElement2} alt="" className='bg-element2' />
      </div>
    </section>
  )
}

export default Info
