import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import "./Gallery.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
    <div>
      <div className="gallery-title text-[#2E8BC0]">
        <h1 className="text-6xl font-extrabold text-center py-7">
          Toys Gallery Section
        </h1>
        <p className="text-center text-lg font-semibold" >Here you can find the unique type of toys that is very instaresting to chose.</p>
      </div>
      <div className="marquee-container mb-7" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <Marquee>
          <img
            src="https://www.tfw2005.com/boards/attachments/_drift-png.27603097/"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAALyfi9LTeveBPWGtOcddkth3n1sm7YYvZ5I13-dz7E_mcq1GB1Ajsdaf4OzcCJFJ6U&usqp=CAU"
            alt=""
          />
          <img
            src="https://www.tfw2005.com/boards/attachments/_drift-png.27603097/"
            alt=""
          />
          <img
            src="https://wallpaperaccess.com/full/3203051.jpg"
            alt=""
          />
          <img
            src="https://www.thechosenprime.com/cdn-cgi/image/quality%3D100/assets/images/world%20of%203a/three%20zero/transformers/rotf%20dlx%20jetfire/3zrotf-dlx-jetfire-01.jpg"
            alt=""
          />
          <img
            src="https://www.carscoops.com/wp-content/uploads/2013/06/Transformers-4-Trucks-1.jpg"
            alt=""
          />
          <img
            src="https://www.trucknews.com/wp-content/uploads/2020/01/iStock-514770269.jpg"
            alt=""
          />
          <img
            src="https://www.cnet.com/a/img/resize/ccfa703693ff23e65d52831cd14852a5bb91f68a/hub/2016/01/05/a3d8185a-0456-42ce-9d55-e2b3b5ff00d0/optimus.png?auto=webp&fit=crop&height=675&width=1200"
            alt=""
          />
          <img
            src="https://americanfirstautoprotect.com/wp-content/uploads/2021/03/Mustang.jpg"
            alt=""
          />
          <img
            src="https://www.tfw2005.com/boards/attachments/_drift-png.27603097/"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
