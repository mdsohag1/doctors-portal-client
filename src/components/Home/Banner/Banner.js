import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4">
                    <div className="item d-flex">
                        <div className="icon">
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div className="text">
                            <h4>Opening Hours</h4>
                            <p>now open our hospital is daily 8am to 10pm</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item d-flex items">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLocation} />
                        </div>
                        <div className="text">
                            <h4>Visite our location</h4>
                            <p>Sylhet Sodor Hospital</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item d-flex">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="text">
                            <h4>Contact Us Now</h4>
                            <p>+8809548754248</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;