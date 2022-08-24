import React, { useState } from "react";
import chair from "../../../images/chair.png";
import "./Appointment.css";
import Header from "./../../Sheared/Header/Header";
import Calendar from "./../../Sheared/Calendar/Calendar";
import SingleAppointment from "./../../Appointments/SingleAppointment/SingleAppointment";
import Footer from "./../../Sheared/Footer/Footer";

const Appointment = () => {
   const date = new Date();
   // const date = (new Date()).format('YYYY-MM-DD')
   const currentDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
   const [value, setValue] = useState(new Date());

   const handleChange = (date) => {
      date.setHours(0, 0, 0, 0);
      console.log(date);
      setValue(date);
   };

   const appointment = [
      {
         name: "Teeth Orthodontics",
         time: "8:00 Am - 9:00 Am",
         quantity: "10 spaces Availabail",
      },
      {
         name: "Cosmetics Denticity",
         time: "10:00 Am - 12:00 Pm",
         quantity: "10 spaces Availabail",
      },
      {
         name: "Teeth Cleaning",
         time: "5:00 Pm - 6:00 Pm",
         quantity: "10 spaces Availabail",
      },
      {
         name: "Teeth Orthodontics",
         time: "8:00 Am - 9:00 Am",
         quantity: "10 spaces Availabail",
      },
      {
         name: "Cosmetics Denticity",
         time: "10:00 Am - 12:00 Pm",
         quantity: "10 spaces Availabail",
      },
      {
         name: "Teeth Cleaning",
         time: "5:00 Pm - 6:00 Pm",
         quantity: "10 spaces Availabail",
      },
   ];

   return (
      <div>
         <Header></Header>
         <div className="appoint">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="calendar">
                        <h1>Appointment</h1>
                        <div className="main-calendar">
                           <Calendar
                              handleChange={handleChange}
                              value={value}
                           ></Calendar>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="img">
                        <img src={chair} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="appointSection">
               <h1 className="text-center">
                  Available Appointments on {value.toDateString()}
               </h1>
               <div className="row">
                  {appointment.map((item) => (
                     <SingleAppointment
                        date={value}
                        item={item}
                     ></SingleAppointment>
                  ))}
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Appointment;
