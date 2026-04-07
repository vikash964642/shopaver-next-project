

"use client";
import { useState, useRef } from "react";

const cards = [
  { id: 1, img: "/img/merchant5.webp", title:"Ravi – Hindustan Medical Store, Ashtha", description:"Pehele billing aur stock manage karna mushkil tha. Phir maine Shopaver use kiya, ab billing pahle se fast ho gayi hai or stock easily track kar leta hun. Customers ko smooth service milti hai aur unka experience bhi better ho gaya hai. Shopaver ke saath, business simple aur easy ho gaya!" },
  { id: 2, img: "/img/merchant1.webp", title:"Ashraf Ali – Ashraf Ali General Store, Pilibhit", description:"Pehle main sirf offline sale karta tha. Ab Shopaver ke through apna khud ka online store manage karta hoon. Ab main offline aur online dono store easily handle kar pa raha hoon, meri sales aur customers dono kaafi badh gaye hain, aur meri dukaan ab 24/7 open rahti hai!" },
  { id: 3, img: "/img/merchant2.webp", title:"Yogesh Kumar – Kalka Shoe House, Faridabad", description:"Shopaver use karne ke baad mera kaam easy ho gaya hai. Pehle inventory aur customer records manage karna confusing tha, ab sab ek jagah manage ho jata hai. Main stock track asani se kar leta hoon, restock plan karta hoon, aur pura business phone se hi control kar leta  hoon." },
   { id: 4, img: "/img/merchant3.webp", title:"Rahul Yadav – New Big Bazar, Niwari M.P", description:"Main Rahul Yadav, ek grocery shop ka owner hoon. Pehle inventory, sales aur customer data manage karna kaafi stressful tha. Phir maine Shopaver use kiya. Ab inventory track karna ho ya customers ko handle karna, sab easy aur smooth ho gaya hai. Ab mera business grow kar raha hai aur customers har visit pe khush aur satisfied feel karte hain!" },
  { id: 5, img: "/img/merchant4.webp", title:"Raj Kumar – Raj Medical Store, Ashtha", description:"Humne apne store ke liye kaafi POS check kiye, lekin koi perfect nahi tha. Phir humne Shopaver use kiya. Ye mobile aur tablet pe bhi easily kaam karta hai aur kaafi helpful hai. Ab hum apne business ko easily manage kar pa rahe hain aur sab simple or easy ho gaya hai!" },
   { id: 6, img: "/img/merchant3.webp", title:"Rahul Yadav – New Big Bazar, Niwari M.P", description:"Main Rahul Yadav, ek grocery shop ka owner hoon. Pehle inventory, sales aur customer data manage karna kaafi stressful tha. Phir maine Shopaver use kiya. Ab inventory track karna ho ya customers ko handle karna, sab easy aur smooth ho gaya hai. Ab mera business grow kar raha hai aur customers har visit pe khush aur satisfied feel karte hain!" },
  
  
 
];

export default function CustomSlider(){

  const getShortText = (text, wordLimit = 20) => {
  const words = text.split(" ");
  return words.slice(0, wordLimit).join(" ");
};
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
            <div key={card.id} className={`sliderItem ${pos} group`}>
              <img src={card.img} alt="" />
              <div className="HomeCardSliderGradient"></div>
              <div className="sliderContent absolute bottom-[30px] z-10 px-[15px]">
                {/* <p className="sliderDescription">{card.description}</p> */}
<p className="sliderDescription">

  {/* Default (short text + read more) */}
  <span className="group-hover:hidden transition-opacity duration-300">
    {getShortText(card.description, 10)}...
    <span className="ml-1 underline">Read more</span>
  </span>

  {/* On card hover → full text */}
  <span className="hidden group-hover:inline transition-opacity duration-300">
    {card.description}
  </span>

</p>
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