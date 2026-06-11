// import React from 'react'

function ImportantNotes() {
  return (
      <section className="max-w-[90rem] px-[27px] xl2:px-[170px] mx-auto mt-[50px] lg:mt-[130px]">
      <div className="flex flex-col items-center gap-[40px] lg:grid lg:grid-cols-[2.04fr_1fr] lg:gap-[20px] xl2:gap-[29px] lg:items-stretch ">
        <div className="max-w-[400px] lg:max-w-full border-[1.1px] border-[#CBCBFF] bg-[#FFF] rounded-[30px] px-[17px] py-[32px] lg:px-[30px] lg:py-[32px]">
          <h2 className="text-[32px] font-medium text-[#5801B7] font-bricolage leading-none">Important Notes:</h2>
          <ul className="mt-[15px] list-disc list-outside space-y-2 text-[16px] lg:text-[18px] font-normal text-[#525252] px-4 lg:px-[22px] lg:leading-[33px]">
        <li>Prices are for Online Training and Setup only.</li>
        <li>Prices are for installations within India only.</li>
        <li>Prices subject to change without notice.</li>
        <li>Cloud service included, but 18% GST will be charged extra.</li>
        <li>Onsite service will incur additional charges for travel, Boarding and Loading.</li>
        <li>Price includes a 1 year software license. Renew with Annual License Renewal (ALR).</li>
        <li>Starter, Standard, and Professional editions are best for businesses with less than 5 Billing counters.</li>
      </ul>
        </div>
        {/* <div className="bg-[url('/img/ImportantNotesBG.png')] self-stretch bg-no-repeat "></div> */}
          <div className="max-w-[400px] lg:max-w-full h-[470px] lg:h-full  rounded-[30px] overflow-hidden">
    <div className="w-full h-full bg-[url('/img/ImportantNotesBG.png')] bg-cover bg-center bg-no-repeat pt-[50px] lg:pt-[30px] xl2:pt-[50px] px-[30px] lg:px-[20px] xl2:px-[30px]" >
    <button className="text-[#FFF] text-[14px] font-semibold h-[38px] w-[117px] rounded-full  bg-white/10 backdrop-blur-[10px] border border-white/20">Save upto 10%</button>
    <h2 className="pt-[22px] text-[#FFF] text-[26px] xm1:text-[30px] lg:text-[30px] xl2:text-[34.8px] font-medium font-bricolage lg:leading-[42px]">Going long-term ?</h2>
    <p className="pt-2 text-[#FFF] text-[20px] lg:text-[20px] xl2:text-[22px] font-medium leading-[24px] lg:leading-[29px]">Save More on 1+ Year plans.</p>
    <p className="mt-[11px] text-[#FFF] text-[14px] lg:text-[13px] xl2:text-[14px] font-normal leading-[18px]">Running multiple counters or planning ahead ? Our team will tailor a multi-year plan with the best possible rate for your business.</p>
    <button className="mt-[24px] text-[#FFF] text-[16px] font-semibold h-[47px] w-[143px] rounded-[12px] border-none bg-gradient-to-r from-[#912CFF] to-[#5801B7]">Talk to Sales</button>
    </div>
  </div>
      </div>
    </section>
  )
}

export default ImportantNotes