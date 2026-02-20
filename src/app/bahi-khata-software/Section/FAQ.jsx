// import React from 'react'

"use client";
import { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  return (
    <section>
      <div className=" container max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center pb-11 md:pb-25">
          <h4 className="font-bold mt-5 tracking-tight text-2xl md:text-3xl">
            Frequently Asked Questions{" "}
          </h4>
          <p className="md:text-[20px] text-lg font-semibold pt-2">
            Have any questions? We are here to assist you.{" "}
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 w-auto md:px-10 mx-auto ">
          {showAllQuestions ? (
            <>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      What is Digital Khata (Digital Ledger)?
                    </span>
                    <span className="transition group-open:rotate-180 ">
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
                  <p className=" mt-3 group-open:animate-fadeIn  font-normal  text-[18px]">
                    A digital khata (digital ledger) is an advanced and
                    adaptable system that helps you keep track of every
                    customer’s debit and credit history. It allows you to
                    monitor your account status across multiple devices, edit
                    customer information, and manage & view customer details
                    easily.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Is Customer Support Available for Users?
                    </span>
                    <span className="transition group-open:rotate-180 ">
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
                  <p className=" mt-3 group-open:animate-fadeIn  font-normal  text-[18px]">
                    Yes, customer support is available. You can download and
                    send monthly transaction reports from anywhere. Sharing
                    daily, weekly, or monthly reports with your customers
                    provides valuable insights and enhances transparency.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      {" "}
                      Why is Udhar Bahi Khata Important?{" "}
                    </span>
                    <span className="transition group-open:rotate-180 ">
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
                  <p className=" mt-3 group-open:animate-fadeIn  font-normal  text-[18px]">
                    Using a digital khata eliminates manual calculations, offers
                    unlimited database storage, and secures your data on the
                    cloud. It improves transparency, enables monitoring of
                    account status on your phone, simplifies creating customer
                    accounts, and helps build stronger customer relationships.{" "}
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Is Digital Ledger Suitable for All Business Sizes?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, it is suitable for small, medium, and large businesses.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Can You Edit Customer Details?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, the system allows you to add, update, and manage
                    customer details, keeping your records accurate and
                    organized.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Does the System Provide SMS Facility on WhatsApp?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, the system can send payment reminders and notifications
                    to customers via WhatsApp, making communication faster and
                    more convenient.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Can Customers use the Khata on Multiple Devices?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, you can access your digital khata across multiple
                    devices including mobile phones, laptops, tablets, and
                    desktops, ensuring your business data is always within
                    reach.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Does the bahi khata Send Reminders to Customers?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, you can easily send payment reminders to your customers
                    for clearing dues. Automated reminders help prompt timely
                    payments and ensure smooth communication without any hassle.
                  </p>
                </details>
              </div>

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
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      What is Digital Khata (Digital Ledger)?
                    </span>
                    <span className="transition group-open:rotate-180 ">
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
                  <p className=" mt-3 group-open:animate-fadeIn  font-normal  text-[18px]">
                    A digital khata (digital ledger) is an advanced and
                    adaptable system that helps you keep track of every
                    customer’s debit and credit history. It allows you to
                    monitor your account status across multiple devices, edit
                    customer information, and manage & view customer details
                    easily.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Is Customer Support Available for Users?
                    </span>
                    <span className="transition group-open:rotate-180 ">
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
                  <p className=" mt-3 group-open:animate-fadeIn  font-normal  text-[18px]">
                    Yes, customer support is available. You can download and
                    send monthly transaction reports from anywhere. Sharing
                    daily, weekly, or monthly reports with your customers
                    provides valuable insights and enhances transparency.
                  </p>
                </details>
              </div>
               <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      {" "}
                      Why is Udhar Bahi Khata Important?{" "}
                    </span>
                    <span className="transition group-open:rotate-180 ">
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
                  <p className=" mt-3 group-open:animate-fadeIn  font-normal  text-[18px]">
                    Using a digital khata eliminates manual calculations, offers
                    unlimited database storage, and secures your data on the
                    cloud. It improves transparency, enables monitoring of
                    account status on your phone, simplifies creating customer
                    accounts, and helps build stronger customer relationships.{" "}
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Is Digital Ledger Suitable for All Business Sizes?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, it is suitable for small, medium, and large businesses.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Can You Edit Customer Details?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    Yes, the system allows you to add, update, and manage
                    customer details, keeping your records accurate and
                    organized.
                  </p>
                </details>
              </div>
              <div className="py-5 text-center">
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
