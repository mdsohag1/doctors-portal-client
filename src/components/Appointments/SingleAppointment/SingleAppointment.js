import React, { useState } from 'react';
import ApointPopupForm from '../ApointPopupForm/ApointPopupForm';
import './SingleAppointment.css'

const SingleAppointment = ({ item, date }) => {
    const { name, time, quantity } = item;

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='col-lg-4 single-appointment'>
            <div className="text text-center">
                <h2>{name}</h2>
                <h4>{time}</h4>
                <p>{quantity}</p>
                <button onClick={handleClickOpen} className='custom-btn'>BOOK APPOINTMENT</button>
                <ApointPopupForm date={date} setOpen={setOpen} open={open} handleClose={handleClose} item={item}></ApointPopupForm>
            </div>
        </div>
    );
};

export default SingleAppointment;