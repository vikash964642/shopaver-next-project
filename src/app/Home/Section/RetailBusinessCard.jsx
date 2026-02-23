"use client";
import Image from "next/image";
const cards = [
  {
    id: 1,
    image: "/landingPage/RetailBusinessCardImg1.webp",
    title: "Restaurant Stores",
    description:"Shopaver helps restaurants streamline orders, manage tables, track inventory, and handle billing effortlessly. From dine-in to takeaway...",
  },
  {
    id: 2,
    image: "/landingPage/RetailBusinessCardImg2.webp",
    title: "Footwear",
    description: "Shopaver empowers footwear stores to manage inventory by size, style, and brand with real-time stock tracking. Simplify billing, monitor...",
  },
  {
    id: 3,
    image: "/landingPage/RetailBusinessCardImg3.webp",
    title: "Cosmetic Store",
    description: "Shopaver helps cosmetic stores manage product variants, expiry dates, and fast-moving SKUs with precision. Streamline billing, track inventory in real time...",
  },
  {
    id: 4,
    image: "/landingPage/RetailBusinessCardImg4.webp",
    title: "Accessories Store",
    description: "Shopaver enables accessories stores to efficiently manage diverse SKUs, track fast-moving items, and simplify billing. Monitor stock in real...",
  },
  {
    id: 5,
    image: "/landingPage/RetailBusinessCardImg5.webp",
    title: "Cart and Kiosk",
    description: "Shopaver helps carts and kiosks manage quick billing, track daily sales, and monitor inventory with ease. Accept digital payments, maintain customer..",
  },
  {
    id: 6,
    image: "/landingPage/RetailBusinessCardImg6.webp",
    title: "Spas & Salon",
    description: "Shopaver helps spas and salons manage appointments, track service-wise revenue, and maintain client records effortlessly. Simplify billing,...",
  },
];
function RetailBusinessCard() {
  return (
   <section className="bg-[#F9F4FF] mt-[100px] pt-[68px] pb-[81px]">
    <div className="max-w-5xl mx-auto">
    <h2 className="text-[#5801B7] text-center lg:text-[30px] font-semibold font-[Poppins] leading-[normal]">One platform to Run Every type of Retail Business</h2>
    <div className="grid grid-cols-2 gap-[17.5px] pt-[37px]">
{cards.map((item)=>{
    return(
    <div key={item.id} className="flex items-center bg-[#FFF] rounded-[25.47px] border-[0.879px] border-[#EBD9FF] pl-[21px] pr-[12.7px] pt-[12.82px] pb-[13.2px]">
<div className="flex flex-col justify-end h-full">
    <p className="text-[#5801B7] text-[20px] font-medium font-[Poppins]">{item.title}</p>
    <p className="pt-[5px] text-[#525252] text-[12px] font-normal font-[Poppins]">{item.description}</p>
    <div className="mt-[27.85px] rounded-[30px] bg-[#E6D2FF] border-[0.879px] border-[#F0E2FF] w-[90px] h-[27.5px] flex justify-center items-center gap-[4.39px]">
        <p className="text-[#5801B7] text-[10px] font-normal font-[Poppins]">Read More</p>
        <div className="w-[17.58px] h-[17.58px] rounded-full bg-[#FFF] flex justify-center items-center">
   <Image src="/landingPage/Arrow.svg" alt="Arrow" width={10} height={5}></Image>
        </div>
    </div>
</div>
<Image src={item.image} alt="Image" width={218} height={227}></Image>
    </div>
    );
})}
    </div>
    </div>
   </section>
  )
}

export default RetailBusinessCard