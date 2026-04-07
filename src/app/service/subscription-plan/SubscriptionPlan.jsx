import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function SubscriptionPlan() {
  return (
  <section className='max-w-5xl mx-auto px-[13px] xl:px-0 mt-[100px]'>

<div className='border border-[#5801B7] rounded-[28px] px-[25px] pt-[30px] pb-[25px]'>
<h2 className=' text-[26px] sm:text-[28px] lg:text-[30px] text-[#5801B7] font-semibold text-center'>Plans That Suit Every Retailer</h2>
<p className='pt-[5px] text-[#5F5F5F] text-[14px] sm:text-[15px] lg:text-[16px] text-center'>Accelerate your retail business with flexible pricing that fits your budget. Choose from affordable monthly or yearly plans, perfectly designed for small shops, growing franchises, and large retail chains.</p>
<div className='border border-[#F2E5FF] rounded-[12px] mt-[24px] py-[30px] px-[15px] lg:p-[40px] relative'>
   <div className='absolute z-20 bottom-[75px] flex justify-center w-[95%]'>
     <Link href={"/pricing-plan"} className='cursor-pointer px-[20px] py-[10px] bg-[#5801B7] text-[#FFF] text-[16px] font-semibold rounded-[11px] '>
       View Plans 
    </Link>
   </div>
    <div className="SubscriptionPlanGradient"></div>
<div className='flex justify-center'>
    <h3 className='sm:w-[560px] text-[20px] sm:text-[24px] lg:text-[30px] text-[#5801B7] font-semibold text-center'>Smart pricing for smarter billing-powered by AI, built to scale with your business</h3>
</div>
<p className='pt-[5px] text-[#5F5F5F] text-[14px] sm:text[15px] lg:text-[16px] text-center'>Empowering 90,000+ partnerswith reliable billing/POS and advance AI solutions</p>
<div className='flex justify-center mt-[12px]'>
    <p className='px-[9px] py-[2px] bg-[#2D7A02] text-[#F7F5F2] text-[12px] font-medium'>SAVE UP TO 10%</p>
</div>
<div className='flex justify-center mt-[18px]'>
    <div className='h-[43px] w-[80px] rounded-[26px] border border-[#CBCBCB] flex justify-center items-center px-[7px]'>
        <div className='h-[33px] w-[83px] rounded-[20px] bg-[#5801B7] flex justify-center items-center text-[#F7F5F2] text-[16px] font-medium'>
            Yearly
        </div>
        {/* <div className='text-[#5801B7] text-[16px] font-medium'>
            Monthly
        </div> */}
    </div>
</div>
<div className='flex justify-center gap-[15px] mt-[30px]'>
    <div className='max-[400px]:w-[100%] max-[550px]:w-[50%] sm:w-[33%] md:w-[25%] h-[160px] lg:h-[180px] px-[15px] py-[30px] border-[0.86px] border-[#DDDDDD]'>
   <p className='text-[#222222] text-[18px] lg:text-[20.5px] font-semibold'>Freemium Plan</p>
   <div className='flex items-center gap-[9px] mt-[20px]'>
    <p className='text-[28px] lg:text-[34.2px] font-bold text-[#393939]'>₹ 0</p>
    <div className='text-[12px] font-medium text-[#585858]'>
        <p>per</p>
       <p>/ Year</p>
    </div>
   </div>
    </div>
      <div className='max-[550px]:hidden sm:w-[33%] md:w-[25%] h-[160px] lg:h-[180px] px-[15px] py-[30px] border-[0.86px] border-[#DDDDDD]'>
   <p className='text-[#222222] text-[18px] lg:text-[20.5px] font-semibold'>Basic</p>
   <div className='flex items-center gap-[9px] mt-[20px]'>
    <p className='text-[28px] lg:text-[34.2px] font-bold text-[#393939]'>₹ 2499</p>
    <div className='text-[12px] font-medium text-[#585858]'>
        <p>per</p>
       <p>/ Year</p>
    </div>
   </div>
    </div>
    <div className='max-[400px]:hidden max-[550px]:w-[50%] sm:w-[33%] md:w-[25%] h-[160px] lg:h-[180px] relative border-[0.86px] border-[#5801B7]'>
        <div className='w-full absolute top-0 text-[#F7F5F2] text-[12px] bg-[#5801B7] flex justify-center'>
            <Image src={'/landingPage/bestValueIcon.svg'} width={20} height={20} />
         Best Value
        </div>
          <div className=' px-[15px] py-[30px]  '>
        
   <p className='text-[#5801B7] text-[18px] lg:text-[20.5px] font-semibold'>Pro</p>
   <div className='flex items-center gap-[9px] mt-[20px]'>
    <p className='text-[28px] lg:text-[34.2px] font-bold text-[#5801B7]'>₹ 3499</p>
    <div className='text-[12px] font-medium text-[#5801B7]'>
        <p>per</p>
       <p>/ Year</p>
    </div>
   </div>
    </div>
    </div>
      <div className='hidden md:block sm:w-[33%] md:w-[25%] h-[160px] lg:h-[180px] px-[15px] py-[30px] border-[0.86px] border-[#DDDDDD]'>
   <p className='text-[#222222] text-[18px] lg:text-[20.5px] font-semibold'>Enterprises</p>
   <div className='flex items-center gap-[9px] mt-[20px]'>
    <p className='text-[28px] lg:text-[34.2px] font-bold text-[#393939]'>₹ 4999</p>
    <div className='text-[12px] font-medium text-[#585858]'>
        <p>per</p>
       <p>/ Year</p>
    </div>
   </div>
    </div>
</div>
</div>
</div>
  </section>
  )
}

export default SubscriptionPlan