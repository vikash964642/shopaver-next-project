
'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
function CardSlider() {

  const refs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     refs.current.forEach((el, index) => {
  //       if (!el) return

  //       const rect = el.getBoundingClientRect()

  //       // ✅ same working trigger
  //       if (rect.top < window.innerHeight * 0.3) {
  //         setActiveIndex(index)
  //       }
  //     })
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  // const getStyle = (index) => {
  //   const isPast = index < activeIndex
  //   const isPrev = index === activeIndex - 1

  //   return {
  //     top: "8rem",
  //     zIndex: index >= activeIndex ? 10 + index : index,

  //     // ✅ smooth zoom-out (not aggressive)
  //     transform: isPrev
  //       ? "scale(0.75) translateY(-10px)"
  //       : "scale(1)",

  //     // ✅ fade (smooth now)
  //     opacity: isPast ? 0 : 1,

  //     // ✅ KEY FIX (smooth transition)
  //     transition: "transform 0.6s ease, opacity 0.6s ease",
  //   }
  // }

  useEffect(() => {
  const handleScroll = () => {
    let current = 0

    refs.current.forEach((el, index) => {
      if (!el) return

      const rect = el.getBoundingClientRect()

      if (rect.top <= window.innerHeight * 0.4) {
        current = index
      }
    })

    setActiveIndex(current)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])
const getStyle = (index) => {
  const isPast = index < activeIndex
  const isPrev = index === activeIndex - 1

  return {
    top: "8rem",
    zIndex: index >= activeIndex ? 10 + index : index,

    transform: isPrev
      ? "scale(0.75) translateY(-10px)"
      : "scale(1)",

    opacity: isPast ? 0 : 1,

    // 👇 IMPORTANT
    pointerEvents: isPast ? "none" : "auto",

    transition:
      "transform 0.6s ease, opacity 0.6s ease",
  }
}
  return (
    <section className="bg-[#F4FFF7] mt-[70px]">
 <div className='max-w-[90rem] mx-auto md:px-[32px] lg:px-[47px] xl2:px-[150px] xl3:px-[42px] py-[4.3rem] md:py-[60px] lg:py-[80px] xl2:py-[95px] xl3:py-[110px]'>
     <div className="">
 <div className='flex flex-col gap-[1.25rem] items-center'>
       <h1 className='px-[1rem] xm1:px-0 max-w-[22rem] md:max-w-[32.8rem] lg:max-w-[43.75rem] xl2:max-w-[53.1rem] text-[#075E54] text-center text-[1.7rem] xm1:text-[1.875rem] md:text-[1.875rem] lg:text-[2.5rem] xl2:text-[48.44px] font-bold leading-[37px] lg:leading-[48px] xl2:leading-[58px] xl3:leading-[70px] font-bricolage'>The Complete WhatsApp Platform for Your Business Growth</h1>
        <p className='px-[1rem] xm1:px-0 max-w-[20.8125rem] md:max-w-[37rem] lg:max-w-[49.375rem] xl2:max-w-[60rem] text-[#666] text-center text-[0.8rem] xm1:text-[0.898rem] md:text-[0.85rem] lg:text-[1.125rem] xl2:text-[1.363rem] font-normal leading-none font-dm-sans'>Take your business communication to the next level with WhatsApp Business Suite. Engage customers through chat, run targeted campaigns, sell products, track performance with real-time analytics, and connect all your tools, all within the WhatsApp platform.</p>
      </div>
      <div className="flex items-center flex-col  space-y-[5rem] mx-[0.77rem] md:mx-0 mt-[2rem] md:mt-[4rem] lg:mt-[5rem]">

        {/* Card 1 */}
        <div
          ref={(el) => (refs.current[0] = el)}
          style={getStyle(0)}
          className="sticky w-full max-w-[400px] md:max-w-full md:h-[377px] lg:h-[42vw] xl2:h-[38vw]  xl3:h-[680px] px-[1.5625rem] pt-[2.5rem] pb-[4.3rem] md:pt-0 md:pb-0 md:px-[1.5rem] lg:px-[2.09375rem] xl2:px-[2.5rem] rounded-[1.875rem] border shadow-xl bg-[#075E54] will-change-transform flex justify-between items-center gap-[4rem] md:gap-[2.2rem] flex-col md:flex-row overflow-hidden"
        >
          <div className="w-full md:w-[50%] shrink-0">
            <h1 className='text-[#FFF] text-[1.125rem] md:text-[0.91rem] lg:text-[1.21rem] xl2:text-[23.4px] xl3:text-[28.3px] font-semibold leading-normal font-bricolage'>AI Flow Builder</h1>
            <h2 className='text-[#FFF] pt-[0.3125rem] md:w-[14.28rem] lg:w-[75%] text-[1.75rem] md:text-[1.67rem] lg:text-[2.22rem] xl2:text-[43px] xl3:text-[51px] font-medium lg:font-semibold leading-none md:leading-[2rem] lg:leading-[2.663rem] xl2:leading-[3.23rem] xl3:leading-[61px] font-bricolage'>Design a no-code chats in minutes</h2>
            <p className='pt-[0.625rem] md:w-[15rem] lg:w-[75%] xl2:w-[468px] text-[#FFF] text-[0.875rem] lg:text-[0.97rem] xl2:text-[18.75px] xl3:text-[22.6px] font-normal leading-[19px] md:leading-[15px] lg:leading-[20px] xl2:leading-[24px] xl3:leading-[29px] font-dm-sans'>Create flows with drag and drop, or simply describe your flow and let AI build it for you.</p>
            <button className='bg-[#FFF] mt-[1.25rem] lg:mt-[1.875rem] xl2:mt-[42px]  rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.27rem] xl3:h-[76px] lg:w-[9.3125rem] xl3:w-[210px]  text-[0.833rem] lg:text-[1rem] xl2:text-[18.75px] xl3:text-[22.6px] text-[#525252] font-medium font-dm-sans'>Know More</button>
          </div>
          <div className="w-full md:w-[50%] md:h-full flex justify-center items-center ">
            <Image src={"/newImage/CardSliderImg1.webp"} alt="AI Flow Builder" height={400} width={400} className="w-full h-[14.5rem] md:h-[13.6rem] lg:h-[18.16rem] xl2:h-[22rem]" />
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => (refs.current[1] = el)}
          style={getStyle(1)}
          className="sticky w-full max-w-[400px] md:max-w-full md:h-[377px] lg:h-[42vw] xl2:h-[38vw]  xl3:h-[680px] px-[1.5625rem] pt-[2.5rem] pb-[4.3rem] md:pt-0 md:pb-0 md:px-[1.5rem] lg:px-[2.09375rem] xl2:px-[2.5rem] rounded-[1.875rem] border shadow-xl bg-[#128C7E] will-change-transform flex justify-between items-center gap-[4rem] md:gap-[2.2rem] flex-col-reverse md:flex-row overflow-hidden"
        >
          <div className="w-full md:w-[50%] md:h-full flex justify-center items-center ">
            <Image src={"/newImage/CardSliderImg2.webp"} alt="AI WhatsApp Inbox"  height={400} width={400} className="w-full h-[14.5rem] md:h-[13.6rem] lg:h-[18.16rem] xl2:h-[22rem]" />
          </div>
          <div className="w-full md:w-[50%] shrink-0">
            <h1 className='text-[#FFF] text-[1.125rem] md:text-[0.91rem] lg:text-[1.21rem] xl:text-[23.4px] xl2:text-[28.3px] font-semibold leading-normal font-bricolage'>AI WhatsApp Inbox</h1>
            <h2 className='text-[#FFF] pt-[0.3125rem] md:w-[17.75rem] lg:w-full text-[1.75rem] md:text-[1.67rem] lg:text-[2.22rem] xl2:text-[43px] xl3:text-[51px] font-medium lg:font-semibold leading-none md:leading-[2rem] lg:leading-[2.663rem] xl2:leading-[3.23rem] xl3:leading-[61px] font-bricolage'>Turn Every Chat Into a Sales on WhatsApp</h2>
            <p className='pt-[0.625rem] lg:w-[22.3rem] xl2:w-[520px] text-[#FFF] text-[0.875rem] lg:text-[0.97rem] xl2:text-[18.75px] xl3:text-[22.6px] leading-[19px] md:leading-[15px] lg:leading-[20px] xl2:leading-[24px] xl3:leading-[29px] font-normal font-dm-sans'>Automate conversations, track customer behavior & close more deals—without missing a single message.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] xl2:mt-[42px] bg-[#FFF] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.27rem] xl3:h-[76px] lg:w-[9.3125rem] xl3:w-[210px]  text-[0.833rem] lg:text-[1rem] xl2:text-[18.75px] xl3:text-[22.6px] text-[#525252]  font-medium font-dm-sans'>Know More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => (refs.current[2] = el)}
          style={getStyle(2)}
          className="sticky w-full max-w-[400px] md:max-w-full md:h-[377px] lg:h-[42vw] xl2:h-[38vw]  xl3:h-[680px] px-[1.5625rem] pt-[2.5rem] pb-[4.3rem] md:pt-0 md:pb-0 md:px-[1.5rem] lg:px-[2.09375rem] xl2:px-[2.5rem] rounded-[1.875rem] border shadow-xl bg-[#DCF8C6] will-change-transform flex justify-between items-center gap-[4rem] md:gap-[2.2rem] flex-col md:flex-row overflow-hidden"
        >
          <div className="w-full md:w-[50%] shrink-0">
            <h1 className='text-[#525252] text-[1.125rem] md:text-[0.91rem] lg:text-[1.21rem] xl:text-[23.4px] xl2:text-[28.3px] font-semibold leading-normal font-bricolage'>WhatsApp Marketing</h1>
            <h2 className='text-[#075E54] pt-[0.3125rem] md:w-[17.75rem] lg:w-[23.75rem] xl2:w-[514px] text-[1.75rem] md:text-[1.67rem] lg:text-[2.22rem] xl2:text-[43px] xl3:text-[51px] font-medium lg:font-semibold leading-none md:leading-[2rem] lg:leading-[2.663rem] xl2:leading-[3.23rem] xl3:leading-[61px] font-bricolage'>Increase Sales with Targeted Campaigns</h2>
            <p className=' text-[#525252] pt-[0.625rem] lg:w-[21.75rem] xl2:w-[506px] text-[0.875rem] lg:text-[0.97rem] xl2:text-[18.75px] xl3:text-[22.6px] font-normal leading-[19px] md:leading-[15px] lg:leading-[20px] xl2:leading-[24px] xl3:leading-[29px] font-dm-sans'>Send bulk broadcasts, personalized campaigns, and promotional offers in one click.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] xl2:mt-[42px] bg-[#075E54] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.27rem] xl3:h-[76px] lg:w-[9.3125rem] xl3:w-[210px]  text-[0.833rem] lg:text-[1rem] xl2:text-[18.75px] xl3:text-[22.6px] text-[#FFF] font-medium font-dm-sans'>Know More</button>
          </div>
          <div className="w-full md:w-[50%] md:h-full flex justify-center items-center ">
            <Image src={"/newImage/CardSliderImg3.webp"} alt="WhatsApp Marketing" height={400} width={400} className="w-full h-[14.5rem] md:h-[13.6rem] lg:h-[18.16rem] xl2:h-[22rem]" />
          </div>
        </div>

        {/* Card 4 */}
        <div
          ref={(el) => (refs.current[3] = el)}
          style={getStyle(3)}
          className="sticky w-full max-w-[400px] md:max-w-full md:h-[377px] lg:h-[42vw] xl2:h-[38vw] xl3:h-[680px] px-[1.5625rem] pt-[2.5rem] pb-[4.3rem] md:pt-0 md:pb-0 md:px-[1.5rem] lg:px-[2.09375rem] xl2:px-[2.5rem] rounded-[1.875rem] border shadow-xl bg-[#ECE5DD] will-change-transform flex justify-between items-center gap-[4rem] md:gap-[2.2rem] flex-col-reverse md:flex-row overflow-hidden"
        >
          <div className="w-full md:w-[50%] md:h-full flex justify-center items-center ">
            <Image src={"/newImage/CardSliderImg4.webp"} alt="WhatsApp Payments" height={400} width={400} className="w-full h-[14.5rem] md:h-[13.6rem] lg:h-[18.16rem] xl2:h-[22rem]"/>
          </div>
          <div className="w-full md:w-[50%] shrink-0">
            <h1 className='text-[#525252] text-[1.125rem] md:text-[0.91rem] lg:text-[1.21rem] xl:text-[23.4px] xl2:text-[28.3px] font-semibold leading-normal font-bricolage'>WhatsApp Payments</h1>
            <h2 className=' text-[#075E54] pt-[0.3125rem] md:w-[17.75rem] lg:w-[23.75rem] xl2:w-[515px] text-[1.75rem] md:text-[1.67rem] lg:text-[2.22rem] xl2:text-[43px] xl3:text-[51px] font-medium lg:font-semibold leading-none md:leading-[2rem] lg:leading-[2.663rem] xl2:leading-[3.23rem] xl3:leading-[61px] font-bricolage'>Sales and Payments All in One Place</h2>
            <p className='text-[#525252] pt-[0.625rem] md:w-[17.5rem] lg:w-[20.75rem] xl2:w-[481px] text-[0.875rem] lg:text-[0.97rem] xl2:text-[18.75px] xl3:text-[22.6px] font-normal leading-[19px] md:leading-[15px] lg:leading-[20px] xl2:leading-[24px] xl3:leading-[29px] font-dm-sans'>Collect payments seamlessly inside WhatsApp via UPI, cards, and net banking.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] xl2:mt-[42px] bg-[#075E54] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.27rem] xl3:h-[76px] lg:w-[9.3125rem] xl3:w-[210px]  text-[0.833rem] lg:text-[1rem] xl2:text-[18.75px] xl3:text-[22.6px] text-[#FFF] font-medium font-dm-sans'>Know More</button>
          </div>
        </div>

        {/* Card 5 */}
        <div
          ref={(el) => (refs.current[4] = el)}
          style={getStyle(4)}
          className="sticky w-full max-w-[400px] md:max-w-full md:h-[377px] lg:h-[42vw] xl2:h-[38vw]  xl3:h-[680px] px-[1.5625rem] pt-[2.5rem] pb-[4.3rem] md:pt-0 md:pb-0 md:px-[1.5rem] lg:px-[2.09375rem] xl2:px-[2.5rem] rounded-[1.875rem] border shadow-xl bg-[#FFF] will-change-transform flex justify-between items-center gap-[4rem] md:gap-[2.2rem] flex-col-reverse md:flex-row overflow-hidden"
        >
          <div className="w-full md:w-[50%] md:h-full flex justify-center items-center ">
            <Image src={"/newImage/CardSliderImg5.webp"} alt="QR Code" height={400} width={400} className="w-auto h-[14.5rem] md:h-[13.6rem] lg:h-[18.16rem] xl2:h-[22rem]" />
          </div>
          <div className="w-full md:w-[50%] shrink-0">
            <h1 className='text-[#525252] text-[1.125rem] md:text-[0.91rem] lg:text-[1.21rem] xl:text-[23.4px] xl2:text-[28.3px] font-semibold leading-normal font-bricolage'>QR Code</h1>
            <h2 className=' text-[#2E9F49] pt-[0.3125rem] md:w-[21rem] lg:w-[28rem] xl2:w-full xl3:w-[648px] text-[1.75rem] md:text-[1.67rem] lg:text-[2.22rem] xl2:text-[43px] xl3:text-[51px] font-medium lg:font-semibold leading-none md:leading-[2rem] lg:leading-[2.663rem] xl2:leading-[3.23rem] xl3:leading-[61px] font-bricolage'>Get a QR Code to Connect your customers instantly</h2>
            <p className='text-[#525252] pt-[0.625rem] md:w-[17.5rem] lg:w-[20.75rem] xl2:w-[550px] text-[0.875rem] lg:text-[0.97rem] xl2:text-[18.75px] xl3:text-[22.6px] font-normal leading-[19px] md:leading-[15px] lg:leading-[20px] xl2:leading-[24px] xl3:leading-[29px] font-dm-sans'>Automate conversations, track customer behavior & close more deals—without missing a single message.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] xl2:mt-[42px] bg-[#2E9F49] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.27rem] xl3:h-[76px] lg:w-[9.3125rem] xl3:w-[210px]  text-[0.833rem] lg:text-[1rem] xl2:text-[18.75px] xl3:text-[22.6px] text-[#FFF] font-medium font-dm-sans'>Know More</button>
          </div>
        </div>

      </div>

    </div>
 </div>
    </section>
  )
}

export default CardSlider