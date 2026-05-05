'use client'
import Counter from './Section/Counter';
import HeroSection from './Section/HeroSection';
import HomeSlider from './Section/HomeSlider';
import CarouselSlider from './Section/CarouselSlider';
function page() {
  return (
    <div>
        <HeroSection />
          <HomeSlider />
        <Counter />
        <CarouselSlider />
    </div>
  )
}

export default page