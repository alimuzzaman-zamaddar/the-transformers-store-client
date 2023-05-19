import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
           1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>access token and refresh token should not be stored in the local session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie even though there is CSRF and I need it for most of my requests to the Resource Server anyway.
            Modern web browsers support a number of ways for websites to store data on the users computer with the user's permission then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use, retain user-specific settings for your site, and more. This article explains the very basics of how these work.
            </p>
          </div>
        </div>
        <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={1} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={3} attribute is necessary to make the div focusable</p>
          </div>
        </div>
    </div>
  );
};

export default Blogs;
