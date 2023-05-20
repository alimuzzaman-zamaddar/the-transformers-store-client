import React from "react";
import "./Card.css";
import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Card = () => {
    useEffect(() => {
        AOS.init();
        
      }, []);
  return (
    <div className="group-title">
        <h1 className="font-extrabold text-5xl text-center py-11">Variety of Toy Section</h1>
      <div className="py-12  card-container ">
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"  >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
