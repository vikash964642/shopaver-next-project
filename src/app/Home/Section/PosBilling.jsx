// "use client";
// import Image from "next/image";
// import PropTypes from "prop-types";
// // import { Link } from "react-router-dom";
// import Link from "next/link";

// function PosBilling(props) {
//   const ScrollTop = () => {
//     window.scrollTo({ top: 0 });
//   };
//   return (
//     <section className="pt-11 lg:pt-[70px]">
//       <div className="div-3 max-w-5xl mx-auto flex flex-col-reverse lg:flex-row ">
//         <div className="para3 px-11 lg:pr-0 lg:mt-[62px]">

//           <h3 className="md:text-(--primary) lg:text-[32px] text-[22px] font-bold">
//             Pos Billing Software
//           </h3>
//           <h3 className="font-medium text-[20px] md:text-[22px] leading-[25px] md:leading-[25.4px] pt-[2px] max-[400px]:text-[15px] flex flex-wrap: wrap">
//            {props.title}
//           </h3>
//           <p className="md:text-[16px] text-[14px] md:leading-[21.88px] leading-[18.62px] md:mt-[15px] mt-[16px] font-medium lg:w-[400px]">
//             Shopaver POS is the perfect solution for businesses seeking a
//             reliable, efficient point-of-sale system. Our user-friendly POS
//             software simplify billing, invoicing,&nbsp;
//             <Link
//               href="/inventory-management-software"
//               onClick={ScrollTop}
//               className="text-blue-600 no-underline cursor-pointer"
//             >
//               inventory management
//             </Link>
//             , and sales tracking, ensuring quick and secure payments, making it
//             easier to manage operations and improve business efficiency.
//           </p>

//           <Link
//             href="/pos-billing-software"
//             onClick={ScrollTop}
//             className="text-(--primary) cursor-pointer font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[25px]"
//           >
//             View More &gt;&gt;
//           </Link>
//         </div>
//         <div className="md:p-0 p-9">
//           <Link href="/pos-billing-software" onClick={ScrollTop}>
//             <Image src={"/img/pos_image.webp"} height={418} width={580} alt="Pos Billing Software"></Image>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
// PosBilling.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// export default PosBilling;

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./home.module.css";
const cards = [
  {
    id: 1,
    image: "/landingPage/PosHomeImg1.webp",
    title: "Lightning-Fast & Error-Free Billing",
    description:
      "Serve more customers in less time with an intuitive POS software. Scan items quickly, apply discounts, auto-calculate GST or custom taxes, print invoices, and accept payments via cash, card, and UPI.",
  },
  {
    id: 2,
    image: "/landingPage/PosHomeImg2.webp",
    title: "Multi-Outlet Retail Management",
    description: "Keep all outlets in sync with a centralized POS. Use uniform pricing, track stock and sales in real time, and manage all locations from a single web portal.",
  },
  {
    id: 3,
    image: "/landingPage/PosHomeImg3.webp",
    title: "Know Your Stock Levels",
    description: "Track inventory in real time with automated stock management. Get low-stock alerts, manage product variants, and handle barcode tracking for expiry-based products.",
  },
];
function PosBilling() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="pt-15 lg:pt-[78px] px-[29px] xl:px-0 max-w-5xl mx-auto">
      <h2 className="text-[#5801B7] text-center lg:text-[30px] text-[22px] font-semibold">
        Why Choose Shopaver Retail POS Software?
      </h2>
      <div className="mt-[38px] bg-[#F9F4FF] hidden lg:grid grid-cols-3 gap-10 shadow-[0_0_4px_0_rgba(0,0,0,0.20)] w-full  p-[45px]">
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFF] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
          >
            <Image src={item.image} alt={item.title} width={264} height={264}></Image>
            <p className="pt-3 max-w-[210px] text-[#0A0A0A] text-[18px] font-medium font-[Poppins] leading-[normal]">{item.title}</p>
            <p className="pt-[5px] text-[#525252] text-[12px] font-normal font-[Poppins]">{item.description}</p>
          </div>
        ))}
      </div>
       {/* <div className="block lg:hidden mt-[38px]">
      <div className="flex overflow-x-auto gap-[22px] pb-2 cursor-grab hide-scrollbar mt-[68px]"  style={{ scrollSnapType: "x mandatory" }}>
         {cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFF] shrink-0 w-[200px] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
          >
            <Image src={item.image} alt={item.title} width={264} height={264}></Image>
            <p className="pt-3 max-w-[210px] text-[#0A0A0A] text-[18px] font-medium font-[Poppins] leading-[normal]">{item.title}</p>
            <p className="pt-[5px] text-[#525252] text-[12px] font-normal font-[Poppins]">{item.description}</p>
          </div>
        ))}
      </div>
  </div> */}
  <div className="block lg:hidden mt-[38px]">
  <div
    className={`flex md:justify-center overflow-x-auto gap-[11px] pt-1 pl-0.5 pr-0.5 pb-2 cursor-grab ${styles.hideScrollbar}`}
    style={{ scrollSnapType: "x mandatory" }}
  >
    {cards.map((item) => (
      <div
        key={item.id}
        className="bg-[#FFF] shrink-0 w-[180px] sm:w-[200px] md:w-[220px] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={264}
          height={264}
        />
        <p className="pt-[11.5] max-w-[150px] text-[#0A0A0A] text-[15px] sm:text-[16.5px] font-medium font-[Poppins]">
          {item.title}
        </p>
        <p className="pt-1 text-[#525252] text-[11px] sm:text-[12px] font-normal font-[Poppins]">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default PosBilling;
