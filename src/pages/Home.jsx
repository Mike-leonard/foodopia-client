import React from 'react';
import Carousel from '../components/Carousel';
import FoodMeu from '../components/FoodMeu';
import Catering from '../components/Catering';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FoodMeu></FoodMeu>
            <Catering></Catering>
        </div>
    );
};

export default Home;