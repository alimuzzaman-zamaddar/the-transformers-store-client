import React from 'react';
import Category from '../../Pages/Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../Hooks/useTitle';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Gallery></Gallery>
            
            
        </div>
    );
};

export default Home;