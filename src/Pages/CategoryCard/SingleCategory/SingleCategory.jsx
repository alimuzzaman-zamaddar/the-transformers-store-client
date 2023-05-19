import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCategory = () => {
    const singleCategory = useLoaderData();
    console.log(singleCategory)
    return (
        <div>
            
        </div>
    );
};

export default SingleCategory;