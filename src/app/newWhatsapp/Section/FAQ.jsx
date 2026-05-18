"use client";
import { useState } from "react";

function FAQ() {
 const faq = [
    {
      question: "What is WhatsApp Commerce?  ",
      answer: "WhatsApp Commerce is a way for businesses to sell products and services directly through WhatsApp. It helps customers browse catalogues, place orders, and make payments all within the chat app—making shopping easy and convenient. "
    },
    {
      question: "How does WhatsApp Commerce benefit my business?",
      answer: "It simplifies customer communication, boosts sales by allowing easy browsing and ordering, and provides a direct, personal shopping experience."
    },
    {
     question: "Can I customize my product catalogue on WhatsApp?",
      answer: "Yes, you can easily update product details, images, prices, and availability to keep your customers informed with the latest information."
    },
    {
      question: "What payment methods are supported for WhatsApp Commerce?",
      answer: "Multiple payment options are supported, including UPI, credit/debit cards, digital wallets, pay later options, and more, making checkout easy and convenient for customers."
    },
    {
      question: "Is WhatsApp Commerce secure for payments? ",
      answer: "Yes, WhatsApp Commerce supports secure payment methods like UPI, credit/debit cards, and digital wallets, ensuring safe transactions."
    },
    {
      question: "Can I send promotional messages through WhatsApp Commerce?  ",
     answer: "Yes, you can send timely notifications about offers, discounts, and new products to keep customers engaged. "
    },
    {
     question: "How can customers track their orders on WhatsApp?  ",
      answer: "Customers receive real-time updates and order confirmations directly in WhatsApp chats, keeping them informed at every step. "
    },
    {
      question: "Can WhatsApp Commerce handle multiple orders simultaneously?",
      answer: "Yes, the platform is designed to manage multiple customer orders efficiently and keep your sales running smoothly. "
    },
    {
      question: "Is WhatsApp Commerce suitable for small businesses? ",
     answer: "Absolutely! It’s perfect for small businesses looking to reach customers easily, sell products directly, and build strong relationships. "
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <section className="bg-[#5801B7] py-[55px] lg:py-[90px] mt-[90px]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center lg:items-start lg:justify-between lg:flex-row flex-col px-[20px]">
          <div className="w-[225px] lg:w-[280px]">
            <h2 className="text-[#FFF] text-[26px] lg:text-[36px] font-semibold leading-normal text-center lg:text-left font-bricolage">
              Frequently Asked Questions
            </h2>
            <p className="pt-[22px] text-[#FFF] text-[14px] lg:text-[20px] leading-normal text-center lg:text-left font-dm-sans">
              Have any questions? We are here to assist you.
            </p>
          </div>
          <div className="mt-[36px] lg:mt-0">
            {faq &&
              faq.map((data, index) => (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className="rounded-[7.27px] lg:rounded-[15px] border border-white/50 
bg-gradient-to-r from-[#FFF]/30 to-[#5801B7]/60 
shadow-[0_0_4px_rgba(0,0,0,0.25)] 
backdrop-blur-[15px] w-full lg:w-[675px] py-[7.5px] px-[9.5px]  lg:lg:py-[15px] lg:px-[19px] mt-[10px] lg:mt-[20px] flex justify-center flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-normal w-[75%]">
                      {data.question}
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
                    <p className="pt-[10.5px] text-[#FFF] text-[15px] font-normal leading-normal w-[90%]">{data.answer}</p>
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
