import React from 'react';
import './ButtonComponent.css'
import { useNavigate } from 'react-router-dom';

const ButtonComponent = ({value}) => {
    const navigate = useNavigate()
    const handleButton = () => {
        navigate('/appointment')
    }
    return (
        <div>
            <button onClick={handleButton} className='custom-btn'>{value}</button>
        </div>
    );
};

export default ButtonComponent;