"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function WhatsappBlueTickSlider() {
     const col1 = useRef(null);
  const col2 = useRef(null);
  const mobileSlider1 = useRef(null);
const mobileSlider2 = useRef(null);
const col1Tween = useRef(null);
const col2Tween = useRef(null);

const mobileTween1 = useRef(null);
const mobileTween2 = useRef(null);

const sliderData1=[
  {
    title:"Educational Institute",
    Image:"newImage/WhatsappBlueTickSliderImg1.webp"
  },
    {
    title:"Restaurant",
    Image:"newImage/WhatsappBlueTickSliderImg2.webp"
  },
    {
    title:"E-Commerce",
    Image:"newImage/WhatsappBlueTickSliderImg3.webp"
  },
]
const sliderData2=[
  {
    title:"Financial Services",
    Image:"newImage/WhatsappBlueTickSliderImg4.webp"
  },
    {
    title:"Travel Agencies",
    Image:"newImage/WhatsappBlueTickSliderImg5.webp"
  },
    {
    title:"Educational Institutions",
    Image:"newImage/WhatsappBlueTickSliderImg6.webp"
  },
]



// useGSAP(() => {
//   const col1Height =
//     col1.current.scrollHeight / 2;

//   const col2Height =
//     col2.current.scrollHeight / 2;

// // MOBILE ROW 1
// const mobileWidth1 =
//   mobileSlider1.current.scrollWidth / 2;

// gsap.fromTo(
//   mobileSlider1.current,
//   {
//     x: 0,
//     force3D: true,
//   },
//   {
//     x: -mobileWidth1,
//     duration: 18,
//     ease: "none",
//     repeat: -1,
//     force3D: true,
//   }
// );

// // MOBILE ROW 2
// const mobileWidth2 =
//   mobileSlider2.current.scrollWidth / 2;

// gsap.fromTo(
//   mobileSlider2.current,
//   {
//     x: -mobileWidth2,
//     force3D: true,
//   },
//   {
//     x: 0,
//     duration: 18,
//     ease: "none",
//     repeat: -1,
//     force3D: true,
//   }
// );


// //For Big Screen
//   // COLUMN 1
//   gsap.fromTo(
//     col1.current,
//     {
//       y: 0,
//     },
//     {
//       y: -col1Height,
//       duration: 15,
//       ease: "none",
//       repeat: -1,
//     }
//   );

//   // COLUMN 2
//   gsap.fromTo(
//     col2.current,
//     {
//       y: -col2Height,
//     },
//     {
//       y: 0,
//       duration: 15,
//       ease: "none",
//       repeat: -1,
//     }
//   );
// });

useGSAP(() => {
  if (
    !col1.current ||
    !col2.current ||
    !mobileSlider1.current ||
    !mobileSlider2.current
  )
    return;

  const ctx = gsap.context(() => {
    // MOBILE ROW 1
    const mobileWidth1 =
      mobileSlider1.current.scrollWidth / 2;

    mobileTween1.current = gsap.to(
      mobileSlider1.current,
      {
        x: -mobileWidth1,
        duration: 20,
        ease: "none",
        repeat: -1,
        force3D: true,
      }
    );

    // MOBILE ROW 2
    const mobileWidth2 =
      mobileSlider2.current.scrollWidth / 2;

    mobileTween2.current = gsap.fromTo(
      mobileSlider2.current,
      {
        x: -mobileWidth2,
      },
      {
        x: 0,
        duration: 20,
        ease: "none",
        repeat: -1,
        force3D: true,
      }
    );

    // DESKTOP COLUMN 1
    const col1Height =
      col1.current.scrollHeight / 2;

    col1Tween.current = gsap.to(
      col1.current,
      {
        y: -col1Height,
        duration: 30,
        ease: "none",
        repeat: -1,
        force3D: true,
      }
    );

    // DESKTOP COLUMN 2
    const col2Height =
      col2.current.scrollHeight / 2;

    col2Tween.current = gsap.fromTo(
      col2.current,
      {
        y: -col2Height,
      },
      {
        y: 0,
        duration: 30,
        ease: "none",
        repeat: -1,
        force3D: true,
      }
    );
  });

  return () => {
    ctx.revert();
  };
}, []);

const pauseCol1 = () => {
  col1Tween.current?.pause();
};

const resumeCol1 = () => {
  col1Tween.current?.play();
};

const pauseCol2 = () => {
  col2Tween.current?.pause();
};

const resumeCol2 = () => {
  col2Tween.current?.play();
};

const pauseMobile1 = () => {
  mobileTween1.current?.pause();
};

const resumeMobile1 = () => {
  mobileTween1.current?.play();
};

const pauseMobile2 = () => {
  mobileTween2.current?.pause();
};

