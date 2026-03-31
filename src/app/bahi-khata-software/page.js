// import React from 'react'
import Feature from './Section/Feature'
import Herosection from './Section/Herosection'
import Video from './Section/Video'
import Form from '../../Component/Utils/Form';
import KhataTitle from './Section/KhataTitle'
import FAQ from './Section/FAQ';
import BlackBox from './Section/BlackBox';
import Service from './Section/Services'

export const metadata = {
   metadataBase: new URL("https://shopaver.com"),
  title: "Best Digital Bahi Khata Software for Retail Shops",
  description:
    "Manual hisaab se pareshan? Customers aur paisa dono slip ho rahe hain! Shopaver Bahi Khata Software use karein—fast, accurate, aur tension free. Start now!",
       alternates: {
    canonical: "/bahi-khata-software", 
  },
};
function Khatapage() {
  return (
    <>

    <Herosection/>
    <Video/>
    <KhataTitle/>
    <Feature/>
    <BlackBox/>
    <Form from={"Khata"}/>
    <FAQ/>
    <Service/>

    </>
  )
}

export default Khatapage