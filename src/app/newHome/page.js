'use client'
import Counter from './Section/Counter';
import HeroSection from './Section/HeroSection';
import HomeSlider from './Section/HomeSlider';

import CarouselSlider from './Section/CarouselSlider';
import CardSlider from './Section/CardSlider';
import RotatingCircle from './Section/RotatingCircle';
import FAQ from './Section/FAQ';

import SmartFeaturesSection from './Section/SmartFeaturesSection';
import LandingPageList from './Section/LandingPageList';


function page() {
  return (
    <div>
        <HeroSection />
         <RotatingCircle />
          <HomeSlider />

         <CardSlider />

          <SmartFeaturesSection />
<LandingPageList />
        <Counter />
        <CarouselSlider />
        <FAQ />
    </div>
  )
}

export default page