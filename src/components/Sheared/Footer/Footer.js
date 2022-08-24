import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="foot-item">
                            <h5>Services</h5>
                            <p>Emergency CheakUp</p>
                            <p>Monthly CheakUp</p>
                            <p>Weekly CheakUp</p>
                            <p>Deep CheakUp</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="foot-item">
                            <h5>oral health</h5>
                            <p>Floride Tempareture</p>
                            <p>Cavity Fillings</p>
                            <p>Teeth Whitening</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="foot-item">
                            <h5>Doctors</h5>
                            <p>Canadian Doctors</p>
                            <p>Francian Doctors</p>
                            <p>Londoni Doctors</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-end">
                        <div className="foot-item">
                            <h5>Our address</h5>
                            <p>Sylhet Bangladesh</p>
                            <p>+8895478-4512</p>
                            <button className='custom-btn'>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center copy'>Copiright @2022 All Reserved</p>
        </div>
    );
};

export default Footer;