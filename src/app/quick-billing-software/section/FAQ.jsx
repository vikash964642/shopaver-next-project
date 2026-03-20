// import React from 'react'
"use client";
import { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const faq = [
    {
      ques: "What is Quick Billing? ",
      ans: "Quick Billing enables rapid bill creation, speeds up the checkout process, and supports multiple payment methods. It works without the need of inventory management.",
    },
    {
      ques: "How to Generate a Quick Bill? ",
      ans: "To generate a quick bill, simply log in to your account, access the quick billing section, enter customer and payment details, and complete the checkout to generate the bill.",
    },
    {
      ques: "How to Remove Items from a Quick Bill? ",
      ans: "Open the Shopaver app on your device and go to the quick billing tab. Enter the product or service name along with the unit and price. Add any applicable taxes and discounts. Then, enter the quantity and add the item to your cart. Proceed to checkout, enter the customer details, and generate the bill.",
    },
    {
      ques: "How to Use the Quick Billing System?",
      ans: "Open the Shopaver app on your device and go to the quick billing tab. Enter the product or service name along with the unit and price. Add any applicable taxes and discounts. Then, enter the quantity and add the item to your cart. Proceed to checkout, enter the customer details, and generate the bill.",
    },
    {
      ques: "What are the Benefits of Quick Billing?",
      ans: "Quick Billing software offers several advantages. It allows you to generate instant invoices, reduces billing time, supports multiple device compatibility, enables easy sharing of bills or invoices with customers, and simplifies payment collection through various modes.",
    },
    {
      ques: "Why is Quick Billing Perfect for my Business?",
      ans: "Quick Billing is ideal for businesses that need to generate invoices instantly and bill customers in seconds—without the need for inventory management. It’s perfectly suited for businesses without a product catalog or those selling individual or custom items.",
    },
    
    {
      ques: "How does Quick Billing ensure data security?",
      ans: "Quick Billing uses advanced encryption protocols and strict compliance standards to protect sensitive customer and transaction data, ensuring both confidentiality and data integrity.",
    },
    {
      ques: "Can I Generate Bills Instantly Without Managing Inventory Using Shopaver POS Software?",
      ans: "Yes, you can generate bills instantly without managing inventory using the POS software. Simply enter the product or service details, apply any necessary discounts or taxes, and generate invoices smoothly for a fast and efficient billing experience. ",
    },
    
    {
      ques: "Can Quick Billing Software Handle Taxes and Discounts? ",
      ans: "Yes, Quick Billing software can manage taxes with customizable rates and apply discounts efficiently, ensuring accurate invoicing and compliance.",
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
