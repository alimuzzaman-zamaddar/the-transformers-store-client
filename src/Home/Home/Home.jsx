import React from 'react';
import Category from '../../Pages/Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../Hooks/useTitle';
import Gallery from '../Gallery/Gallery';
import Contact from './Contact/contact';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;