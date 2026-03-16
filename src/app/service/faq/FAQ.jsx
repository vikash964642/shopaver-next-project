"use client";
import { useState } from "react";
// const faqData = [
//   {
//     title: "What is Shopaver Retail POS Billing Software?",
//     description:
//       "Accelerate your retail business with flexible pricing that fits your budget. Choose from affordable monthly or yearly plans, perfectly designed for small shops, growing franchises, and large retail chains.",
//   },
//   {
//     title: "How Does Shopaver Retail POS System Benefit My Retail Business?",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//   },
// ];
function FAQ({faqData=[]}) {
  console.log("faq data",faqData);
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-[#5801B7] py-[55px] lg:py-[90px]">
      <div className="max-w-5xl mx-auto">
<div className="flex items-center lg:items-start lg:justify-between lg:flex-row flex-col px-[20px]">
<div className="w-[225px] lg:w-[280px]">
    <h2 className="text-[#FFF] text-[26px] lg:text-[36px] font-semibold leading-normal text-center lg:text-left">Frequently 
Asked Questions</h2>
<p className="pt-[22px] text-[#FFF] text-[14px] lg:text-[20px] leading-normal text-center lg:text-left">Have any questions? We are here to assist you.</p>
</div>
<div className="mt-[36px] lg:mt-0">
    {faqData && faqData.map((data,index)=>(
<div key={index}
 onClick={() => toggleFAQ(index)}
          className="rounded-[7.27px] lg:rounded-[15px] border border-white/50 
bg-gradient-to-r from-[#FFF]/30 to-[#5801B7]/60 
shadow-[0_0_4px_rgba(0,0,0,0.25)] 
backdrop-blur-[15px] w-full lg:max-w-[675px] py-[7.5px] px-[9.5px]  lg:lg:py-[15px] lg:px-[19px] mt-[10px] lg:mt-[20px] flex justify-center flex-col cursor-pointer"
        >
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-normal w-[75%]">
              {data.title}
            </h2>
            <p className="text-[#FFF] text-[14px] lg:text-[18px] font-medium ">
                {openIndex === index ? "-" : "+"}
            </p>
          </div>
          {/* <p className="pt-[10.5px] text-[#FFF] text-[15px] font-normal leading-normal w-[90%]">
           {data.description}
          </p> */}
          <div
              className={`overflow-hidden transition-all duration-400 ${
                openIndex === index
                  ? "max-h-[500px] opacity-100 mt-[10px]"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white text-[12px] lg:text-[15px] leading-normal w-[90%]">
                {data.description}
              </p>
            </div>
        </div>
))}
</div>
</div>
        
      </div>
    </section>
  );
}

export default FAQ;
