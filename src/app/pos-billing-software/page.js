// import React from 'react';
import BlackBox from "./Section/BlackBox"
import Features from "./Section/Features"
import Herosection from "./Section/Herosection"
import Videosection from "./Section/Videosection"
import Form from "@/Component/Utils/Form"
import FAQ from "./Section/FAQ"
import Services from "./Section/Services";
import PosbillingTitle from "./Section/PosbillingTitle"
// import CustomHelmet from "../../Utils/Helmet"

export const metadata = {
  title: " Best POS Billing Software for Retail & Small Businesses.",
  description:
    "India’s top cloud POS-billing-software for retail & restaurants. Manage billing, sales, inventory & customers. Fast, easy & reliable. Book a free demo!",
    url:"https://shopaver.com/pos-billing-software"
};

function PosBilling() {
  return (
    <>
         

   <Herosection />
   <Videosection/>
   <PosbillingTitle/>
   <Features/>
   <BlackBox/>
   <Form from={"Posbilling"}/>
   <FAQ/>
   <Services/>
   </>
  )
}

export default PosBilling
