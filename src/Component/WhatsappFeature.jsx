"use client"
import React from 'react'

function WhatsappFeature() {
  return (
    
   <div className='h-[50px] flex justify-center items-center w-[50px] rounded-full bg-[#25d366] fixed bottom-[32px] right-[32px] z-[999]'>
     <a
              href="https://wa.me/919266743777?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[25px] text-[#FFF]"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
   </div>
    
  )
}

export default WhatsappFeature