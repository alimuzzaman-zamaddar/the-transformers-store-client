import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="my-14">
         <h1 className="text-6xl font-bold text-center py-5">Question answer section is here ??</h1>
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
            2 .Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>sql databases are vertically scalable, while nosql databases are horizontally scalable. sql databases are table-based, while nosql databases are document, key-value, graph, or wide-column stores. sql databases are better for multi-row transactions, while nosql is better for unstructured data like documents or json
            nosql stands for Not only sql. It is a type of database that uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data. nosql systems are designed to be more flexible than traditional relational databases and can scale up or down easily to accommodate changes in usage or load. This makes them ideal for use in applications
            </p>
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
