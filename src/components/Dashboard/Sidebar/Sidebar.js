import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBars,
   faBatteryEmpty,
   faPersonRifle,
   faPrescription,
   faEdit,
   faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
   const [isDoctor, setIsDoctor] = useState(true);

   useEffect(() => {}, []);

   return (
      <div className="sideNav justify-content-center">
         <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <div className="head-text d-flex align-items-center">
               <span>
                  <FontAwesomeIcon icon={faBars} />
               </span>
               <h4>Dashboard</h4>
            </div>
         </Link>
         <Link to={"/appointment"} style={{ textDecoration: "none" }}>
            <div className="head-text d-flex align-items-center">
               <span>
                  <FontAwesomeIcon icon={faBatteryEmpty} />
               </span>
               <h4>Appointment</h4>
            </div>
         </Link>
         {isDoctor && (
            <div>
               <Link
                  to={"/dashboard/allpatients"}
                  style={{ textDecoration: "none" }}
               >
                  <div className="head-text d-flex align-items-center">
                     <span>
                        <FontAwesomeIcon icon={faPersonRifle} />
                     </span>
                     <h4>All-Patients</h4>
                  </div>
               </Link>
               <div className="head-text d-flex align-items-center">
                  <span>
                     <FontAwesomeIcon icon={faPrescription} />
                  </span>
                  <h4>Presciptions</h4>
               </div>
               <Link
                  to={"/dashboard/adddoctor"}
                  style={{ textDecoration: "none" }}
               >
                  <div className="head-text d-flex align-items-center">
                     <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                     </span>
                     <h4>Add Doctor</h4>
                  </div>
               </Link>
               <div className="head-text d-flex align-items-center">
                  <span>
                     <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <h4>Settings</h4>
               </div>
            </div>
         )}
      </div>
   );
};

export default Sidebar;
