import React from "react";
import "./Banner.css";
import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
    <div className="banner py-11" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"   >
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ytimg.com/vi/wsk0mPpKs4c/maxresdefault.jpg"
            className="w-full h-3/4"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://m.media-amazon.com/images/I/71uRENNFM4L._AC_SX569_.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://m.media-amazon.com/images/I/61GPkUebfvL._AC_SL1000_.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://m.media-amazon.com/images/I/71HA6YTQkSS._AC_SL1500_.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  className="information">
        <h1>MOST POPULAR TRANSFORMER  IS HER !!!</h1>
        <p>he primary concept of Generation One is that the heroic Optimus Prime, the villainous Megatron, and their finest soldiers crash land on pre-historic Earth in the Ark and the Nemesis before awakening in 1985, Cybertron hurtling through the Neutral zone as an effect of the war. The Marvel comic was originally part of the main Marvel Universe, with appearances from Spider-Man and Nick Fury, plus some cameos,[9] as well as a visit to the Savage Land</p>
      </div>
    </div>
  );
};

export default Banner;
