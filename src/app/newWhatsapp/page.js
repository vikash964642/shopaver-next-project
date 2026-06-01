import React from 'react'
import Herosection from './Section/Herosection';
import HomeSlider from './Section/HomeSlider';
import WhatsappBlueTick from './Section/WhatsappBlueTick';
import BlueTickComparison from './Section/BlueTickComparison';
import RequirementsWhatsapp from './Section/RequirementsWhatsapp';
import FAQ from './Section/FAQ';
import BusinessHeroSection from './Section/BusinessHeroSection';
import WhatsappVarification from './Section/WhatsappVarification';
import BenefitsWhatsappBlueTick from './Section/BenefitsWhatsappBlueTick';
import WhatsappBlueTickSlider from './Section/WhatsappBlueTickSlider';
function page() {
  return (
    <div>
        <Herosection />
        <HomeSlider />
        <WhatsappBlueTick />
        <BlueTickComparison />
        <WhatsappBlueTickSlider />
        <RequirementsWhatsapp />
        <BenefitsWhatsappBlueTick /> 
        <WhatsappVarification />
        <FAQ />
        <BusinessHeroSection />
    </div>
  )
}

export default page