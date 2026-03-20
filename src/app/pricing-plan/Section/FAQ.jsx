// import React from 'react'
"use client";
import { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
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

  return (
    <section className="mb-[50px]">
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
