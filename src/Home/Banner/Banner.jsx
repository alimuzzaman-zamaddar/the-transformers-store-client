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
          leftControl="left"
          rightControl="right"
          className="h-[calc(100dvh-0dvh)] md:h-[calc(100dvh-12dvh)]"
        >
          <img
            alt="..."
            src="https://i.ytimg.com/vi/ZtuFgnxQMrA/maxresdefault.jpg"
          />
          <img
            alt="..."
            src="https://variety.com/wp-content/uploads/2023/06/t6.jpg?w=1000"
          />
          <img
            alt="..."
            src="https://www.looper.com/img/gallery/transformers-rise-of-the-beasts-trailer-roars-into-action/l-intro-1669905191.jpg"
          />
        </Carousel>

        <div className="information">
          <h1>MOST POPULAR TRANSFORMER  IS HER !!!</h1>
          <p>
          he primary concept of Generation One is that the heroic Optimus Prime, the villainous Megatron, and their finest soldiers crash land on pre-historic Earth in the Ark and the Nemesis before awakening in 1985, Cybertron hurtling through the Neutral zone as an effect of the war. The Marvel comic was originally part of the main Marvel Universe, with appearances from Spider-Man and Nick Fury, plus some cameos,[9] as well as a visit to the Savage Land
          </p>
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
