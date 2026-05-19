// import React from 'react'

// function CardSlider() {
//   return (
//     <div className='max-w-5xl mx-auto mt-[80px]'>
//      <div className='mx-[33.5px]'>
//         <div className='h-[500px] px-[33.5px] bg-[#075E54] rounded-[30px]'>

//         </div>
//         <div className='h-[500px] px-[33.5px] bg-[#128C7E] rounded-[30px]'>

//         </div>
//         <div className='h-[500px] px-[33.5px] bg-[#DCF8C6] rounded-[30px]'>

//         </div>
//         <div className='h-[500px] px-[33.5px] bg-[#ECE5DD] border border-[#D1D1D1] rounded-[30px]'>

//         </div>
//         <div className='h-[500px] px-[33.5px] bg-[#FFF] border border-[#D1D1D1] rounded-[30px]'>

//         </div>
//      </div>
//     </div>
//   )
// }

// export default CardSlider




// 'use client'
// import React, { useEffect, useRef, useState } from 'react'

// function CardSlider() {

//   const colors = [
//     "#075E54",
//     "#128C7E",
//     "#DCF8C6",
//     "#ECE5DD",
//     "#FFF",
//   ]

//   const refs = useRef([])
//   const [activeIndex, setActiveIndex] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       refs.current.forEach((el, index) => {
//         if (!el) return

//         const rect = el.getBoundingClientRect()

//         // 👇 center trigger (50% overlap feel)
//         if (rect.top < window.innerHeight * 0.3) {
//           setActiveIndex(index)
//         }
//       })
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div className="max-w-5xl mx-auto mt-[80px]">

//       <div className="space-y-[80px]">

//         {colors.map((color, index) => {

//           const isPast = index < activeIndex
//           const isPrev = index === activeIndex - 1

//           return (
//             <div
//               key={index}
//               ref={(el) => (refs.current[index] = el)}
//               className="sticky h-[500px] rounded-[30px] border transition-all duration-500 ease-out shadow-xl"
//               style={{
//                 background: color,
//                 top: "5rem",
//                 zIndex: index >= activeIndex ? 10 + index : index,

//                 // 👇 only previous shrink
//                 // transform: isPrev ? "scale(0.85)" : "scale(1)",
//                 transform: isPrev ? "scale(0.4) translateY(-10px)" : "scale(1)",

//                 // 👇 hide ONLY after overlap
//                 opacity: isPast ? 0 : 1,
//               }}
//             />
//           )
//         })}

//       </div>

//     </div>
//   )
// }

// export default CardSlider


