// import React from 'react'
"use client";
import { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const faq = [
    {
      "ques": "What is WhatsApp Commerce?  ",
      "ans": "WhatsApp Commerce is a way for businesses to sell products and services directly through WhatsApp. It helps customers browse catalogues, place orders, and make payments all within the chat app—making shopping easy and convenient. "
    },
    {
      "ques": "How does WhatsApp Commerce benefit my business?",
      "ans": "It simplifies customer communication, boosts sales by allowing easy browsing and ordering, and provides a direct, personal shopping experience."
    },
    {
      "ques": "Can I customize my product catalogue on WhatsApp?",
      "ans": "Yes, you can easily update product details, images, prices, and availability to keep your customers informed with the latest information."
    },
    {
      "ques": "What payment methods are supported for WhatsApp Commerce?",
      "ans": "Multiple payment options are supported, including UPI, credit/debit cards, digital wallets, pay later options, and more, making checkout easy and convenient for customers."
    },
    {
      "ques": "Is WhatsApp Commerce secure for payments? ",
      "ans": "Yes, WhatsApp Commerce supports secure payment methods like UPI, credit/debit cards, and digital wallets, ensuring safe transactions."
    },
    {
      "ques": "Can I send promotional messages through WhatsApp Commerce?  ",
      "ans": "Yes, you can send timely notifications about offers, discounts, and new products to keep customers engaged. "
    },
    {
      "ques": "How can customers track their orders on WhatsApp?  ",
      "ans": "Customers receive real-time updates and order confirmations directly in WhatsApp chats, keeping them informed at every step. "
    },
    {
      "ques": "Can WhatsApp Commerce handle multiple orders simultaneously?",
      "ans": "Yes, the platform is designed to manage multiple customer orders efficiently and keep your sales running smoothly. "
    },
    {
      "ques": "Is WhatsApp Commerce suitable for small businesses? ",
      "ans": "Absolutely! It’s perfect for small businesses looking to reach customers easily, sell products directly, and build strong relationships. "
    }
  ];
  
  return (
    <section>
      <div className=" container max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center pb-11 md:pb-25">
          <h4 className="font-bold mt-5 tracking-tight text-2xl md:text-3xl">
            Frequently Asked Questions
          </h4>
          <p className="md:text-[20px] text-lg font-semibold pt-2">
            Have any questions? We are here to assist you.{" "}
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 w-auto md:px-10 mx-auto ">
          {showAllQuestions ? (
            <>
              {faq.map((faq, i) => (
                <div key={i} className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="md:text-[20px] text-lg font-semibold">
                       
                        {faq.ques}
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering={"geometricPrecision"}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-[18px]">
                      {faq.ans}
                    </p>
                  </details>
                </div>
              ))}

              <div className="py-5 text-center">
                <button
                  onClick={() => setShowAllQuestions(false)}
                  className="text-(--primary) hover:text-neutral-900 font-medium text-center cursor-pointer"
                >
                  View Less
                </button>
              </div>
            </>
          ) : (
            <>
              {faq.slice(0, 5).map((faq, i) => (
                <div key={i} className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="md:text-[20px] text-lg font-semibold">
                       
                        {faq.ques}
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering={"geometricPrecision"}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-[18px]">
                      {faq.ans}
                    </p>
                  </details>
                </div>
              ))}

              <div className="pt-[70px] text-center">
                <button
                  onClick={() => setShowAllQuestions(true)}
                  className="text-(--primary) hover:text-neutral-900 font-bold text-center cursor-pointer"
                >
                  View All Questions
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
