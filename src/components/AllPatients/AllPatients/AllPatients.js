import React, { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import "./AllPatients.css";

const AllPatients = () => {
   const [appointments, setAppointments] = useState([]);

   useEffect(() => {}, []);

   return (
      <div className="all-patients">
         <div className="d-flex">
            <Sidebar></Sidebar>
            <table className="table table-borderless maintable">
               <thead>
                  <tr>
                     <th className="text-secondary text-left" scope="col">
                        No
                     </th>
                     <th className="text-secondary" scope="col">
                        Name
                     </th>
                     <th className="text-secondary" scope="col">
                        Gender
                     </th>
                     <th className="text-secondary" scope="col">
                        Age
                     </th>
                     <th className="text-secondary" scope="col">
                        Weight
                     </th>
                     <th className="text-secondary" scope="col">
                        Phone
                     </th>
                     <th className="text-secondary" scope="col">
                        Email
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {appointments.map((item, index) => (
                     <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age} Years</td>
                        <td>{item.weight} KG</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllPatients;
