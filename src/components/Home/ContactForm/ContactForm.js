import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contact'>
            <div className="container text-center text-white py-5">
                <h4>Contact US</h4>
                <h2>Stay Conected with us</h2>
                <div className="form-aria">
                    <form action="" className=''>
                        <input type="email" name="email" id="" placeholder='Email Address' className='form-control' /><br />
                        <input type="text" placeholder='Subject' className='form-control' /><br />
                        <input type="text" placeholder='Your Message' className='form-control message' />
                        <button className='custom-btn' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;