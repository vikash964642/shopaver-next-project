// import React from 'react'

function ImportantNotes() {
  return (
      <section className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-[28px] text-center lg:text-left lg:text-[52px] font-bold  text-[#5801B7] mb-6">Important Notes:</h2>
      <ul className="list-disc list-outside space-y-5 text-[15px] lg:text-[22px] font-medium lg:font-semibold text-[#525252] px-[22px]">
        <li>Prices are for Online Training and Setup only.</li>
        <li>Prices are for installations within India only.</li>
        <li>Prices subject to change without notice.</li>
        <li>Cloud service included, but 18% GST will be charged extra.</li>
        <li>Onsite service will incur additional charges for travel, Boarding and Loading.</li>
        <li>Price includes a 1 year software license. Renew with Annual License Renewal (ALR).</li>
        <li>Starter, Standard, and Professional editions are best for businesses with less than 5 Billing counters.</li>
      </ul>


       <div className="flex flex-col justify-between sm:flex-row items-center gap-4 bg-purple-700 lg:px-20 py-4 rounded-lg shadow-sm mt-[100px]">
        <div className="bg-red-600 text-white text-xs font-bold px-8 py-1 rounded-md">SAVE UPTO 10%</div>
        <p className="text-white font-medium px-8 py-1 text-sm sm:text-base">Save more on 1+ Year Plans</p>
        <a href="#"
          className="bg-white hover:bg-white text-purple-700 text-sm px-10 py-2 rounded-md shadow transition">
          Talk To Sales
        </a>
      </div>
    </section>
  )
}

export default ImportantNotes