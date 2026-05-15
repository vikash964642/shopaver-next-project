import React from 'react'
import Herosection from './Section/Herosection';
import HomeSlider from './Section/HomeSlider';
import WhatsappBlueTick from './Section/WhatsappBlueTick';
import BlueTickComparison from './Section/BlueTickComparison';
import RequirementsWhatsapp from './Section/RequirementsWhatsapp';
function page() {
  return (
    <div>
        <Herosection />
        <HomeSlider />
        <WhatsappBlueTick />
        <BlueTickComparison />
        <RequirementsWhatsapp />
    </div>
  )
}

export default page