import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const { googleLogin,signInUser } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState(null);
  const Navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email,password)
    .then(result => {
      console.log(result.user)
      setLoginUser(result.user)
      Navigate(from);
      if(result.user){
        Swal.fire(
          'Welcome To Our WebSite',
          'You are successfully loggedIn'
        )
      }

    })
    .catch(error => {
      setLoginUser(error.message)
    })


  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setLoginUser(result.user)


      })
      .catch((error) => setLoginUser(error.message));
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-4/6">
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-7xl text-center">Please Login </h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
               <p className="text-red-500">{loginUser}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p>
              New at Transformer store
              <Link to="/register">
                <strong className="text-blue-700">Register Fast</strong>
              </Link>
            </p>

            <div className="form-control">
              <h1 className="text-center text-4xl m-6">Social Login</h1>
              <button onClick={handleGoogleLogin} className="btn btn-primary ">
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
