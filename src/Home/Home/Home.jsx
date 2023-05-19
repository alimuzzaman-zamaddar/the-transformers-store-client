import React from 'react';
import Category from '../../Pages/Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            
        </div>
    );
};

export default Home;