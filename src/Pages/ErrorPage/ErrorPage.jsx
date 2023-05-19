import React from 'react';
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div>
        <section className="">
          <div className="error-info">
            <img src="https://thumbs.dreamstime.com/z/road-sign-error-word-blue-sky-road-sign-error-word-blue-sky-high-quality-d-rendering-153321877.jpg" alt="" />

            <div className="">
              <h2 className="text-error text-6xl mb-5">
                <span className="text-error mb-5">{status || 404}</span>
                <h1 className="mb-5">Error</h1>
              </h2>
              <p className="text-error mb-6">{error?.message}</p>
              <button className="btn btn-error  text-white" >
                <Link to="/" >
                  Back to home page
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
  
    );
};

export default ErrorPage;