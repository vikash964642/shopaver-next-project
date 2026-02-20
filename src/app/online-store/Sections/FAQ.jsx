// import React from 'react'
"use client";
import { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const faq = [
    {
      "ques": "What is an Online Store? ",
      "ans": "An online store is a platform that allows you to easily create and manage your own e-commerce website. It’s designed to provide a user-friendly experience with a simple setup process, along with advanced features to help boost your online sales-whether you have a small shop or a larger business."
    },
    {
      "ques": "How do I set up my online store?  ",
      "ans": "Setting up your online store is easy. Simply sign up for an account, log in, and follow the setup instructions. Activate your store from the dashboard to get started quickly.",
    },
    {
      "ques": "What kind of products can I sell in my online store?  ",
      "ans": "You can sell a wide variety of products, including physical goods, digital products, and services. The platform supports different product types and provides tools to manage them efficiently. "
    },
    {
      "ques": "Can I Manage My Inventory and Track Sales Through Shopaver online store? ",
      "ans": "Yes, powerful inventory management tools allow you to add, edit, or delete products, monitor stock levels, and receive alerts for low inventory. Detailed sales reports help you track your business performance. "
    },
    {
      "ques": "What payment methods are supported by an online store?  ",
      "ans": "Most online stores support multiple payment options such as UPI, credit/debit cards, digital wallets, Buy Now Pay Later (BNPL), coupons, and reward points, ensuring a secure and convenient checkout process for customers."
    },
    {
      "ques": "Is the online store mobile-friendly?  ",
      "ans": "Yes, modern online stores are optimized for mobile devices, providing a seamless shopping experience on smartphones and tablets. "
    },
    {
      "ques": "Can I integrate my online store with social media platforms? ",
      "ans": "Yes, many platforms offer social media integration, allowing you to sell directly on Facebook, Instagram, and other networks. You can also manage social media campaigns through the store’s dashboard. "
    },
    {
      "ques": "Is customer support available for my online store?  ",
      "ans": "Yes, comprehensive customer support is typically available via phone, email, and online resources to assist you with any questions or technical issues while running your store. "
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
