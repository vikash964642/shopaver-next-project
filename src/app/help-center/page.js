// import React from 'react'
import Herosection from './section/Herosection'
import Support from './section/Support'
import GetInTouch from './section/GetInTouch'
import Fromsection from './section/FormSection'

export const metadata = {
  title: " Need Help? Visit the Shopaver Help Center",
  description:
"Shopaver Help Center is here for you! Get support, find answers, and solve issues fast—all in one place for a seamless shopping experience."  ,
  url:"https://shopaver.com/help-center"
};
function HelpCenter() {
  return (
    <div>
      
      <Herosection/>
      <Support/>
      <GetInTouch/>
      <Fromsection/>
    </div>
  )
}

export default HelpCenter
