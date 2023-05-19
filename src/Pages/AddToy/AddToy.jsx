import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddToy = () => {

  const {user} = useContext(AuthContext)
  useTitle('AddToy')

  
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const toy = {
            photo,toyName,sellerName,email,subCategory,price,ratings,quantity,details
        }
        console.log(toy)

        fetch('http://localhost:5000/allToys', {
            method: 'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(toy)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'SUCCESS',
                    'Your Toy Is Added',
                    'successfully'
                  )
            }
          })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-4/6">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-7xl text-center">Post Your Toys</h1>

              <form onSubmit={handleAddToy} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Toy Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name='photo'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Toy  Name"
                  name='toyName'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller name</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller name"
                  name='sellerName'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller email"
                  defaultValue={user?.email}
                  name='email'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub-category"
                  name='subCategory'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name='price'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ratings</span>
                </label>
                <input
                  type="text"
                  placeholder="Ratings"
                  name='ratings'
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
                <button className="btn btn-primary">Add A Toy</button>
              </div>
              </form>
 
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddToy;