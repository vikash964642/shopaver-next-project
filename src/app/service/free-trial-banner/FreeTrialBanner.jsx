import React from 'react'
import Image from 'next/image'
function FreeTrialBanner() {
  return (
    <section className='max-w-5xl mx-auto mt-[100px] px-[20px] xl:px-0'>
        <div className='flex w-full gap-[38px] md:gap-0 flex-col md:flex-row  md:h-[261px] rounded-[17.21px] bg-[#5801B7]'>
<div className='pl-[13px] pt-[15px] md:pt-0 flex flex-col  md:justify-center md:pl-[20px] lg:pl-[160px] md:w-1/2'>
  <h2 className='w-[165px] sm:w-[200px] md:w-[300px] text-[#D7B3FF] text-[20px] sm:text-[25px] lg::text-[30px] font-semibold'>Get started with Shopaver today</h2> 
  <p className='w-[240px] md:w-[300px] pt-[11px] md:pt-[8px] text-[#FFF] text-[12px]'>Try Shopaver free for 7 days—you'll have access to every feature.
Cancel any time.</p> 
<button className='mt-[13.5px] md:mt-[17.2px] bg-[#FFF] w-[150px] h-[35px] md:w-[125px] md:h-[31px] rounded-[4.303px] text-[#5801B7] text-[14px] md:text-[12px] font-medium'>Start your free trial</button>
</div>
<div className='md:w-1/2 flex justify-end items-end'>
    <Image src={'/landingPage/FreeTrialBannerImg.webp'} className="md:w-[445px] md:h-[225px]" width={445} height={225}/>
</div>
        </div>

    </section>
  )
}

export default FreeTrialBanner