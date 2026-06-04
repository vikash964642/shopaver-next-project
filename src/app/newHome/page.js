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
import BusinessHeroSection from './Section/BusinessHeroSection';

function page() {
  return (
    <div>
        <HeroSection />
         <RotatingCircle />
          <HomeSlider />
         <CardSlider />
          <SmartFeaturesSection />
    <LandingPageList heading="Built to Scale Across Every Industry" />
        <Counter />
        <CarouselSlider />
        <FAQ />
        <BusinessHeroSection />
    </div>
  )
}

export default page