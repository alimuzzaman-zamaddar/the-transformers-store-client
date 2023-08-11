import React from "react";
import { FaAngleDown, FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="pb-14 mt-10 border-b-2 border-[#59b5d3]">
      <div className="py-7">
        <div className="">
          <p
            className="text-[#59b5d3] mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            WHAT PEOPLES SAYS
          </p>
          <h1
            className="text-5xl text-[#B1D4E0] mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            TESTIMONIALS
          </h1>
        </div>
        <div
          className="flex justify-between text-[#B1D4E0] mb-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p>
            our Shop is a business theme. Perfectly suited for Auto Mechanic,
            Car Repair Shops, Car Wash, Garages, Automobile Mechanicals,
            Mechanic Workshops, Auto Painting, Auto Centres.
          </p>
          <button
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            CHECK ALL TALKS
          </button>
        </div>
      </div>
      <div className="text-[#0f2228] grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="">
          <div
            className="flex bg-slate-400 relative p-6 h-[180px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className=" pr-6 ">
              <div>
                <FaQuoteLeft className="text-5xl opacity-20"></FaQuoteLeft>
              </div>
            </div>
            <div className=" " data-aos="fade-up" data-aos-duration="2000">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                aliquam aliquid illum doloribus, quibusdam recusandae placeat.
                Perferendis aperiam alias itaque.
              </p>
              <span>
                <FaAngleDown className="absolute text-slate-400 text-8xl left-40  -bottom-11"></FaAngleDown>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 ">
            <div className="flex">
              <img
                className="rounded-lg border-2 border-[#59b5d3]"
                src="http://demo.zytheme.com/autoshop/assets/images/testimonials/1.jpg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <div className=" ml-5 ">
                <h1
                  className="text-xl text-[#59b5d3]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Alexsi Sanchas
                </h1>
                <p
                  className="text-[#B1D4E0]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Manager of OD Toys
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="flex bg-slate-400 relative p-6 h-[180px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className=" pr-6 ">
              <div>
                <FaQuoteLeft className="text-5xl opacity-20"></FaQuoteLeft>
              </div>
            </div>
            <div className=" " data-aos="fade-up" data-aos-duration="2000">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                aliquam aliquid illum doloribus, quibusdam recusandae placeat.
                Perferendis aperiam alias itaque.
              </p>
              <span>
                <FaAngleDown className="absolute text-slate-400 text-8xl left-40  -bottom-11"></FaAngleDown>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 ">
            <div className="flex">
              <img
                className="rounded-lg border-2 border-[#59b5d3]"
                src="http://demo.zytheme.com/autoshop/assets/images/testimonials/2.jpg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <div className=" ml-5 ">
                <h1
                  className="text-xl text-[#59b5d3]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Alexsi Sanchas
                </h1>
                <p
                  className="text-[#B1D4E0]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Manager of OD Toys
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="flex bg-slate-400 relative p-6 h-[180px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className=" pr-6 ">
              <div>
                <FaQuoteLeft className="text-5xl opacity-20"></FaQuoteLeft>
              </div>
            </div>
            <div className=" " data-aos="fade-up" data-aos-duration="2000">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                aliquam aliquid illum doloribus, quibusdam recusandae placeat.
                Perferendis aperiam alias itaque.
              </p>
              <span>
                <FaAngleDown className="absolute text-slate-400 text-8xl left-40  -bottom-11"></FaAngleDown>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 ">
            <div className="flex">
              <img
                className="rounded-lg border-2 border-[#59b5d3]"
                src="http://demo.zytheme.com/autoshop/assets/images/testimonials/3.jpg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <div className=" ml-5 ">
                <h1
                  className="text-xl text-[#59b5d3]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Alexsi Sanchas
                </h1>
                <p
                  className="text-[#B1D4E0]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Manager of OD Toys
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
