"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function WhatsappBlueTickSlider() {
     const col1 = useRef(null);
  const col2 = useRef(null);
  const mobileSlider1 = useRef(null);
const mobileSlider2 = useRef(null);

  const images1 = [
    "newImage/businessHeroSection.webp",
    "newImage/businessWhatsappHeroSection.webp",
    "newImage/inventory_management_grid.webp",
    "newImage/online_inventory_grid.webp",
  ];

  const images2 = [
    "newImage/businessWhatsappHeroSection.webp",
    "newImage/online_inventory_grid.webp",
    "newImage/inventory_management_grid.webp",
     "newImage/businessHeroSection.webp",
    
  ];



useGSAP(() => {
  const col1Height =
    col1.current.scrollHeight / 2;

  const col2Height =
    col2.current.scrollHeight / 2;
// MOBILE HORIZONTAL
// MOBILE ROW 1
// const mobileWidth1 =
//   mobileSlider1.current.scrollWidth / 2;

// gsap.fromTo(
//   mobileSlider1.current,
//   {
//     x: 0,
//   },
//   {
//     x: -mobileWidth1,
//     duration: 18,
//     ease: "none",
//     repeat: -1,
//   }
// );

// // MOBILE ROW 2
// const mobileWidth2 =
//   mobileSlider2.current.scrollWidth / 2;

// gsap.fromTo(
//   mobileSlider2.current,
//   {
//     x: -mobileWidth2,
//   },
//   {
//     x: 0,
//     duration: 18,
//     ease: "none",
//     repeat: -1,
//   }
// );
// MOBILE ROW 1
const mobileWidth1 =
  mobileSlider1.current.scrollWidth / 2;

gsap.fromTo(
  mobileSlider1.current,
  {
    x: 0,
    force3D: true,
  },
  {
    x: -mobileWidth1,
    duration: 18,
    ease: "none",
    repeat: -1,
    force3D: true,
  }
);

// MOBILE ROW 2
const mobileWidth2 =
  mobileSlider2.current.scrollWidth / 2;

gsap.fromTo(
  mobileSlider2.current,
  {
    x: -mobileWidth2,
    force3D: true,
  },
  {
    x: 0,
    duration: 18,
    ease: "none",
    repeat: -1,
    force3D: true,
  }
);


//For Big Screen
  // COLUMN 1
  gsap.fromTo(
    col1.current,
    {
      y: 0,
    },
    {
      y: -col1Height,
      duration: 15,
      ease: "none",
      repeat: -1,
    }
  );

  // COLUMN 2
  gsap.fromTo(
    col2.current,
    {
      y: -col2Height,
    },
    {
      y: 0,
      duration: 15,
      ease: "none",
      repeat: -1,
    }
  );
});
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
        <div className="w-full md:w-[47%] hidden md:flex gap-5 md:h-[450px] lg:h-[590px] xl2:h-[750px] overflow-hidden">

          {/* COLUMN 1 */}
          <div className="w-1/2 overflow-hidden">
            <div ref={col1} className="flex flex-col gap-5">
              
              {[...images1, ...images1].map((img, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-2"
                >
                  <img
                    src={img}
                    className="w-full h-[250px] object-cover rounded-2xl"
                  />
                </div>
              ))}

            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="w-1/2 overflow-hidden">
            <div ref={col2} className="flex flex-col gap-5">
              
              {[...images2, ...images2].map((img, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-2"
                >
                  <img
                    src={img}
                    className="w-full h-[250px] object-cover rounded-2xl"
                  />
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
      className="flex gap-4 will-change-transform"
    >
      {[...images1, ...images1].map((img, i) => (
        <div
          key={i}
          className="min-w-[240px] bg-white rounded-[22px] p-2 shrink-0"
        >
          <img
            src={img}
            className="w-full h-[220px] object-cover rounded-[18px]"
          />
        </div>
      ))}
    </div>
  </div>

  {/* ROW 2 */}
  <div className="overflow-hidden mt-[28px]">
    <div
      ref={mobileSlider2}
      className="flex gap-4 will-change-transform"
    >
      {[...images2, ...images2].map((img, i) => (
        <div
          key={i}
          className="min-w-[240px] bg-white rounded-[22px] p-2 shrink-0"
        >
          <img
            src={img}
            className="w-full h-[220px] object-cover rounded-[18px]"
          />
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