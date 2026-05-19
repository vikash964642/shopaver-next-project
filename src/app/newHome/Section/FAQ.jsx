"use client";
import { useState } from "react";

function FAQ() {
    const faqData=[
        {
            question:"What is POS Software and how can it help manage your business?",
            answer:"POS (Point of Sale) software is an advanced billing and inventory management system designed to simplify and automate business transactions. This user-friendly solution helps enhance your business by managing billing, inventory, digital ledger (Khata), ONDC, online stores, WhatsApp commerce, and more—all from a single platform."
        },
           {
            question:"Is POS software suitable for all types of businesses?",
            answer:"Yes! POS (Point of Sale) software is a smart and user-friendly solution designed to support businesses of all sizes—small, medium, and large. It is perfect for various industries, including retail stores, restaurants & cafés, salons & spas, grocery shops, mobile & electronics stores, warehouses, kiosks, and more."
        },
           {
            question:"What is (Bahi khata Software) Digital Bahi Khata (Digital Ledger)?",
            answer:"A digital khata (ledger) is an advanced tool designed to track each customer&apos;s debit and credit history. It allows you to manage and track customer information and view account status, all accessible across multiple devices."
        },
           {
            question:"What is Quick Billing Software?",
            answer:"Quick Billing Software allows you to generate invoices quickly, accelerating the checkout process. It also supports multiple payment methods, without requiring inventory tracking."
        },
           {
            question:"Does Shopaver POS billing provide multiple payment modes?",
            answer:"Absolutely! Shopaver POS supports multiple payment methods, including cash, UPI, credit/debit cards, digital wallets, BNPL (Buy Now Pay Later), coupons, and reward points. It also allows businesses to accept online` payments through QR codes on invoices, ensuring a fast and convenient transaction process."
        },
           {
            question:"Why is POS (Point-of-Sale) software considering a super app for businesses of all sizes? ",
            answer:"POS (Point-of-Sale) software is considered a super app for businesses of all sizes because it consolidates essential functions like billing, inventory management, digital ledger (Khata), ONDC, online store, and WhatsApp commerce into a single user-friendly platform, offering a comprehensive, all-in-one solution for business management. "
        },
           {
            question:"Do we provide POS software training?",
            answer:" Yes! We provide training resources, step-by-step tutorials, and comprehensive documentation to help you get started easily."
        },
         {
            question:"Do I need accounting knowledge to use Digital Khata? ",
            answer:" No, Digital Khata is designed to be user-friendly and doesn’t require advanced accounting skills. It’s intuitive, and most software offers tutorials or customer support for getting started."
        },
    ]
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = faqData || [];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <section className="bg-[#5801B7] py-[3.4375rem] lg:py-[5.625rem] mt-[7.5rem]">
      <div className="max-w-[115.625rem] mx-32">
        <div className="flex items-center lg:items-start lg:justify-between lg:flex-row flex-col px-[1.25rem]">
          <div className="w-[14.0625rem] lg:w-[17.5rem]">
            <h2 className="text-[#FFF] text-[1.625rem] lg:text-[2.25rem] font-semibold leading-normal text-center lg:text-left font-bricolage">
              Frequently Asked Questions
            </h2>
            <p className="pt-[1.375rem] text-[#FFF] text-[0.875rem] lg:text-[1.25rem] leading-normal text-center lg:text-left font-dm-sans">
              Have any questions? We are here to assist you.
            </p>
          </div>
          <div className="mt-[2.25rem] lg:mt-0">
            {faqs &&
              faqs.map((data, index) => (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className="rounded-[0.454375rem] lg:rounded-[0.9375rem] border border-white/50
bg-gradient-to-r from-[#FFF]/30 to-[#5801B7]/60
shadow-[0_0_4px_rgba(0,0,0,0.25)]
backdrop-blur-[0.9375rem] w-full lg:w-[42.1875rem] py-[0.46875rem] px-[0.59375rem]  lg:lg:py-[0.9375rem] lg:px-[1.1875rem] mt-[0.625rem] lg:mt-[1.25rem] flex justify-center flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-[#FFF] text-[0.875rem] lg:text-[1.125rem] font-medium leading-normal w-[75%]">
                      {data.question}
                    </h2>
                    <p className="text-[#FFF] text-[0.875rem] lg:text-[1.125rem] font-medium ">
                      {openIndex === index ? "-" : "+"}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openIndex === index
                        ? "max-h-[43.75rem] opacity-100 mt-[0.625rem]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pt-[0.65625rem] text-[#FFF] text-[0.938rem] font-normal leading-normal w-[90%]">{data.answer}</p>
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
