import React from 'react';
import './DoctorBanner.css'
import man from '../../../images/doctor-small.png'
import ButtonComponent from './../../Home/ButtonComponent/ButtonComponent';

const DoctorBanner = () => {
    return (
        <div className='doctor-banner'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={man} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="cart">
                            <h4>Appointment</h4>
                            <h1>Make An Appointment Today</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, ad. At odit obcaecati vitae debitis id non enim suscipit illo, ut possimus veritatis perferendis? Accusantium reprehenderit distinctio in soluta odio.</p>
                            <ButtonComponent value='get started' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorBanner;