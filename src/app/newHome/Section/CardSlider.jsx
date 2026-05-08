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
//                 top: "100px",
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
      top: "100px",
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
    <div className="max-w-5xl mx-auto mt-[80px]">

      <div className="space-y-[80px] mx-[33.5px]">

        {/* Card 1 */}
        <div
          ref={(el) => (refs.current[0] = el)}
          style={getStyle(0)}
          className="sticky h-[500px] px-[33.5px] rounded-[30px] border shadow-xl bg-[#075E54] will-change-transform flex justify-between items-center flex-col lg:flex-row"
        >
          <div>
            <h1 className='text-[#FFF] text-[20px] font-semibold leading-normal'>AI Flow Builder</h1>
            <h2 className='w-[314px] pt-[5px] text-[#FFF] text-[36.7px] font-semibold leading-[44px]'>Design a no-code chats in minutes</h2>
            <p className='w-[331px] pt-[10px] text-[#FFF] text-[16px] font-normal leading-normal'>Create flows with drag and drop, or simply describe your flow and let AI build it for you.</p>
            <button className='mt-[30px] bg-[#FFF] rounded-[11px] h-[54px] w-[149px] text-[#525252] text-[16px] font-medium'>Know More</button>
            </div> 
            <div>
                <Image src={"/img/CardSliderImg1.png"} width={450} height={300}></Image>
                </div> 
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => (refs.current[1] = el)}
          style={getStyle(1)}
          className="px-[33.5px] sticky h-[500px] rounded-[30px] shadow-xl bg-[#128C7E] will-change-transform flex justify-between items-center flex-col lg:flex-row"
        >
             <div>
                <Image src={"/img/CardSliderImg1.png"} width={450} height={300}></Image>
                </div> 
            <div>
            <h1 className='text-[#FFF] text-[20px] font-semibold leading-normal'>AI WhatsApp Inbox</h1>
            <h2 className='w-[392px] pt-[5px] text-[#FFF] text-[36.7px] font-semibold leading-[44px]'>Turn Every Chat Into a Sales on WhatsApp</h2>
            <p className='w-[345px] pt-[10px] text-[#FFF] text-[16px] font-normal leading-normal'>Automate conversations, track customer behavior & close more deals—without missing a single message.</p>
            <button className='mt-[30px] bg-[#FFF] rounded-[11px] h-[54px] w-[149px] text-[#525252] text-[16px] font-medium'>Know More</button>
            </div> 
           
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => (refs.current[2] = el)}
          style={getStyle(2)}
          className="px-[33.5px] sticky h-[500px] rounded-[30px] shadow-xl bg-[#DCF8C6] will-change-transform flex justify-between items-center flex-col lg:flex-row"
        >
            <div>
            <h1 className='text-[#525252] text-[20px] font-semibold leading-normal'>WhatsApp Marketing</h1>
            <h2 className='w-[363px] pt-[5px] text-[#075E54] text-[36.7px] font-semibold leading-[44px]'>Increase Sales with Targeted Campaigns</h2>
            <p className='w-[358px] pt-[10px] text-[#525252] text-[16px] font-normal leading-normal'>Send bulk broadcasts, personalized campaigns, and promotional offers in one click.</p>
            <button className='mt-[30px] bg-[#075E54] rounded-[11px] h-[54px] w-[149px] text-[#FFF] text-[16px] font-medium'>Know More</button>
            </div> 
            <div>
                <Image src={"/img/CardSliderImg1.png"} width={450} height={300}></Image>
                </div> 
        </div>

        {/* Card 4 */}
        <div
          ref={(el) => (refs.current[3] = el)}
          style={getStyle(3)}
          className="px-[33.5px] sticky h-[500px] rounded-[30px] border shadow-xl bg-[#ECE5DD] will-change-transform flex justify-between items-center flex-col lg:flex-row"
        >
             <div>
                <Image src={"/img/CardSliderImg1.png"} width={450} height={300}></Image>
                </div> 
            <div>
            <h1 className='text-[#525252] text-[20px] font-semibold leading-normal'>WhatsApp Payments</h1>
            <h2 className='w-[364px] pt-[5px] text-[#007ABA] text-[36.7px] font-semibold leading-[44px]'>Sales and Payments All in One Place</h2>
            <p className='w-[300px] pt-[10px] text-[#525252] text-[16px] font-normal leading-normal'>Collect payments seamlessly inside WhatsApp via UPI, cards, and net banking.</p>
            <button className='mt-[30px] bg-[#007ABA] rounded-[11px] h-[54px] w-[149px] text-[#FFF] text-[16px] font-medium'>Know More</button>
            </div> 
        </div>

        {/* Card 5 */}
        <div
          ref={(el) => (refs.current[4] = el)}
          style={getStyle(4)}
          className="px-[33.5px] sticky h-[500px] rounded-[30px] border shadow-xl bg-[#FFF] will-change-transform flex justify-between items-center flex-col lg:flex-row"
        >
             <div>
                <Image src={"/img/CardSliderImg1.png"} width={450} height={300}></Image>
                </div> 
            <div>
            <h1 className='text-[#525252] text-[20px] font-semibold leading-normal'>QR Code</h1>
            <h2 className='w-[458px] pt-[5px] text-[#2E9F49] text-[36.7px] font-semibold leading-[44px]'>Get a QR Code to Connect your customers instantly</h2>
            <p className='w-[390px] pt-[10px] text-[#525252] text-[16px] font-normal leading-normal'>Automate conversations, track customer behavior & close more deals—without missing a single message.</p>
            <button className='mt-[30px] bg-[#2E9F49] rounded-[11px] h-[54px] w-[149px] text-[#FFF] text-[16px] font-medium'>Know More</button>
            </div> 
        </div>

      </div>

    </div>
  )
}

export default CardSlider