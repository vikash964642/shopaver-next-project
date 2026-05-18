import React from 'react'
import Herosection from './Section/Herosection';
import HomeSlider from './Section/HomeSlider';
import WhatsappBlueTick from './Section/WhatsappBlueTick';
import BlueTickComparison from './Section/BlueTickComparison';
import RequirementsWhatsapp from './Section/RequirementsWhatsapp';
import FAQ from './Section/FAQ';
function page() {
  return (
    <div>
        <Herosection />
        <HomeSlider />
        <WhatsappBlueTick />
        <BlueTickComparison />
        <RequirementsWhatsapp />
        <FAQ />
    </div>
  )
}

export default page