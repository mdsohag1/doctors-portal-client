import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import "./ApointPopupForm.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

const ApointPopupForm = ({ open, handleClose, item, setOpen, date }) => {
   // const [formValue, setFormValue] = useState({})

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const { name, time } = item;
   const navigate = useNavigate();
   const { currentUser } = useSelector((state) => state.user);

   const onSubmit = (info) => {
      info.appointName = name;
      info.Time = time;
      info.created = new Date();
      info.date = date;

      axios
         .post("http://localhost:5000/api/appoint", { ...info })
         .then((res) => console.log(res));

      navigate("/dashboard");
   };

   return (
      <div className="popup">
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogContent>
               <DialogTitle id="alert-dialog-title">
                  <span className="title">{name}</span>
               </DialogTitle>
               <form className="popup-form" onSubmit={handleSubmit(onSubmit)}>
                  <input
                     {...register("name", { required: true })}
                     placeholder="Name"
                     className="form-control"
                     defaultValue={currentUser.name}
                  />
                  {errors.name && <span>Name is required</span>} <br />
                  <input
                     {...register("email", { required: true })}
                     placeholder="Email"
                     className="form-control"
                     defaultValue={currentUser.email}
                  />
                  {errors.email && <span>Email is required</span>} <br />
                  <input
                     type="number"
                     {...register("phone", { required: true })}
                     placeholder="Phone"
                     className="form-control"
                     defaultValue={currentUser.phone}
                  />
                  {errors.phone && <span>Phone is required</span>} <br />
                  <input
                     defaultValue={time}
                     {...register("time", { required: false })}
                     className="form-control"
                  />{" "}
                  <br />
                  <div className="row form-group">
                     <div className="col-md-4">
                        <select
                           name="gender"
                           id=""
                           className="form-control"
                           {...register("gender", { required: true })}
                        >
                           <option disabled={true} value="Not Selected">
                              Selected Gender
                           </option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="other">Other</option>
                        </select>
                        {errors.gender && <span>gender is required</span>}{" "}
                        <br />
                     </div>
                     <div className="col-md-4 form-group">
                        <input
                           className="form-control"
                           type="number"
                           name=""
                           id=""
                           {...register("age", { required: true })}
                           placeholder="Age"
                        />{" "}
                        <br />
                        {errors.age && <span>age is required</span>} <br />
                     </div>
                     <div className="col-md-4 form-group">
                        <input
                           className="form-control"
                           type="number"
                           name=""
                           id=""
                           {...register("weight", { required: true })}
                           placeholder="Weight"
                        />{" "}
                        <br />
                        {errors.weight && <span>weight is required</span>}{" "}
                        <br />
                     </div>
                  </div>
                  <input type="submit" className="custom-btn w-100" />
               </form>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancell</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};

export default ApointPopupForm;
