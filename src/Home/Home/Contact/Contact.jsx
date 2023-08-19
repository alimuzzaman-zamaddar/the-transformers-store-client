import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section-title">
      <div className=" md:text-center p-5 md:py-11 text-white">
        <h1
          className="font-semibold text-5xl mb-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          CONTACT US HERE !!
        </h1>
        <p data-aos="fade-up" data-aos-duration="2000">
          here yoy can find us and visit us offline <br />
          anytime any where we located.
        </p>
      </div>
      <div className="contact-container">
        <div className="information-contact">
          <div className="div">
            <div className="md:text-center md:space-y-3">
              <h1
                className="md:text-3xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Visit our shop at here
              </h1>
              <p data-aos="fade-up" data-aos-duration="2000">
                Mr John Smith
              </p>
              <p data-aos="fade-up" data-aos-duration="2000">
                132, My Street
              </p>
              <p data-aos="fade-up" data-aos-duration="2000">
                Kingston
              </p>
              <p data-aos="fade-up" data-aos-duration="2000">
                New York 12401
              </p>
            </div>
          </div>
          <div className="form">
            <h1
              className="md:text-center md:text-2xl md:py-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              send ou your contact number
            </h1>
            <div className="md:card-body py-5 ">
              <div className="md:form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="md:form-control">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="md:form-control mt-6">
                <button
                  className="btn btn-primary px-7"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.446562448791!2d90.40391914408592!3d23.796839941737996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7ba38543b%3A0x91d5f14ad296d72e!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1684533797878!5m2!1sen!2sbd"
            width="450"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            data-aos="fade-up"
            data-aos-duration="2000"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
