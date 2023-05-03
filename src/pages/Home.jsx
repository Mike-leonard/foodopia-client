import React from 'react';
import Carousel from '../components/Carousel';
import FoodMeu from '../components/FoodMenu';
import Catering from '../components/Catering';
import OurTeam from '../components/OurTeam';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FoodMeu></FoodMeu>
            <Catering></Catering>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;