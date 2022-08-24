import React from 'react';
import './Services.css'
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import treatment from '../../../images/treatment.png'
import ButtonComponent from '../../Home/ButtonComponent/ButtonComponent';

const Services = () => {
    return (
        <div className='container services'>
            <h5 className='text-center'>Our Services</h5>
            <h3 className='text-center'>Services We Provide</h3>
            <div className="row cart">
                <div className="col-lg-4">
                    <div className="services-cart">
                        <div className="cart">
                            <img src={fluoride} alt="" />
                            <h4>Fluride Treatment</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="services-cart">
                        <div className="cart">
                            <img src={cavity} alt="" />
                            <h4>Cavity Fillings</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="services-cart">
                        <div className="cart">
                            <img src={whitening} alt="" />
                            <h4>Teeth Whitening</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center dental-care">
                <div className="col-lg-6">
                    <div className="content">
                        <img src={treatment} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="content">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, laborum libero! Consequatur, mollitia dolor labore quia totam modi expedita alias minus quas deleniti provident fuga delectus nemo cupiditate earum distinctio aut itaque corrupti est voluptate ipsum? Sed, autem corrupti! Ducimus dolore consequuntur blanditiis quae ab accusamus explicabo eveniet delectus error?</p>
                        <ButtonComponent value='get started' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;