// import React from 'react'
import Solution from "./Sections/Solution"
import HeroSection from "./Sections/HeroSection"
import Introsection from "./Sections/Introsection"
import MissionVision from "./Sections/MissionVision"
import Features from "./Sections/Features"
import Form from '@/component/Utils/Form';

export const metadata = {
  title: " India's Most Trusted Business Super App",
  description:
    "Shopaver POS is India's No.1 app for simple billing, managing stock, and sales. Make your business work faster and smarter with ease!",
    url:"https://shopaver.com/about-us"
};
const About = () => {
  return (  
    <div>
       
       
      < HeroSection/>
      <Introsection/>
      <MissionVision/>
      <Solution/>
      <Features/>
      <Form from={"About"}/>
    </div>
  )
}

export default About
