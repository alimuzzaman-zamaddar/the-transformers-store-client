import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="header-navigation-bar bg-slate-100">
          <div className="header-title">
            <img
              className="w-12 h-12 "
              src="https://www.nicepng.com/png/detail/9-92708_transformers-logo.png"
              alt=""
            />
            <h3 className="text-3xl"> Transformers Store </h3>
          </div>

            <div className="navigation-lings">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "font-bold" : ""
                }
              >
                Blogs
              </NavLink>
              <NavLink
                    to="/allToy"
                    className={({ isActive }) =>
                      isActive ? "font-bold" : ""
                    }
                  >
                    All Toys
                  </NavLink>
                  <NavLink
                    to="/addToy"
                    className={({ isActive }) =>
                      isActive ? "font-bold" : ""
                    }
                  >
                    Add A Toy
                  </NavLink>
                  <NavLink
                  to="/mytoys"
                  className={({ isActive }) =>
                    isActive ? "font-bold" : ""
                  }
                >
                  My Toys
                </NavLink>
            </div>

              <div>
                {user ? (
                  <div className="navigation-login" >
                    <img
                      className="h-12 w-12"
                      title={user?.displayName}
                      src={user?.photoURL}
                      alt=""
                    />
                    <button
                      className="btn btn-outline-secondary text-white"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </div>
                ) : ( <div>
                     <button className="btn btn-outline">
                    <Link className="" to="/login">
                      Login
                    </Link>
                  </button>

                </div>

  
                )}
              </div>
    </div>
  );
};

export default Navbar;
