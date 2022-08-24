import React from 'react';
import './AppointmentsByDate.css'

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div className='appointmentByDate'>
            <h2>Appointsment: {appointments.length}</h2>

            <table className='table table-borderless maintable mt-5'>
                <thead>
                    <tr>
                        <th className='text-secondary text-left' scope='col'>No</th>
                        <th className='text-secondary' scope='col'>Name</th>
                        <th className='text-secondary' scope='col'>Age</th>
                        <th className='text-secondary' scope='col'>Weight</th>
                        <th className='text-secondary' scope='col'>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((item, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age} Years</td>
                                <td>{item.weight} KG</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsByDate;