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
  title: " Best Digital Bahi Khata & Ledger App for Android for Retail Shop",
  description:
    "Digital bahi khata or ledger accounting software simplifies bookkeeping, tracks expense, saves time, and ensures easy and accurate financial records",
    url:"https://shopaver.com/bahi-khata-software"
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