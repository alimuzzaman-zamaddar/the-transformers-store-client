import React, { useContext } from "react";
import "./CategoryCard.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const CategoryCard = ({ heavy }) => {
  const {user} = useContext(AuthContext)
  const { _id, photo, toyName, ratings, price } = heavy;
  const notify = () => toast("You need to login fast to view details");

  return (
    <div className="mt-8">
    <div className="container-card text-[#B1D4E0] ">
      <div className="img" data-aos="fade-up"
     data-aos-duration="2000">
        <img src={photo} alt="" />
      </div>
      <div className="info mt-8 p-6 border-l-2 border-r-2 border-b-2 flex items-center justify-between" data-aos="fade-up"
     data-aos-duration="2000">
        <div className="div">
          <p className="text-3xl font-bold">Name : Heavy Truck</p>
          <p className="text-3xl">Price : {price}</p>
          <div className="flex mt-auto">
            <Rating style={{ maxWidth: 150 }} value={ratings} readOnly />
            <p className="ml-4">
              <strong>{ratings}</strong> stars
            </p>
          </div>
        </div>
        <div className="button">
          
           { user ? <Link to={`/category/${_id}`}> <button className="btn px-[25px] rounded-md text-white border-2 border-white hover:bg-slate-700 duration-700"> View Details </button></Link> :<> <Link  to='/login' > <button className="btn px-[25px] rounded-md text-white border-2 border-white hover:bg-slate-700 duration-700" onClick={notify}>View Details</button> </Link><ToastContainer />  </>      
           }

        </div>
      </div>
    </div>
    </div>
  );
};

export default CategoryCard;
