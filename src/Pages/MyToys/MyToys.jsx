import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    useTitle("MyToy")
    const [toys,setToys] = useState([])
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/mytoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);

    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          fetch(`http://localhost:5000/allToys/${id}`, {
            method:'DELETE'

          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
              const remaining = toys.filter(toy => toy._id !== id)
              setToys(remaining)

            }
          })


        }
      })

      
    }


    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity </th>
              <th>Update Toy</th>
              <th>Delete Toy</th>
            </tr>
          </thead>
          <tbody>
              {
                  toys.map(toy =>  <tr key={toy._id}>
                      <td>{toy?.sellerName}</td>
                      <td>{toy?.toyName}</td>
                      <td>{toy?.subCategory}</td>
                      <td>{toy?.quantity}</td>
                      <td> <Link to={`/update/${toy._id}`}><button  className="btn btn-sm" >Update</button></Link> </td>
                      <td> <button onClick={()=> handleDelete(toy._id)}  className="btn btn-sm" >delete</button> </td>
                    </tr>  )
              }
  
          </tbody>
        </table>
      </div>
    );
};

export default MyToys;