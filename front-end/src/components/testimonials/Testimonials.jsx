import React from 'react';
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets"

const Testimonials = () => {
  return (
    <section className="dark-gray" id="testimonials">
      <div className="wrapper">
        <h2>What our students say</h2>

        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt="" />
            <div className="review-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a.</div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="review-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Instagram</div>
              <div className="review">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a.</div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial3} alt="" />
            <div className="review-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Apple</div>
              <div className="review">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
