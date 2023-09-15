import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaBusAlt, FaCarAlt, FaFighterJet, FaTableTennis, FaTractor } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="  ">
      <div className="header-navigation-bar  text-white">
        <div className="header-title">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/9nrJYmg/autobot-from-transformers-logo-png-transparent-removebg-preview.png"
            alt=""
          />
          <h3 className="text-2xl"> Transformers Store </h3>
        </div>
        <div className="flex header-icons">
          <span><FaBusAlt></FaBusAlt></span>
          <span><FaCarAlt></FaCarAlt></span>
          <span><FaFighterJet></FaFighterJet></span>
          <span><FaTractor></FaTractor></span>
        </div>

        <div>
          {user ? (
            <div className="navigation-login">
              <img
                className="h-12 w-12"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
              <button
                className="btn btn-outline-secondary text-white border-2 border-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button className="btn px-[25px] rounded-md text-white border-2 border-white hover:bg-slate-700 duration-700">
                <Link className="" to="/login">
                  Login
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="navigation-lings md:flex  justify-between items-center">
       <div className="">
       <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/allToy"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          All Toys
        </NavLink>
        <NavLink
          to="/addToy"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Add A Toy
        </NavLink>
        <NavLink
          to="/mytoys"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          My Toys
        </NavLink>
       </div>
       <div className="">
        <button className="btn px-[25px] rounded-md text-white border-2 border-white hover:bg-slate-700 duration-700">Explore More Toys</button>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
