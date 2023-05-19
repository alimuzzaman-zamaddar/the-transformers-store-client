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
    <div className="container-card shadow-lg p-7">
      <div className="img">
        <img src={photo} alt="" />
      </div>
      <div className="info mt-8 space-y-4 flex align-middle justify-between">
        <div className="div">
          <p className="text-3xl font-bold">Name : {toyName}</p>
          <p className="text-3xl">Price : {price}</p>
          <div className="flex mt-auto">
            <Rating style={{ maxWidth: 150 }} value={ratings} readOnly />
            <p className="ml-4">
              <strong>{ratings}</strong> stars
            </p>
          </div>
        </div>
        <div className="button">
          
          
           <Link to={`/category/${_id}`}> <button onClick={notify} className="btn btn-primary"> View Details </button></Link> 
            <ToastContainer />
        
        
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
