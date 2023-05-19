import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryCard2 from "../CategoryCard/CategoryCard2";
import CategoryCard3 from "../CategoryCard/CategoryCard3";
import './Category.css'

const Category = () => {
  const [allData,setAllData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/allToys')
    .then(res=> res.json())
    .then(data => setAllData(data) )

  },[])
   const heavyTruck = allData.filter(truck =>  truck.subCategory == 
    "heavy truck")
    const fighters = allData.filter(fighter => fighter.subCategory == "fighter plane")
    console.log(fighters)
    const superCars = allData.filter(cars => cars.subCategory == "super car")
    console.log(superCars)
  return (
    <div>
      <div className="div  py-7 text-center">
        <h1 className="text-7xl font-bold">Shop By Category</h1>
          <p className="py-5">Here you can find worlds best category</p>
      </div>
      <Tabs className='my-11'>
        <TabList className='text-center text-3xl font-semibold'>
          <Tab >Heavy truck</Tab>
          <Tab>Fighter Planes</Tab>
          <Tab>Super Cars</Tab>
        </TabList>

        <TabPanel >

          <div className="category-container" >
          {
            heavyTruck.map(heavy => <CategoryCard 
              key={heavy._id}
              heavy={heavy}
            ></CategoryCard>    )
          }
          </div>
   

        </TabPanel>
        <TabPanel>
        <div className="category-container" >
          {
            fighters.map(fighter => <CategoryCard2 
              key={fighter._id}
              fighter={fighter}
            ></CategoryCard2>    )
          }
          </div>
          
        </TabPanel>
        <TabPanel>
            <div className="category-container" >
              {
                superCars.map(cars => <CategoryCard3
                  key={cars._id}
                  cars={cars}
                ></CategoryCard3>    )
              }
              </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