const resumeMobile2 = () => {
  mobileTween2.current?.play();
};
  return (
    <section className='bg-[#5801B7]'>
        <div className='max-w-[1440px] mx-auto pt-[66px] pb-[85px] md:py-0  md:px-[47px] xl2:px-[110px] xl3:px-[70px] mt-[90px] lg:mt-[130px] xl3:mt-[150px]'>
       
       <div className="md:flex items-center justify-between">
          <div className="px-[27px]  md:px-0 w-full md:w-[47%] text-white">
          <h2 className="text-center md:text-left text-[28.5px] md:text-[26.2px] lg:text-[34.3px] xl2:text-[44.3px] xl3:text-[55px] font-medium leading-[34px] lg:leading-[41px] xl2:leading-[53px] xl3:leading-[66px] font-bricolage">
            Who can Apply for WhatsApp Blue Tick?
          </h2>

          <p className="text-center md:text-left mt-[14px] lg:mt-[18px] xl2:mt-[22px] xl3:mt-[26px] text-[13.5px]
          lg:text-[16px]
          xl2:text-[20px]
          xl3:text-[24px]
          leading-[17px] lg:leading-[21px] xl2:leading-[24.4px] xl3:leading-[30.4px]
          ">
           Businesses with verified documents, active WhatsApp Business accounts, strong online presence, and Meta policy compliance can apply for the WhatsApp Blue Tick.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[47%] hidden md:flex md:gap-4 lg:gap-[20px] xl2:gap-[25px] xl3:gap-[30px] md:h-[450px] lg:h-[600px] xl3:h-[750px] overflow-hidden">

          {/* COLUMN 1 */}
          <div className=" overflow-hidden">
            <div ref={col1} className="flex flex-col md:gap-[13px] lg:gap-[16px] xl2:gap-[20px] xl3:gap-[24px]">
              
              {[...sliderData1, ...sliderData1].map((data, i) => (
                <div
                  key={i} onMouseEnter={pauseCol1}
  onMouseLeave={resumeCol1}
                  className="bg-white border-[1.1px] border-[#EFE0FF] md:rounded-[13px] lg:rounded-[17px] xl2:rounded-[22px] xl3:rounded-[27px] md:w-[131px] md:h-[182px] lg:w-[171px] lg:h-[238px] xl2:w-[221px] xl2:h-[307px] xl3:w-[276px] xl3:h-[382px] md:px-[4px] md:pt-[6px] md:pb-[10px] xl2:px-[6px] xl2:pt-[6px] xl2:pb-[15px] flex flex-col justify-between items-center"
                >
                  <img
                    src={data.Image}
                    className="w-full md:h-[150px] lg:h-[195.5px] xl2:h-[251px] xl3:h-[314px] object-cover md:rounded-[11.5px] lg:rounded-[15px] xl2:rounded-[20px] xl3:rounded-[25px]"
                  />
                  <p className="md:text-[11px] lg:text-[14px] xl2:text-[18px] xl3:text-[22.5px] text-[#3C3939] font-medium">{data.title}</p>
                </div>
              ))}

            </div>
          </div>

          {/* COLUMN 2 */}
          <div className=" overflow-hidden">
            <div ref={col2} className="flex flex-col md:gap-[13px] lg:gap-[16px] xl2:gap-[20px] xl3:gap-[24px]">
              
             {[...sliderData2, ...sliderData2].map((data, i) => (
                <div
                  key={i} onMouseEnter={pauseCol2}
  onMouseLeave={resumeCol2}
                  className="bg-white border-[1.1px] border-[#EFE0FF] md:rounded-[13px] lg:rounded-[17px] xl2:rounded-[22px] xl3:rounded-[27px] md:w-[131px] md:h-[182px] lg:w-[171px] lg:h-[238px] xl2:w-[221px] xl2:h-[307px] xl3:w-[276px] xl3:h-[382px] md:px-[4px] md:pt-[6px] md:pb-[10px] xl2:px-[6px] xl2:pt-[6px] xl2:pb-[15px] flex flex-col justify-between items-center"
                >
                  <img
                    src={data.Image}
                    className="w-full md:h-[150px] lg:h-[195.5px] xl2:h-[251px] xl3:h-[314px] object-cover md:rounded-[11.5px] lg:rounded-[15px] xl2:rounded-[20px] xl3:rounded-[25px]"
                  />
                  <p className="md:text-[11px] lg:text-[14px] xl2:text-[18px] xl3:text-[22.5px] text-[#3C3939] font-medium">{data.title}</p>
                </div>
              ))}

            </div>
          </div>

        </div>
        {/* MOBILE SLIDER */}
{/* MOBILE SLIDERS */}
<div className="md:hidden mt-[18px] overflow-hidden">

  {/* ROW 1 */}
  <div className="overflow-hidden">
    <div
      ref={mobileSlider1}
      className="flex gap-2 will-change-transform"
    >
      {[...sliderData1, ...sliderData1].map((item, i) => (
       <div
          key={i} 
          onTouchStart={pauseMobile1}
    onTouchEnd={resumeMobile1}
    onTouchCancel={resumeMobile1}
          className="w-[151px] h-[209px] border-[1.1px] border-[#EFE0FF] bg-white rounded-[15px] px-[3.5px] pt-[3.5px] pb-[8.5px] shrink-0 flex flex-col justify-between items-center"
        >
          <img
            src={item.Image}
            className="w-full h-[171px] object-cover rounded-[13.7px]"
          />
          <p className="text-[12.4px] text-[#3C3939] font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  </div>

  {/* ROW 2 */}
  <div className="overflow-hidden mt-[25px]">
    <div
      ref={mobileSlider2}
      className="flex gap-2 will-change-transform"
    >
      {[...sliderData2, ...sliderData2].map((item, i) => (
        <div
          key={i}
          onTouchStart={pauseMobile2}
    onTouchEnd={resumeMobile2}
    onTouchCancel={resumeMobile2}
          className="w-[151px] h-[209px] border-[1.1px] border-[#EFE0FF] bg-white rounded-[15px] px-[3.5px] pt-[3.5px] pb-[8.5px] shrink-0 flex flex-col justify-between items-center"
        >
          <img
            src={item.Image}
            className="w-full h-[171px] object-cover rounded-[13.7px]"
          />
          <p className="text-[12.4px] text-[#3C3939] font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  </div>

</div>
       </div>
        </div>
    </section>
  )
}

export default WhatsappBlueTickSlider