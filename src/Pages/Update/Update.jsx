import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const Update = () => {
    useTitle('UpdateToy')
    const needToUp = useLoaderData() 
    const {price,quantity,details} = needToUp;
    const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updateToy = {price,quantity,details}

        fetch(`https://the-toy-store-server.vercel.app/allToys/${needToUp._id}`,{
            method:'PATCH',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Your Toy Is Updated',
                    'success'
                  )
            }
        })




    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-4/6">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-7xl text-center">Update Your Toys</h1>

              <form onSubmit={handleUpdate} >
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name='price'
                  defaultValue={price}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Available quantity"
                  name='quantity'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input
                  type="text"
                  placeholder="Detail description"
                  name='details'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Toy</button>
              </div>
              </form>
 
            </div>
          </div>
        </div>
      </div>
    );
};

export default Update;