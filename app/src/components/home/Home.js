import React from 'react';
import Services from '../services/Services';
import HomeGrowthTips from './HomeGrowthTips';
import PreviousWork from './PreviousWork';
import Testimonials from './Testimonials';

export default function Home() {

    return (
        <>
            <Services />
            <HomeGrowthTips/>
            <Testimonials/>
            <PreviousWork/>
        </>
    );
}