"use client"
import Image from "next/image";
const rows = [
  { label: "Verification Badge", verified: "Official Blue Tick Badge", normal: "No Verification Badge" },
  { label: "Brand Trust", verified: "High Customer Trust", normal: "Lower trust level" },
  { label: "Authenticity", verified: "Confirm Official Business", normal: "Not officially verified" },
  { label: "Brand Visibility", verified: "Stands out in chats", normal: "Looks like a regular account" },
  { label: "Impersonation Risk", verified: "Lower risk of fake accounts", normal: "Higher risk of impersonation" },
];

export default function BlueTickComparison() {
  return (
    <section className="max-w-5xl mx-auto px-4 xl:px-0 mt-[70px] lg:mt-[150px]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-[30px] lg:text-[40px] font-medium text-[#3C3939] font-bricolage hidden lg:block">
          Blue Tick{" "}
          <span className="text-[#008069]">"WhatsApp vs Normal"</span>
        </h2>
        <div className="block lg:hidden text-[30px] font-medium  font-bricolage">
          <h2 className="text-[#3C3939]">Blue Tick </h2>
          <h2 className="text-[#008069]">“WhatsApp vs Normal”</h2>  
        </div>
        <p className="mt-[10px] text-[14px] lg:text-[18px] text-[#666] max-w-[354px] sm:max-w-[752px] mx-auto leading-relaxed font-dm-sans">
          A verified WhatsApp Business account instantly signals authenticity and reliability, making your brand stand out compared to a non-verified WhatsApp Business API account.
        </p>
      </div>

      {/* Table */}
      <div className="hidden lg:block border border-[#CBCBFF] rounded-[16px] overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-3">
          <div className="p-4 bg-[#F8F8FF] border-b-[0.73px] border-[#CBCBFF]" />

          <div className="py-[21px] px-[30px] bg-[#F8F8FF] border-b-[0.73px] border-l-[0.73px] border-[#CBCBFF]">
            
            <p className="text-[22px] font-semibold text-[#5801B7]">WhatsApp Verified (Bluetick)</p>
          </div>

          <div className="py-[21px] px-[30px] bg-[#F8F8FF] border-b border-l border-[#CBCBFF]">
            
            <p className="text-[22px] font-semibold text-[#666]">Normal WhatsApp Business Account</p>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 ${i !== rows.length - 1 ? "border-b border-[#CBCBFF]" : ""}`}
          >
            <div className="py-[28.33px] px-[30px] flex items-center">
              <p className="text-[18px] font-medium text-[#3C3939]">{row.label}</p>
            </div>
            <div className="py-[28.33px] px-[30px] border-l border-[#CBCBFF] flex items-center">
              <p className="text-[18px] text-[#5801B7]">{row.verified}</p>
            </div>
            <div className="py-[28.33px] px-[30px] border-l border-[#CBCBFF] flex items-center">
              <p className="text-[18px] text-[#666]">{row.normal}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile */}
<div className="block lg:hidden border-[0.277px] border-[#CBCBFF] rounded-[20px] overflow-hidden">
  
  {/* Header */}
  <div className="grid grid-cols-2">
    <div className="p-[18px] border-r-[0.277px] border-[#CBCBFF]">
        <Image src={"/newImage/bluetick.webp"} width={25} height={25.77}/>
      <p className="pt-[8px] text-[#5801B7] text-[14px] font-medium">WhatsApp Verified (Bluetick)</p>
    </div>
    <div className="p-[18px] ">
         <Image src={"/newImage/whatsappIcon.webp"} width={24} height={25}/>
      <p className="pt-[8px] text-[14px] text-[#666] font-medium">Normal WhatsApp Business Account</p>
    </div>
  </div>

  {/* Rows */}
  {rows.map((row, i) => (
    <div key={i}>
      {/* Label row */}
      <div className={`py-[18px] bg-[#F8F8FF] `}>
        <p className="text-[16px] font-medium text-[#3C3939] text-center">{row.label}</p>
      </div>
      {/* Values row */}
      <div className="grid grid-cols-2">
        <div className="p-[18px] border-r-[0.277px] border-[#CBCBFF] text-[#5801B7] text-[14px] font-medium">
          {row.verified}
        </div>
        <div className="p-[18px] text-[14px] text-[#666] font-medium">
          {row.normal}
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}