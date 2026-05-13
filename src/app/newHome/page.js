import React from 'react'
import Counter from './Section/Counter';
import HeroSection from './Section/HeroSection';
import HomeSlider from './Section/HomeSlider';
import SmartFeaturesSection from './Section/SmartFeaturesSection';


function page() {
  return (
    <div>
        <HeroSection />
          <HomeSlider />
          <SmartFeaturesSection />
        <Counter />
    </div>
  )
}

export default page