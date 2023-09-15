import React from "react";
import "./Banner.css";
import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Carousel } from 'flowbite-react';

const Banner = () => {
  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
    <>
      <div className="slider mb-14">
        <Carousel
          className="h-screen"
        >
          <img
            alt="..."
            src="https://i.ibb.co/GxmwL6G/robot-with-blue-light-it.jpg"
          />
          <img
            alt="..."
            src="https://img.freepik.com/free-photo/blue-cyborg-toy-dances-with-futuristic-joy-generated-by-ai_188544-31772.jpg?t=st=1694764061~exp=1694767661~hmac=b458eea841070294cd30569f53bfb1dd82c5a07ed6c7fcdf60e5f6b8a87b0651&w=1380"
          />
          <img
            alt="..."
            src="https://img.freepik.com/free-photo/futuristic-robotic-arm-working-complex-machinery-generated-by-ai_188544-31072.jpg?t=st=1694764409~exp=1694768009~hmac=d8a72bacec42222631d14330951101ce6cc7dfb6f737e8a808797f93f0361a43&w=1380"
          />
        </Carousel>

        <div className="information bg-black bg-opacity-20">
          <h1>MOST POPULAR TRANSFORMER  IS HER !!!</h1>
         <div className="flex mt-8 ml-2">
         <button className="btn btn-primary rounded-none mr-5 text-white font-extrabold text-xl hover:border-4 border-4 hover:border-white px-8">BUY NOW</button> 
          <button className="btn btn-primary rounded-none text-white font-extrabold text-xl hover:border-4 border-4 hover:border-white px-6">CONTACT US</button>
         </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
