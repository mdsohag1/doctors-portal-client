import React from 'react';
import ChairImg from '../../../images/chair.png'
import './MainSection.css'
import ButtonComponent from './../../Home/ButtonComponent/ButtonComponent';


const MainSection = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="main-text">
                            <h1>Your New Smile Starts Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo voluptatum! Quasi, maiores beatae quaerat quae quibusdam temporibus cupiditate cons.</p>
                            <ButtonComponent value='get started' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-text">
                            <img src={ChairImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;