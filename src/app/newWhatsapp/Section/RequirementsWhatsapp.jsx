import React from 'react'
import Image from 'next/image';
const arrayData=[
    {
        icon:"/newImage/RequirementsWhatsappIcon1.svg",
        title:"Active WhatsApp Business Setup",
        description:"Your business must be live and actively using the WhatsApp Business API.",
        iconHeight:"h-[20px] lg:h-[25px]",
        iconWidth:"w-[19.6px] lg:w-[24.48px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon2.svg",
        title:"Meta Business Verification",
        description:"Complete your Meta Business Manager (KYC) verification to confirm your business identity.",
         iconHeight:"h-[20.7px] lg:h-[25.88px]",
        iconWidth:"w-[17.6px] lg:w-[22px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon3.svg",
        title:"5 Organic PR or News Coverage",
        description:"Your brand should have at least 5 organic PR or news mentions online. Paid or sponsored articles are not eligible.",
         iconHeight:"h-[21.15px] lg:h-[26.45px]",
        iconWidth:"w-[19px] lg:w-[23.8px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon4.svg",
        title:"Messaging Tier Requirement",
        description:"Your account should be Tier 2 or higher in messaging activity. Tier 1 may also qualify if you’ve exchanged 10–15 messages.",
         iconHeight:"h-[19.8px] lg:h-[24.8px]",
        iconWidth:"w-[22px] lg:w-[27.6px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon5.svg",
        title:"Two-Factor Authentication (2FA)",
        description:"Enable 2-step verification on your WhatsApp account for security and eligibility.",
         iconHeight:"h-[20px] lg:h-[25px]",
        iconWidth:"w-[20px] lg:w-[25px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon6.svg",
        title:"Notable & Reputable Business",
        description:"Your business must be well-known, credible, and trusted in your industry.",
         iconHeight:"h-[20.5px] lg:h-[25.65px]",
        iconWidth:"w-[21.6px] lg:w-[27px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon7.svg",
        title:"Registered Business",
        description:"Only legally registered businesses are eligible; individuals cannot apply.",
         iconHeight:"h-[19.2px] lg:h-[24px]",
        iconWidth:"w-[19.2px] lg:w-[24px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon8.svg",
        title:"Approved Display Name",
        description:"Your WhatsApp Display Name must be approved by Meta before verification.",
         iconHeight:"h-[20px] lg:h-[25px]",
        iconWidth:"w-[20px] lg:w-[25px]"
    },
     {
        icon:"/newImage/RequirementsWhatsappIcon9.svg",
        title:"High-Quality Account Activity",
        description:"Your account should maintain active, meaningful interactions with customers.",
         iconHeight:"h-[20px] lg:h-[25px]",
        iconWidth:"w-[20px] lg:w-[25px]"
    },
]
function RequirementsWhatsapp() {
  return (
    <section className='max-w-[1440px] mx-auto px-[15px] md:px-[47px] xl2:px-[110px] xl3:px-[70px] mt-[80px]'>
        <div>
         <h2 className='max-w-[410px] lg:max-w-[527px] xl3:max-w-[730px] px-[15px] sm:px-0 mx-auto text-[28.5px] md:text-[clamp(26.2px,3.35vw,34.4px)] lg:text-[clamp(34.4px,2.6vw,44.3px)] xl2:text-[clamp(44.3px,3vw,55px)] text-[#3C3939] leading-none font-bold font-bricolage text-center'>Requirements to Apply for <span className='text-[#06AAFF]'>WhatsApp Blue Tick</span></h2>
         <p className='max-w-[450px] lg:max-w-[737px] px-[30px] sm:px-0 pt-[20px] text-[14px] lg:text-[18px] text-[#666] font-normal text-center mx-auto'>Getting the WhatsApp Blue Tick verification ensures your business account is authentic, credible, and trustworthy. To qualify, your account must meet the following criteria:</p>   
        </div>
      <div className='grid grid-cols-2 md:grid-cols-3 mt-[60px] lg:mt-[47px]'>
        {arrayData.map((item, i) => {
          const totalCols2 = 2;
          const totalCols3 = 3;

          // Mobile/tablet (2 cols)
          const isLastCol2 = (i + 1) % totalCols2 === 0;
          const isLastRow2 = i >= arrayData.length - (arrayData.length % totalCols2 || totalCols2);

          // Desktop (3 cols)
          const isLastCol3 = (i + 1) % totalCols3 === 0;
          const isLastRow3 = i >= arrayData.length - (arrayData.length % totalCols3 || totalCols3);
          
          const isFirstRow3 = i < totalCols3;  // i < 3
        const isFirstRow2 = i < totalCols2;  // i < 2
          return (
            <div
              key={i}
              className={`px-[18px] xm1:px-[24px] py-[35px] lg:px-[35px]  border-[#E3E3FF] hover:bg-[#F8F8FF] 
  ${!isLastCol2 ? "border-r-[1px]" : ""}
  ${isFirstRow2 ? "border-t-[1px]" : ""}
  border-b-[1px]

  ${!isLastCol3 ? "md:border-r-[1px]" : "md:border-r-0"}
  ${isFirstRow3 ? "md:border-t-[1px]" : ""}
  md:border-b-[1px]
`}
            >
              <div className="">
                <Image className={`${item.iconHeight} ${item.iconWidth}`} src={item.icon} height={24} width={24} alt="Icon"></Image>
              </div>
              <h3 className="xm2:w-[85%] sm:w-[60%] md:w-[80%] lg:w-[90%] xl:w-[60%] pt-[11px] lg:pt-[15px] text-[16.8px] lg:text-[22px] font-semibold text-[#5801B7] font-bricolage lg:leading-[26.4px]">
                {item.title}
              </h3>
              <p className="xm2:w-[90%] sm:w-[70%] md:w-[90%] lg:w-[85%] xl:w-[70%] pt-[5px] lg:pt-[10px] text-[11px] lg:text-[14px] text-[#666] font-medium lg:font-normal leading-[22px] font-dm-sans">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RequirementsWhatsapp