import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Calendar from "../../Sheared/Calendar/Calendar";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const Dashboard = () => {
   const [value, setValue] = useState(new Date());
   const [appointments, setAppointments] = useState([]);

   useEffect(() => {
      const fetchingData = () => {
         axios
            .get("http://localhost:5000/api/appoint/getallAppointment")
            .then((res) => console.log(res));
      };
      fetchingData();
   }, []);

   const handleChange = (date) => {
      date.setHours(0, 0, 0, 0);
      console.log(date);
      setValue(date);
   };

   return (
      <div className="d-flex">
         <Sidebar></Sidebar>
         <div className="rightSide">
            <div className="row">
               <div className="col-lg-6">
                  <div className="calendar">
                     <Calendar
                        handleChange={handleChange}
                        value={value}
                     ></Calendar>
                  </div>
               </div>
               <div className="col-lg-6">
                  <AppointmentsByDate
                     appointments={appointments}
                  ></AppointmentsByDate>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
