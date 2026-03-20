// import React from 'react'
import FeaturesBox from "../../../Component/Utils/FeaturesBox";

function Features() {
  return (
    <section className="md:px-9 md:pt-32">
     <div className="">
       <div className="flex max-w-screen-lg flex-wrap mx-auto justify-center items-center">
         <FeaturesBox link="/pos-billing-software"  img={'features-image-1.svg'} alt={'POS Billing'}  head={'POS Billing Software'} para={"Unlock seamless business management with Shopaver's unified point-of-sale solution. Simplify billing, inventory, payments, CRM, and more for effortless control."}/>
         <FeaturesBox link="/bahi-khata-software"  img={'features-image-2.svg'} alt={'Khata'} head={'Digital Bahi Khata'} para={"Upgrade from manual ledger books to Shopaver's advanced Digital Khata, effortlessly managing countless customer transactions individually. "}/>
         <FeaturesBox link="/whatsapp-commerce"  img={'features-image-3.svg'} alt={'WhatsApp Commerce'} head={'WhatsApp Commerce'} para={"Utilize QR codes on physical materials to showcase your catalog and attract customers with special deals, driving interest and purchases. Create attracting product displays to delight customers and boost sales."}/>
         <FeaturesBox link="/quick-billing-software"  img={'features-image-4.svg'} alt={'Quick Billing'} head={'Quick Billing Software'} para={"Instant invoicing. Rapid Results- our Quick billing solution keeps our business moving forward. Quickly create bills for customers and speed up checkouts with Shopaver's user-friendly billing software"}/>
         {/* <FeaturesBox link="/ondc-billing-software"  img={'features-image-5.svg'} alt={'ONDC'} head={'ONDC'} para={"ONDC promotes transparency in digital transactions, providing clear information about pricing, terms of service, and other relevant details to users."}/> */}
         <FeaturesBox link="/inventory-management-software"  img={'features-image-6.svg'} alt={'Inventory'} head={'Inventory Software'} para={"Simplify stock management with our intuitive software. Track inventory, predict reorder times, and maintain optimal stock levels effortlessly"}/>
         <FeaturesBox link="/online-store"  img={'features-image-7.svg'} alt={'Online Store'} head={'Online Store'} para={"Expand your customer base and accelerate your growth journey with Shopaver’s online store. Expand your reach and elevate service with a store website, accessible 24/7, set up in minutes."}/>
       </div>
     </div>
    </section>
  );
}

export default Features;
