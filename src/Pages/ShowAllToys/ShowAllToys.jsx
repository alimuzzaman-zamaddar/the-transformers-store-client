import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ShowAllToys = () => {
  useTitle('AllToys')
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getAllToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };


  return (
    <div className="search mb-14">

      <div className="input-search py-7 text-center">
        <input placeholder="Search By Toy Name" className="p-3 shadow-2xl border" onChange={(e) =>  setSearchText(e.target.value)} type="text" />
        <button className="btn btn-outline ml-5" onClick={handleSearch}>Search</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity </th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <tr key={toy._id}>
                <td>{toy?.sellerName}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.subCategory}</td>
                <td>{toy?.quantity}</td>
                <td>
                  {" "}
                  <Link to={`/singleToy/${toy._id}`}>
                    <button className="btn btn-sm">View Details</button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllToys;
