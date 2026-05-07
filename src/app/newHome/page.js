'use client'
import Counter from './Section/Counter';
import HeroSection from './Section/HeroSection';
import HomeSlider from './Section/HomeSlider';
import CarouselSlider from './Section/CarouselSlider';
import CardSlider from './Section/CardSlider';
import CompleteWhatsapp from './Section/CompleteWhatsapp';
import FAQ from './Section/FAQ';
function page() {
  return (
    <div>
        <HeroSection />
          <HomeSlider />
          <CompleteWhatsapp />
          <CardSlider />
        <Counter />
        <CarouselSlider />
        <FAQ />
    </div>
  )
}

export default page