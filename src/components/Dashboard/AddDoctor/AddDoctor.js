import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddDoctor.css';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('/http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='d-flex'>
            <Sidebar></Sidebar>
            <div className="doctor">
                <h2>Add a Doctor</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} className='form-control' type="text" name="name" placeholder='Inter Name' />
                        <input onBlur={handleBlur} className='form-control mt-3' type="email" name="email" placeholder='Email Address' />
                        <input onChange={handleFileChange} className='form-control mt-3' type="file" name="file" placeholder='Uplode File' />
                        <input className='custom-btn mt-3' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;