'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
function CardSlider() {

  const refs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach((el, index) => {
        if (!el) return

        const rect = el.getBoundingClientRect()

        // ✅ same working trigger
        if (rect.top < window.innerHeight * 0.3) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getStyle = (index) => {
    const isPast = index < activeIndex
    const isPrev = index === activeIndex - 1

    return {
      top: "5rem",
      zIndex: index >= activeIndex ? 10 + index : index,

      // ✅ smooth zoom-out (not aggressive)
      transform: isPrev
        ? "scale(0.75) translateY(-10px)"
        : "scale(1)",

      // ✅ fade (smooth now)
      opacity: isPast ? 0 : 1,

      // ✅ KEY FIX (smooth transition)
      transition: "transform 0.6s ease, opacity 0.6s ease",
    }
  }

  return (
    <section className="max-w-[115.625rem] mx-auto mt-[7.5rem]">
    <div className="mx-32">
 <div className='flex flex-col gap-[1.25rem] items-center'>
       <h1 className='max-w-[21.5625rem] lg:max-w-[43.75rem] text-[#075E54] text-center text-[1.875rem] lg:text-[2.5rem] font-bold leading-normal font-bricolage'>The Complete WhatsApp Platform for Your Business Growth</h1>
        <p className='max-w-[20.8125rem] lg:max-w-[49.375rem] text-[#666] text-center text-[0.875rem] lg:text-[1.125rem] font-normal leading-normal font-dm-sans'>Take your business communication to the next level with WhatsApp Business Suite. Engage customers through chat, run targeted campaigns, sell products, track performance with real-time analytics, and connect all your tools, all within the WhatsApp platform.</p>
      </div>
      <div className="space-y-[5rem] mx-[0.75rem] lg:mx-[2.09375rem] mt-[5rem]">

        {/* Card 1 */}
        <div
          ref={(el) => (refs.current[0] = el)}
          style={getStyle(0)}
          className="sticky h-[44.625rem] w-[82.5rem] mx-auto px-[1.5625rem] pt-[2.75rem] pb-[1.875rem] lg:px-[2.09375rem] rounded-[1.875rem] border shadow-xl bg-[#075E54] will-change-transform flex justify-between items-center gap-[1.25rem] flex-col lg:flex-row overflow-hidden"
        >
          <div className="w-full lg:w-[45%] shrink-0">
            <h1 className='text-[#FFF] text-[1.125rem] lg:text-[1.25rem] font-semibold leading-normal font-bricolage'>AI Flow Builder</h1>
            <h2 className='pt-[0.3125rem] text-[#FFF] text-[1.75rem] lg:text-[2.294rem] font-medium lg:font-semibold leading-normal lg:leading-[2.75rem] font-bricolage'>Design a no-code chats in minutes</h2>
            <p className='pt-[0.625rem] text-[#FFF] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans'>Create flows with drag and drop, or simply describe your flow and let AI build it for you.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] bg-[#FFF] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.375rem] lg:w-[9.3125rem] text-[#525252] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans'>Know More</button>
          </div>
          <div className="w-full lg:w-[50%] h-[35vw] lg:h-full relative shrink-0">
            <Image src={"/img/CardSliderImg1.png"} alt="AI Flow Builder" fill className="object-contain object-center" />
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => (refs.current[1] = el)}
          style={getStyle(1)}
          className="sticky h-[44.625rem] w-[82.5rem] mx-auto px-[1.5625rem] pt-[2.75rem] pb-[1.875rem] lg:px-[2.09375rem] rounded-[1.875rem] shadow-xl bg-[#128C7E] will-change-transform flex justify-between items-center gap-[1.25rem] flex-col-reverse lg:flex-row overflow-hidden"
        >
          <div className="w-full lg:w-[50%] h-[35vw] lg:h-full relative shrink-0">
            <Image src={"/img/CardSliderImg1.png"} alt="AI WhatsApp Inbox" fill className="object-contain object-center" />
          </div>
          <div className="w-full lg:w-[45%] shrink-0">
            <h1 className='text-[#FFF] text-[1.125rem] lg:text-[1.25rem] font-semibold leading-normal font-bricolage'>AI WhatsApp Inbox</h1>
            <h2 className='pt-[0.3125rem] text-[#FFF] text-[1.75rem] lg:text-[2.294rem] font-medium lg:font-semibold leading-normal lg:leading-[2.75rem] font-bricolage'>Turn Every Chat Into a Sales on WhatsApp</h2>
            <p className='pt-[0.625rem] text-[#FFF] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans'>Automate conversations, track customer behavior & close more deals—without missing a single message.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] bg-[#FFF] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.375rem] lg:w-[9.3125rem] text-[#525252] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans'>Know More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => (refs.current[2] = el)}
          style={getStyle(2)}
          className="sticky h-[44.625rem] w-[82.5rem] mx-auto px-[1.5625rem] pt-[2.75rem] pb-[1.875rem] lg:px-[2.09375rem] rounded-[1.875rem] shadow-xl bg-[#DCF8C6] will-change-transform flex justify-between items-center gap-[1.25rem] flex-col lg:flex-row overflow-hidden"
        >
          <div className="w-full lg:w-[45%] shrink-0">
            <h1 className='text-[#525252] text-[1.25rem] font-semibold leading-normal font-bricolage'>WhatsApp Marketing</h1>
            <h2 className='pt-[0.3125rem] text-[#075E54] text-[1.75rem] lg:text-[2.294rem] font-medium lg:font-semibold leading-normal lg:leading-[2.75rem] font-bricolage'>Increase Sales with Targeted Campaigns</h2>
            <p className='pt-[0.625rem] text-[#525252] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans'>Send bulk broadcasts, personalized campaigns, and promotional offers in one click.</p>
            <button className='mt-[1.875rem] bg-[#075E54] rounded-[0.5625rem] lg:rounded-[0.6875rem] lg:h-[3.375rem] lg:w-[9.3125rem] h-[2.8125rem] w-[7.75rem] text-[#FFF] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans'>Know More</button>
          </div>
          <div className="w-full lg:w-[50%] h-[35vw] lg:h-full relative shrink-0">
            <Image src={"/img/CardSliderImg1.png"} alt="WhatsApp Marketing" fill className="object-contain object-center" />
          </div>
        </div>

        {/* Card 4 */}
        <div
          ref={(el) => (refs.current[3] = el)}
          style={getStyle(3)}
          className="sticky h-[44.625rem] w-[82.5rem] mx-auto px-[1.5625rem] pt-[2.75rem] pb-[1.875rem] lg:px-[2.09375rem] rounded-[1.875rem] border shadow-xl bg-[#ECE5DD] will-change-transform flex justify-between items-center gap-[1.25rem] flex-col-reverse lg:flex-row overflow-hidden"
        >
          <div className="w-full lg:w-[50%] h-[35vw] lg:h-full relative shrink-0">
            <Image src={"/img/CardSliderImg1.png"} alt="WhatsApp Payments" fill className="object-contain object-center" />
          </div>
          <div className="w-full lg:w-[45%] shrink-0">
            <h1 className='text-[#525252] text-[1.125rem] lg:text-[1.25rem] font-semibold leading-normal font-bricolage'>WhatsApp Payments</h1>
            <h2 className='pt-[0.3125rem] text-[#075E54] text-[1.75rem] lg:text-[2.294rem] font-medium lg:font-semibold leading-normal lg:leading-[2.75rem] font-bricolage'>Sales and Payments All in One Place</h2>
            <p className='pt-[0.625rem] text-[#525252] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans'>Collect payments seamlessly inside WhatsApp via UPI, cards, and net banking.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] bg-[#075E54] rounded-[0.5625rem] lg:rounded-[0.6875rem] lg:h-[3.375rem] lg:w-[9.3125rem] h-[2.8125rem] w-[7.75rem] text-[#FFF] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans'>Know More</button>
          </div>
        </div>

        {/* Card 5 */}
        <div
          ref={(el) => (refs.current[4] = el)}
          style={getStyle(4)}
          className="sticky h-[44.625rem] w-[82.5rem] mx-auto px-[1.5625rem] pt-[2.75rem] pb-[1.875rem] lg:px-[2.09375rem] rounded-[1.875rem] border shadow-xl bg-[#FFF] will-change-transform flex justify-between items-center gap-[1.25rem] flex-col-reverse lg:flex-row overflow-hidden"
        >
          <div className="w-full lg:w-[50%] h-[35vw] lg:h-full relative shrink-0">
            <Image src={"/img/CardSliderImg1.png"} alt="QR Code" fill className="object-contain object-center" />
          </div>
          <div className="w-full lg:w-[45%] shrink-0">
            <h1 className='text-[#525252] text-[1.125rem] lg:text-[1.25rem] font-semibold leading-normal font-bricolage'>QR Code</h1>
            <h2 className='pt-[0.3125rem] text-[#2E9F49] text-[1.75rem] lg:text-[2.294rem] font-medium lg:font-semibold leading-normal lg:leading-[2.75rem] font-bricolage'>Get a QR Code to Connect your customers instantly</h2>
            <p className='pt-[0.625rem] text-[#525252] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans'>Automate conversations, track customer behavior & close more deals—without missing a single message.</p>
            <button className='mt-[1.25rem] lg:mt-[1.875rem] bg-[#2E9F49] rounded-[0.5625rem] lg:rounded-[0.6875rem] h-[2.8125rem] w-[7.75rem] lg:h-[3.375rem] lg:w-[9.3125rem] text-[#FFF] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans'>Know More</button>
          </div>
        </div>

      </div>

    </div>
    </section>
  )
}

export default CardSlider