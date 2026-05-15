import React from 'react'
const arrayData=[
    {
        icon:"",
        title:"Active WhatsApp Business Setup",
        description:"Your business must be live and actively using the WhatsApp Business API."
    },
     {
        icon:"",
        title:"Meta Business Verification",
        description:"Complete your Meta Business Manager (KYC) verification to confirm your business identity."
    },
     {
        icon:"",
        title:"5 Organic PR or News Coverage",
        description:"Your brand should have at least 5 organic PR or news mentions online. Paid or sponsored articles are not eligible."
    },
     {
        icon:"",
        title:"Messaging Tier Requirement",
        description:"Your account should be Tier 2 or higher in messaging activity. Tier 1 may also qualify if you’ve exchanged 10–15 messages."
    },
     {
        icon:"",
        title:"Two-Factor Authentication (2FA)",
        description:"Enable 2-step verification on your WhatsApp account for security and eligibility."
    },
     {
        icon:"",
        title:"Notable & Reputable Business",
        description:"Your business must be well-known, credible, and trusted in your industry."
    },
     {
        icon:"",
        title:"Registered Business",
        description:"Only legally registered businesses are eligible; individuals cannot apply."
    },
     {
        icon:"",
        title:"Approved Display Name",
        description:"Your WhatsApp Display Name must be approved by Meta before verification."
    },
     {
        icon:"",
        title:"High-Quality Account Activity",
        description:"Your account should maintain active, meaningful interactions with customers."
    },
]
function RequirementsWhatsapp() {
  return (
  <section className='my-4 px-4'>
    <div className='grid grid-cols-2 lg:grid-cols-3 '>
      {arrayData.map((item, i) => {
             const isFirstRowMd = i < 2;
          const isLastColMd = (i + 1) % 2 === 0; 

          const isFirstRowLg = i < 3;
          const isLastColLg = (i + 1) % 3 === 0;

          return (
            <div
              key={i}
              className={`p-6 border-[#CBCBFF] 
                ${isFirstRowMd ? "md:border-t-[0.73px] md:border-b-[0.73px]  " : " md:border-b-[0.73px]"}
                ${!isLastColMd ? "md:border-r-[0.73px] " : ""}

               ${isFirstRowLg ? "lg:border-t-[0.73px] lg:border-b-[0.73px]" : "lg:border-b-[0.73px]"}
                ${isLastColLg ? " " : "lg:border-r-[0.73px]"}
                
              
              `}
            >
              <div className="w-[38px] h-[38px] rounded-[8px] border border-[#CBCBFF] bg-[#F8F8FF] flex justify-center items-center mb-3">
                <i className={`${item.icon} text-[#5801B7] text-[16px]`}></i>
              </div>
              <h3 className="text-[18px] font-semibold text-[#5801B7] font-bricolage leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed font-dm-sans">
                {item.description}
              </p>
            </div>
          );
        })}
    </div>
  </section>
  )
}

export default RequirementsWhatsapp