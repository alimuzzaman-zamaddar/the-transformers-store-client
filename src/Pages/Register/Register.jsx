import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const [registerUser,setRegisterUser] =useState(null)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result => {
      const registerUser = result.user;
      if(registerUser){
        Swal.fire(
          'Registration complete',
          'success'
        )
      }
      updateUserProfile({
        displayName: name,
        photoURL:photo
      }) 
    .then((result) => {
      console.log(result.user)
    })
    .catch(error => console.log(error))
    })
    .catch(error => {
      setRegisterUser(error.message)
    })

    

  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-4/6">
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-7xl text-center">Please Register </h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <p className="text-red-500">{registerUser}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <p>
              Already Have An Account{" "}
              <Link to="/login">
                {" "}
                <strong className="text-blue-700">Login Fast</strong>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
