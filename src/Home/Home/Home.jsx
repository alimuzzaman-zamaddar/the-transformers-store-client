import React from 'react';
import Category from '../../Pages/Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../Hooks/useTitle';
import Gallery from '../Gallery/Gallery';
import Contact from './Contact/contact';
import Card from '../Card/Card';
import Testimonials from '../Testimonials/testimonials';
import Trust from './Trust/Trust';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Testimonials></Testimonials>
            <Trust></Trust>
            <Gallery></Gallery>
            <Contact></Contact>
            <Card></Card>
        </div>
    );
};

export default Home;