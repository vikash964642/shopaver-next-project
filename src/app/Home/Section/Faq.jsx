// import React from 'react'
"use client";
import  { useState } from "react";

function FaqSection() {
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  return (
   <section>
     <div className=" container max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
       <div className="flex flex-col items-center ">
         <h4 className="font-bold mt-5 lg:mt-[80px] tracking-tight text-[28px] md:text-4xl"> Frequently Asked Questions</h4>
         <p className="md:text-[20px] text-lg font-semibold pt-2">Have any questions? We are here to assist you. </p>
         
       </div>
       <div className="grid divide-y divide-neutral-200 w-auto md:px-10  mt-[26px] lg:mt-[30px] ml-[15px] lg:ml-[0px] ">
         {showAllQuestions ? (
           <>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">What is POS Software and how can it help manage your business? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                       POS (Point of Sale) software is an advanced billing and inventory management system designed to simplify and automate business transactions. This user-friendly solution helps enhance your business by managing billing, inventory, digital ledger (Khata), ONDC, online stores, WhatsApp commerce, and more—all from a single platform.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold"> Is POS software suitable for all types of businesses? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                      Yes! POS (Point of Sale) software is a smart and user-friendly solution designed to support businesses of all sizes—small, medium, and large. 
                       </p>
                       <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">It is perfect for various industries, including retail stores, restaurants & cafés, salons & spas, grocery shops, mobile & electronics stores, warehouses, kiosks, and more.</p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">What is (Bahi khata Software) Digital Bahi Khata (Digital Ledger)? </span>
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
                    A digital khata (ledger) is an advanced tool designed to track each customer&apos;s debit and credit history. It allows you to manage and track customer information and view account status, all accessible across multiple devices.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">What is Quick Billing Software? </span>
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
                  Quick Billing Software allows you to generate invoices quickly, accelerating the checkout process. It also supports multiple payment methods, without requiring inventory tracking.                 </p>
               </details>
             </div>         
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">Does Shopaver POS billing provide multiple payment modes? </span>
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
                        Absolutely! Shopaver POS supports multiple payment methods, including cash, UPI, credit/debit cards, digital wallets, BNPL (Buy Now Pay Later), coupons, and reward points. It also allows businesses to accept online` payments through QR codes on invoices, ensuring a fast and convenient transaction process.                 </p>
               </details>
             </div>
             
             {/* here */}
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">Why is POS (Point-of-Sale) software considering a super app for businesses of all sizes? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                    POS (Point-of-Sale) software is considered a super app for businesses of all sizes because it consolidates essential functions like billing, inventory management, digital ledger (Khata), ONDC, online store, and WhatsApp commerce into a single user-friendly platform, offering a comprehensive, all-in-one solution for business management.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold"> Do we provide POS software training? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                  Yes! We provide training resources, step-by-step tutorials, and comprehensive documentation to help you get started easily.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">Do I need accounting knowledge to use Digital Khata? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                    No, Digital Khata is designed to be user-friendly and doesn’t require advanced accounting skills. It’s intuitive, and most software offers tutorials or customer support for getting started.
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
                   <span className="md:text-[20px] text-lg font-semibold">What is POS Software and how can it help manage your business? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                       POS (Point of Sale) software is an advanced billing and inventory management system designed to simplify and automate business transactions. This user-friendly solution helps enhance your business by managing billing, inventory, digital ledger (Khata), ONDC, online stores, WhatsApp commerce, and more—all from a single platform.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold"> Is POS software suitable for all types of businesses? </span>
                   <span className="transition group-open:rotate-180 mt-[-16px]">
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
                      Yes! POS (Point of Sale) software is a smart and user-friendly solution designed to support businesses of all sizes—small, medium, and large. 
                       </p>
                       <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">It is perfect for various industries, including retail stores, restaurants & cafés, salons & spas, grocery shops, mobile & electronics stores, warehouses, kiosks, and more.</p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">What is (Bahi khata Software) Digital Bahi Khata (Digital Ledger)? </span>
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
                    A digital khata (ledger) is an advanced tool designed to track each customer&apos;s debit and credit history. It allows you to manage and track customer information and view account status, all accessible across multiple devices.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">What is Quick Billing Software? </span>
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
                  Quick Billing Software allows you to generate invoices quickly, accelerating the checkout process. It also supports multiple payment methods, without requiring inventory tracking.                 </p>
               </details>
             </div>
             <div className="py-5">
               <details className="group">
                 <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                   <span className="md:text-[20px] text-lg font-semibold">Does Shopaver POS billing provide multiple payment modes? </span>
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
                        Absolutely! Shopaver POS supports multiple payment methods, including cash, UPI, credit/debit cards, digital wallets, BNPL (Buy Now Pay Later), coupons, and reward points. It also allows businesses to accept online` payments through QR codes on invoices, ensuring a fast and convenient transaction process.                 </p>
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
