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
        <h1 className="font-extrabold text-5xl text-center py-11">Most Popular and Favorite Toys Section</h1>
        <p className="text-center font-semibold text-xl">find your favorite as many you want</p>
      <div className="py-12  card-container ">
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"  >
          <img
            src="https://www.joblo.com/wp-content/uploads/2023/04/Fs0ObfgX0AMLSTL-1024x777.jpeg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://i.ytimg.com/vi/ET9SHYzMz_4/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://i.ytimg.com/vi/fGj8qgqqFW8/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://storage.prompt-hunt.workers.dev/clf4zo78f0001ma083j6pvjxk_1"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://static.wikia.nocookie.net/transformers/images/9/98/Movie-brawl-1.jpg/revision/latest?cb=20090805145202"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://i.ytimg.com/vi/4Yf2onoJxbY/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://cdn.trendhunterstatic.com/thumbs/transformer-truck.jpeg?auto=webp"
            alt=""
          />
        </div>
        <div className="toy-card" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
          <img
            src="https://i.pinimg.com/originals/fb/aa/ae/fbaaae8ddd2486e5ac1cd76fe56662cb.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
