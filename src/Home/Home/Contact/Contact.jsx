import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section-title">
      <div className=" text-center py-11 text-white">
        <h1 className="font-semibold text-5xl mb-5">CONTACT US HERE !!</h1>
        <p>
          here yoy can find us and visit us offline <br />
          anytime any where we located.{" "}
        </p>
      </div>
      <div className="contact-container">
        <div className="information-contact">
          <div className="div">
            <div className="div text-center space-y-3">
                <h1 className="text-3xl font-semibold">Visit our shop at here</h1>
              <p>Mr John Smith</p>
              <p>132, My Street</p>
              <p>Kingston</p>
              <p>New York 12401</p>
            </div>
          </div>
          <div className="form">
            <h1 className="text-center text-2xl py-4">send ou your contact number</h1>
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary"> Send </button>
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
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
