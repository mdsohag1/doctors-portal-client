import React, { useEffect, useState } from 'react';
import './AllDoctors.css'

const AllDoctors = () => {
    // const [doctors, setDoctors] = useState({});
    // useEffect(()=>{
    //     fetch('/http://localhost:5000/showDoctors')
    //     .then(res => res.json())
    //     .then(data => setDoctors(data))
    // }, [])
    return (
        <div className='container alldoctors'>
            <h3>Our Doctors</h3>
            <div className="row">
                
            </div>
        </div>
    );
};

export default AllDoctors;