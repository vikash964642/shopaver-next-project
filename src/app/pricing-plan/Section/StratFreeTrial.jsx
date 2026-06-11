import React from 'react'

function StratFreeTrial() {
  return (
   <section className="max-w-[90rem] px-[27px] xl2:px-[170px] mx-auto mt-[80px]">
  <div className="w-full rounded-[16px] bg-[linear-gradient(90deg,_#F0E2FF_0%,_#D7AEFF_99.54%)] px-[20px] xm1:px-[30px] md:pl-[33px] md:pr-[20.5px] py-[30px] md:py-4">
  <div className="flex flex-col gap-5 lg:flex-row items-center lg:justify-between">

    {/* LEFT */}
    <h2
      className="
        text-center lg:text-left
        text-[22px]
        font-semibold text-[#5801B7]
      "
    >
      Start Your Free Trial
    </h2>

    {/* RIGHT */}
    <div
      className="
       hidden md:flex flex-row
        justify-between
        items-stretch
        
        rounded-full
        bg-white
        overflow-hidden
        shadow-sm
        h-[50px]
         lg:h-[60px]
         max-w-[500px]
         

      "
    >
      <input
        type="tel"
        placeholder="Enter Mobile Number"
        className="
          px-6
          text-[19px]
          outline-none
          bg-white
        "
      />

      <button
        className="
        
          px-8
          rounded-full
          whitespace-nowrap
          bg-[#5B14D1]
          text-white
          font-medium
          text-[19px]
          transition-all
          duration-300
          hover:bg-[#4A10B8]
        "
      >
        Get 14 day free trial
      </button>
    </div>
    <div className='flex flex-col items-center gap-[6px] w-full md:hidden'>
       <input
        type="tel"
        placeholder="Enter Mobile Number"
        className="
          px-6
          max-w-[300px]
          w-full
          h-[50px]
          rounded-[30px]
          text-[19px]
          outline-none
          bg-white
          text-center
        "
      /> 
       <button
        className="
        
          px-8
          rounded-full
          max-w-[300px]
          w-full
          h-[50px]
          bg-[#5801B7]
          text-white
          font-semibold
          text-[19px]
          
        "
      >
        Get 14 day free trial
      </button>
    </div>
  </div>
</div>


</section>
  )
}

export default StratFreeTrial