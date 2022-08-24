import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
   const element = <FontAwesomeIcon icon={faBars} />;
   const { currentUser } = useSelector((state) => state.user);
   return (
      <div>
         <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
               <a className="navbar-brand text-black" href="#">
                  Doctor-Portal
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span>{element}</span>
               </button>
               <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavDropdown"
               >
                  <ul className="navbar-nav">
                     <li className="nav-item mx-2">
                        <a
                           className="nav-link active  text-black"
                           aria-current="page"
                           href="#"
                        >
                           Home
                        </a>
                     </li>
                     <li className="nav-item mx-2">
                        <a className="nav-link text-black" href="#">
                           About
                        </a>
                     </li>
                     <li className="nav-item mx-2">
                        <a className="nav-link text-black" href="#">
                           Appointment
                        </a>
                     </li>
                     <li className="nav-item mx-2">
                        <a className="nav-link text-black" href="#">
                           Reviews
                        </a>
                     </li>
                     <li className="nav-item mx-2">
                        <a className="nav-link text-black" href="#">
                           Contact Us
                        </a>
                     </li>
                     {currentUser ? (
                        <div className="profile-icon">
                           <FontAwesomeIcon icon={faUser} />
                        </div>
                     ) : (
                        <Link
                           style={{
                              textDecoration: "none",
                              color: "inherit",
                              marginTop: "8px",
                           }}
                           to="/login"
                        >
                           <li className="nav-item mx-2">Login</li>
                        </Link>
                     )}
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;
