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
            Frequently Asked Questions
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
                      What is POS Billing Software?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    POS Billing Software is a digital tool used by businesses to
                    manage the billing process at the Point of Sale (POS). It
                    helps businesses generate invoices, track sales, accept
                    multiple payment methods (cash, credit/debit cards, online
                    payments), and print receipts for customers.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      How to Use a POS Billing System?
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
                    To use a POS billing system, start by setting up the
                    hardware and installing the software. Add your products to
                    the system, initiate transactions, accept payments, generate
                    invoices, manage sales, and keep the system updated for
                    efficient operations.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      How Does a POS (Point-of-sale) System Work?
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
                    A Point-of-Sale system works by integrating hardware such as
                    computers, barcode scanners, and printers with software that
                    manages inventory, sales transactions, and payment
                    processing. It enables businesses to track sales in real
                    time, apply discounts, accept multiple payment methods, and
                    generate detailed reports for business analysis and
                    financial management.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      How Do Customers Hold Orders in a POS Billing System?
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
                    Your bill can be placed on hold while adding additional
                    products during a multi-item transaction in the POS billing
                    process. You can continue billing for other customers
                    simultaneously and resume the held bill from where it was
                    paused.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      What Features are Provided in a POS Billing System?
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
                    A POS billing system operates easily across multiple
                    devices, allowing instant barcode scanning and invoice
                    generation from any platform. It supports multiple printers
                    types and offers an efficient checkout process that requires
                    minimal training for staff.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Is POS Billing Perfect for All Types of Businesses?
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
                    Yes, it’s ideal for all types of businesses because it
                    streamlines sales transactions, integrates easily with
                    inventory management, simplifies daily operations, and
                    speeds up billing with a simple 2-step process.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Can I Create Bills from an Android Mobile?
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
                    Yes, you can easily create bills on an Android mobile using
                    Shopaver POS billing app available on the Play Store.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      Is POS billing secure?
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
                    Yes, POS billing is secure. Most modern POS systems use data
                    encryption and comply with industry standards to protect
                    payment information. They are designed to prevent fraud and
                    ensure that customer data remains safe during every
                    transaction.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      What kind of support is provided with POS billing
                      software?
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
                    POS software providers typically offer customer support
                    through multiple channels, such as whatsapp and email to
                    help resolve issues and assist with setup or updates.
                  </p>
                </details>
              </div>

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
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      What is POS Billing Software?
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
                  <p className=" mt-3 group-open:animate-fadeIn text-[18px] font-normal">
                    POS Billing Software is a digital tool used by businesses to
                    manage the billing process at the Point of Sale (POS). It
                    helps businesses generate invoices, track sales, accept
                    multiple payment methods (cash, credit/debit cards, online
                    payments), and print receipts for customers.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      How to Use a POS Billing System?
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
                    To use a POS billing system, start by setting up the
                    hardware and installing the software. Add your products to
                    the system, initiate transactions, accept payments, generate
                    invoices, manage sales, and keep the system updated for
                    efficient operations.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      How Does a POS (Point-of-sale) System Work?
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
                    A Point-of-Sale system works by integrating hardware such as
                    computers, barcode scanners, and printers with software that
                    manages inventory, sales transactions, and payment
                    processing. It enables businesses to track sales in real
                    time, apply discounts, accept multiple payment methods, and
                    generate detailed reports for business analysis and
                    financial management.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      How Do Customers Hold Orders in a POS Billing System?
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
                    Your bill can be placed on hold while adding additional
                    products during a multi-item transaction in the POS billing
                    process. You can continue billing for other customers
                    simultaneously and resume the held bill from where it was
                    paused.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="md:text-[20px] text-lg font-semibold">
                      What Features are Provided in a POS Billing System?
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
                    A POS billing system operates easily across multiple
                    devices, allowing instant barcode scanning and invoice
                    generation from any platform. It supports multiple printers
                    types and offers an efficient checkout process that requires
                    minimal training for staff.
                  </p>
                </details>
              </div>
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
