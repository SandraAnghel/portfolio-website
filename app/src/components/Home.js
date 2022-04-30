import React from 'react';
import Services from './Services';
import HomeGrowthTips from './HomeGrowthTips';
import PreviousWork from './PreviousWork';
import Testimonials from './Testimonials';
import CoffeeShops from './CoffeeShops';

export default function Home() {

    return (
        <>
         <CoffeeShops/>
            <Services />
            <HomeGrowthTips/>
            <Testimonials/>
            <PreviousWork/>
        </>
    );
}