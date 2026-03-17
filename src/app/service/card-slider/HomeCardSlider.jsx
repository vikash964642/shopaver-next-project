

"use client";
import { useState, useRef } from "react";

const cards = [
  { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp", title:"—Card1, Mr. Choice Owner", description:"This POS software transformed our billing system." },
  { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp", title:"—Card2, Mr. Choice Owner", description:"Managing inventory is now super easy." },
  { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp", title:"—Card3, Mr. Choice Owner", description:"Great software for retail shop owners." },
  { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp", title:"—Card4, Mr. Choice Owner", description:"Very reliable and easy to use." },
  { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp", title:"—Card5, Mr. Choice Owner", description:"Perfect solution for small businesses." },
  { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp", title:"—Card6, Mr. Choice Owner", description:"Stock management is smooth now." },
];

export default function CustomSlider(){

  const [index,setIndex] = useState(0)
  const [direction,setDirection] = useState("next")

  const next = ()=>{
    setDirection("next")
    setIndex((prev)=>(prev+1)%cards.length)
  }

  const prev = ()=>{
    setDirection("prev")
    setIndex((prev)=>(prev-1+cards.length)%cards.length)
  }

  const getPosition = (i)=>{
    const diff = (i - index + cards.length) % cards.length

    if(diff === 0) return "centerItem"
    if(diff === 1) return "activeRight"
    if(diff === 2) return "smallRight"
    if(diff === 3) return "outerRight"
    if(diff === cards.length - 1) return "activeLeft"
    if(diff === cards.length - 2) return "smallLeft"
    if(diff === cards.length - 3) return "outerLeft"

    return "hiddenCard"
  }

  const touchStartX = useRef(0)

  const handleTouchStart=(e)=>{
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd=(e)=>{
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if(Math.abs(diff)>50){
      if(diff>0) next()
      else prev()
    }
  }

  return(
    <div className="sliderWrapper">

      <div
        className="sliderTrack"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {cards.map((card,i)=>{

          const pos = getPosition(i)

          return(
            <div key={card.id} className={`sliderItem ${pos}`}>
              <img src={card.img} alt="" />
              <div className="HomeCardSliderGradient"></div>
              <div className="sliderContent absolute bottom-[30px] z-10 px-[15px]">
                <p className="sliderDescription">{card.description}</p>
                <p className="sliderHeader">{card.title}</p>
              </div>
            </div>
          )

        })}

      </div>

      {/* Arrows */}
          <div className="flex justify-center gap-[12.75px] mt-[10px] lg:mt-[40px]">

        <div
           onClick={prev}
           className="h-[28px] w-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[15px] lg:text-[18px] cursor-pointer flex justify-center items-center"
         >
           <i className="fa-solid fa-angle-left"></i>
         </div>
         <div
         onClick={next}
           className="w-[28px] h-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[15px] lg:text-[18px] cursor-pointer flex justify-center items-center"
        >
           <i className="fa-solid fa-angle-right"></i>
        </div>

      </div>

    </div>
  )
}