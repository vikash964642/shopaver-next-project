import HeroSection from "./Section/HeroSection";
import FlowBuilderAnimation from "./Section/FlowBuilderAnimation";
import BenefitsSection from "./Section/BenefitsSection";
import BusinessHeroSection from './Section/BusinessHeroSection';
import FAQ from './Section/FAQ';
import LandingPageList from'../newHome/Section/LandingPageList';
import HomeSlider from "../newHome/Section/HomeSlider";
function page() {
  return (
    <div>
      <HeroSection />
      <HomeSlider />
      <FlowBuilderAnimation />
      <BenefitsSection />
      <LandingPageList />
      <FAQ />
      <BusinessHeroSection />

    </div>
  )
}

export default page
