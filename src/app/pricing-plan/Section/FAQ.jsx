



"use client";
import { useState } from "react";

function FAQ() {
   const faq = [
    {
      ques: "Does POS software support multi-counter billing? ",
      ans: "Yes, POS software supports multi-counter billing in online mode, allowing you to manage multiple locations easily. ",
    },
    {
      ques: "Does POS software offer accounting solutions? ",
      ans: "Yes, POS software includes integrated accounting tools such as invoicing, tax calculations, financial reporting, and expense tracking.  ",
    },
   
    
    {
      ques: "Are e-commerce integrations available with POS software? ",
      ans: "Yes, POS software integrates smoothly with major e-commerce platforms, enabling easy synchronization of online and offline sales. ",
    },
   
    {
      ques: "Can I customize invoices in POS software?   ",
      ans: "Yes, POS software allows you to easily customize invoices, including logo, design, and necessary fields, to match your brand’s identity. ",
    },
    {
      ques: "Can I track inventory with POS software? ",
      ans: "Yes, POS software includes inventory management features to help you track stock levels, manage reorders, and reduce wastage.",
    },
    {
      ques: "Is there a free trial available?  ",
      ans: "Yes, we offer a 7-day free trial for the Starter plan and 14-day trials for higher plans of Shopaver POS software, with no credit card required. ",
    },
    {
      ques: "Does POS software offer customer support? ",
      ans: "Yes, POS software offers 24/7 customer support through email, live chat, and phone, ensuring you get assistance whenever you need it. ",
    },
    {
      ques: "Can POS software be used across multiple devices?  ",
      ans: "Yes, POS software is cloud-based, allowing you to access it from any device, including desktops, tablets, and smartphones. ",
    },
    {
      ques: "Can I manage multiple branches with POS software?  ",
      ans: "Yes, POS software supports multi-location management, letting you manage multiple branches or stores from a single dashboard.",
    },
    {
      ques: "Is my data secure with Shopaver POS software?   ",
      ans: "Yes, we use enterprise-grade encryption and cloud backups to ensure your data is safe, secure, and accessible at all times. ",
    },
    {
      ques: "Do you offer custom solutions for large businesses?  ",
      ans: "Yes, our Enterprise plan can be customized to fit your specific needs. Contact our sales team for tailored pricing and additional features.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <section className="bg-[#5801B7] py-[55px] lg:py-[80px] mt-[90px] lg:mt-[130px]">
      <div className="max-w-[90rem] mx-auto px-[27px] xl2:px-[170px]">
        <div className="flex items-center lg:items-start lg:justify-between lg:gap-[50px] xl2:gap-[80px] lg:flex-row flex-col ">
          <div className="w-[250px] lg:w-[360px]">
            <h2 className="text-[#FFF] text-[30px] lg:text-[36px] xl2:text-[44px] font-semibold leading-[35px] lg:leading-[45px] xl2:leading-[51px] text-center lg:text-left font-bricolage">
              Frequently Asked Questions
            </h2>
            <p className="pt-3 lg:pt-[22px] text-[#FFF] text-[14px] lg:text-[20px] leading-[18px] lg:leading-[26px] text-center lg:text-left font-dm-sans">
              Have any questions? We are here to assist you.
            </p>
          </div>
          <div className="mt-[22px] lg:mt-0 flex-1">
            {faq &&
              faq.map((data, index) => (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className="rounded-[7.27px] lg:rounded-[15px] border border-white/50 
bg-gradient-to-r from-[#FFF]/30 to-[#5801B7]/60 
shadow-[0_0_4px_rgba(0,0,0,0.25)] 
backdrop-blur-[15px]  py-[7.5px] px-[9.5px]  lg:lg:py-[15px] lg:px-[19px] mt-[10px] lg:mt-[20px] flex justify-center flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-[#FFF] text-[16px] lg:text-[18px] font-medium leading-[20px] lg:leading-[23px] w-[85%]">
                      {data.ques}
                    </h2>
                    <p className="text-[#FFF] text-[14px] lg:text-[18px] font-medium ">
                      {openIndex === index ? "-" : "+"}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openIndex === index
                        ? "max-h-[700px] opacity-100 mt-[10px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pt-[10.5px] text-[#FFF] text-[13px] lg:text-[15px] font-normal leading-normal w-[90%]">{data.ans}</p>
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
