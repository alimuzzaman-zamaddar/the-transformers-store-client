import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="mb-14">
         <h1 className="text-5xl font-bold text-center py-5 mb-8">Question answer section is here ??</h1>
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
            3.  What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>express is a minimalist and flexible framework that is easy to use and has a large community of developers next js on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive cli
            in conclusion  both express and nest js are popular Node js frameworks that provide different features and benefits. express is a minimalist and flexible framework that is easy to use and has a large community of developers. next js on the other hand is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive cli. ultimately, the choice between these frameworks will depend on your specific needs and requirements.
            </p>
          </div>
        </div>
        <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
             4. What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>What is aggrament in mongodb aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter sort group reshape and modify documents that pass through the pipeline.
            One of the most common use cases of aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in sql with the group by clause and count sum and avg functions. mongodb aggregation goes further though and can also perform relational like joins  reshape documents  create new and update existing collections, and so on. 
            </p>
          </div>
        </div>
    </div>
  );
};

export default Blogs;
