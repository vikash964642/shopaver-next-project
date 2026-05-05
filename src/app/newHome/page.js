import React from 'react'
import Counter from './Section/Counter';
import HeroSection from './Section/HeroSection';
import HomeSlider from './Section/HomeSlider';
function page() {
  return (
    <div>
        <HeroSection />
          <HomeSlider />
        <Counter />
    </div>
  )
}

export default page