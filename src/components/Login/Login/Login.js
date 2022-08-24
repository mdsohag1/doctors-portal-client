import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import loginImg from "../../../images/login.png";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
   loginFailure,
   loginStart,
   loginSuccess,
} from "../../../redux/userSlice";

const Login = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const [newUser, setNewUser] = useState(false);
   const dispatch = useDispatch();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const [confirmPass, setConfirmPass] = useState("");
   const [success, setSuccess] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();
   const redirectPath = location.state?.path || "/";

   const onSubmit = (data) => {
      try {
         if (
            newUser &&
            data.email &&
            data.password &&
            data.password === data.confirmPass
         ) {
            const URL = "http://localhost:5000/api/auth/signup";
            axios.post(URL, { name, email, password, phone }).then((res) => {
               setSuccess(true);
               setNewUser(false);
            });
         }
         if (!newUser && data.email && data.password) {
            dispatch(loginStart());
            const URL = "http://localhost:5000/api/auth/signin";
            axios
               .post(URL, { email, password })
               .then((res) => dispatch(loginSuccess(res.data)))
               .then(navigate(redirectPath));
         }
      } catch (error) {
         dispatch(loginFailure());
      }
   };

   return (
      <div className="container login">
         <div className="row align-items-center">
            <div className="col-lg-6">
               <div className="form-field">
                  <h3 className="mb-4 text-center">
                     {newUser ? "Sign up" : "Login"}
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     {newUser && (
                        <input
                           {...register("name", { required: true })}
                           placeholder="Name"
                           className="form-control"
                           onChange={(e) => setName(e.target.value)}
                        />
                     )}
                     {newUser && errors.name && <span>Name is required</span>}{" "}
                     <br />
                     <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     {errors.email && <span>Email is required</span>} <br />
                     <input
                        {...register("password", { required: true })}
                        placeholder="Password"
                        className="form-control"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     {errors.password && <span>Password is required</span>}{" "}
                     <br />
                     {newUser && (
                        <input
                           {...register("confirmPass", { required: true })}
                           placeholder="Confirm Password"
                           className="form-control"
                           type="password"
                           onChange={(e) => setConfirmPass(e.target.value)}
                        />
                     )}
                     {newUser && errors.confirmPassword && (
                        <span>ConfirmPassword is not same</span>
                     )}{" "}
                     <br />
                     {newUser && (
                        <input
                           type="number"
                           {...register("phone", { required: true })}
                           placeholder="Phone"
                           className="form-control"
                           onChange={(e) => setPhone(e.target.value)}
                           name="phone"
                        />
                     )}
                     {newUser && errors.phone && <span>Phone is required</span>}{" "}
                     <br />
                     <input type="submit" className="custom-btn w-100" />
                     <h6
                        onClick={() => setNewUser(!newUser)}
                        className="text-danger text-center mt-3 switchLogin"
                     >
                        {newUser ? "Already Have" : "Create"} an Account
                     </h6>
                     {success && (
                        <p className="text-success text-center">
                           User {newUser ? "Created" : "Sign in"} Successfully
                        </p>
                     )}
                  </form>
               </div>
            </div>
            <div className="col-lg-6">
               <img src={loginImg} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Login;
