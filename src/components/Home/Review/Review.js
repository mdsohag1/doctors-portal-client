import React from 'react';
import person from '../../../images/people1.png'
import './Review.css'

const Review = () => {
    return (
        <div className='container review'>
            <h4>Testimonial</h4>
            <h2>What Our Patients Says</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="cart">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora maxime voluptatum at aperiam optio illo tenetur sunt quaerat qui?</p>
                        <div className="d-flex align-items-center">
                            <img src={person} alt="" />
                            <h5>Winson Heri</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cart">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora maxime voluptatum at aperiam optio illo tenetur sunt quaerat qui?</p>
                        <div className="d-flex align-items-center">
                            <img src={person} alt="" />
                            <h5>Winson Heri</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cart">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora maxime voluptatum at aperiam optio illo tenetur sunt quaerat qui?</p>
                        <div className="d-flex align-items-center">
                            <img src={person} alt="" />
                            <h5>Winson Heri</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;