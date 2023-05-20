import React from "react";
import Rating from "react-rating";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const singleCategory = useLoaderData();
 const { photo, toyName, sellerName, email, ratings, quantity, details } = singleCategory;
  console.log(singleCategory);
  return (
    <div className=" single-toy-container bg-slate-100">
      <div className="info mt-10">
        <h1 className="text-center text-6xl py-12 font-extrabold">
          Toy Information
        </h1>
        <div>
          <h3 className="text-4xl mb-5">
            <strong> Toy Name :</strong> {toyName}
          </h3>
          <h3 className="text-4xl mb-5">
            <strong>Seller Name :</strong> {sellerName}
          </h3>
          <h3 className="text-4xl mb-5">
            <strong>Seller email :</strong> {email}
          </h3>
          <h3 className="text-4xl mb-5">
            <strong>Avilable Quantity :</strong> {quantity}
          </h3>
          <h3 className="text-2xl mb-36">
            <strong>Description :</strong> {details}
          </h3>
        </div>

        <div className="flex mb-20">
          <Rating style={{ maxWidth: 150 }} value={ratings} readOnly />
          <p className="ml-4">
            {" "}
            <strong>{ratings}</strong> stars{" "}
          </p>
        </div>
      </div>
      <div className="img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default SingleCategory;
