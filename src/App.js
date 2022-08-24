import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import { useSelector } from "react-redux";

import Login from "./components/Login/Login/Login";
import Appointment from "./components/Appointments/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";

function App() {
   const { currentUser } = useSelector((state) => state.user);
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route
               path="/appointment"
               element={<Appointment />}
            />
            <Route
               path="/dashboard"
               element={ <Dashboard />}
            />
            {/* <Route
               path="/appointment"
               element={currentUser ? <Appointment /> : <Login />}
            />
            <Route
               path="/dashboard"
               element={currentUser ? <Dashboard /> : <Login />}
            /> */}
            <Route path="/dashboard/allpatients" element={<AllPatients />} />
            <Route path="/dashboard/adddoctor" element={<AddDoctor />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
