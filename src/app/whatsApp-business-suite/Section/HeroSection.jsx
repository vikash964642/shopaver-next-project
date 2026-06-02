

export default function HeroSection() {
  return (
    <section className="mt-[90px] lg:mt-[110px] xl2:mt-[130px] xl3:mt-[170px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* CONTENT */}
        <div className="flex flex-col items-center text-center">
          
          {/* HEADING */}
          <h1 className="max-w-[330px] md:max-w-full text-[25px] md:text-[30px] lg:text-[39.5px] xl2:text-[52px] xl3:text-[60px] font-bold md:font-semibold leading-[30px] md:leading-[36px] lg:leading-[48px] xl2:leading-[62px] xl3:leading-[72px] text-[#5801B7] font-bricolage">
            Drive 3X More Sales with {" "}
            <br className="hidden md:block" />
             WhatsApp Business Suites
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-[2rem] max-w-[470px] lg:max-w-[510px] xl2:max-w-[660px] xl3:max-w-3xl text-sm leading-[18px] lg:leading-[20px] xl2:leading-[26px] xl3:leading-[31px] text-[#525252] text-[14] lg:text-[15.5px] xl2:text-[20px] xl3:text-[23.5px]">
            Engage customers where they are most active and turn conversations
            into real business growth with WhatsApp Business Suite.
          </p>

          {/* BUTTONS */}
          <div className="mt-[2rem] flex  gap-2 lg:gap-3 xl2:gap-4 items-center">
            <button className=" bg-[#5801B7] w-[139px] h-[42px]  lg:w-[148px] lg:h-[45px] xl2:w-[195px] xl2:h-[60px] xl3:w-[230px] xl3:h-[70px] rounded-[8.6px] md:rounded-[7px] lg:rounded-[9.3px] xl2:rounded-[12px] xl3:rounded-[14px] text-[12px] lg:text-[14px] xl2:text-[17.7px] xl3:text-[20.5px] font-medium text-white shadow-md transition-all duration-300 hover:scale-105 ">
              Start Free Trial
            </button>

            <button className=" border-[0.85px] border-[#D7D7D7] bg-[#ECECEC] w-[139px] h-[42px] lg:w-[148px] lg:h-[45px] xl2:w-[195px] xl2:h-[60px] xl3:w-[230px] xl3:h-[70px] rounded-[8.6px] md:rounded-[7px] lg:rounded-[9.3px] xl2:rounded-[12px] xl3:rounded-[14px] text-[12px] lg:text-[14px] xl2:text-[17.7px] xl3:text-[20.5px] font-medium text-[#525252] transition-all duration-300 hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* IMAGE / VIDEO PLACEHOLDER */}
        {/* <div className="mt-12 flex justify-center">
          <div className="relative h-[220px] w-full max-w-4xl rounded-3xl bg-[#d9d9d9] sm:h-[320px] md:h-[420px]">
            
        
            <div className="absolute left-1/2 top-8 w-[80%] -translate-x-1/2 border-t-2 border-dashed border-sky-400" />

          
            <div className="absolute left-1/2 top-3 h-16 w-16 -translate-x-1/2">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rotate-45 bg-sky-400" />
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 -rotate-45 bg-sky-400" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}