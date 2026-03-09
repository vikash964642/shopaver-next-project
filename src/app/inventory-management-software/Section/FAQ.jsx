// import React from 'react'
"use client";
import { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const faq = [
    {
      ques: "What is inventory management? ",
      ans: "Inventory management improves stock control with barcode scanning and real-time cloud syncing, reducing errors and manual work. It enhances efficiency and accuracy while helping businesses cut costs through better inventory visibility and smarter purchasing decisions. ",
    },
    {
      ques: "Why is stock management important for your business?  ",
      ans: "Stock management is crucial for tracking inventory, managing expiry dates, reducing labor costs, and efficiently controlling product expenses. ",
    },
   
    
    {
      ques: "What kind of customer support is available for Shopaver users?",
      ans: "Shopaver provides dedicated customer support through phone, email, and live chat. Our team is available to assist with any queries, issues, or software customization needs.",
    },
   
    {
      ques: "What is the role of warehouse management software?  ",
      ans: "The role of warehouse management software is to help organize and control inventory in your warehouse. It makes storing, moving, and shipping items easier and faster, reduces errors, and helps your business run smoothly",
    },
    {
      ques: "How can I get started with Shopaver Inventory Management Software?  ",
      ans: "Getting started with Shopaver Inventory Management Software is simple! Just visit our website, request a demo, or contact our sales team. We’ll walk you through the features, customization options, and pricing plans suited to your business needs.",
    },
    {
      ques: "Is Shopaver Inventory Software capable of handling multiple locations?  ",
      ans: "Yes, Shopaver supports multi-location inventory management, enabling you to track and manage stock levels across various warehouses, stores, or fulfillment centers. ",
    },
    {
      ques: "Can Shopaver Inventory Management Software help prevent both overstocking and stockouts?   ",
      ans: "Inventory management software leverages advanced algorithms and historical data to optimize stock levels, preventing overstocking, minimizing stockouts, reducing storage costs, and ensuring products are available when needed.",
    },
    {
      ques: "How can I customize Shopaver Inventory Management Software to fit my business needs? ",
      ans: "Shopaver offers various customization options, including personalized reports, product categorization, and user role management. Our team can also assist with advanced customization based on your specific business requirements.",
    },
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
                       
                        {faq.ques}{" "}
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
                  className="text-primary hover:text-neutral-900 font-medium text-center cursor-pointer"
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
                       
                        {faq.ques}{" "}
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
                  className="text-primary hover:text-neutral-900 font-bold text-center cursor-pointer"
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
