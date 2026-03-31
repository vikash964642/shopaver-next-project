// import React from 'react'
import Contectsection from './Section/Contectsection';
import FormSection from './Section/FormSection';

export const metadata = {
   metadataBase: new URL("https://shopaver.com"),
  title: " Contact With Us | We're Here to Help You Anytime ",
  description:
    "Need help or have questions? Reach out to Shopaver’s support team anytime for quick, friendly, and reliable assistance. We're here to support you!",
       alternates: {
    canonical: "/contact-us", 
  },
};
function ContactUs() {
  return (
    <div>
      
      <FormSection/>
      <Contectsection/>
    </div>
  )
}

export default ContactUs
