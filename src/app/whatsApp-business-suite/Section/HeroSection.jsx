

export default function HeroSection() {
  return (
    <section className="w-full  py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* CONTENT */}
        <div className="flex flex-col items-center text-center">
          
          {/* HEADING */}
          <h1 className=" text-[1.75rem] font-semibold leading-10 text-[#5801B7] sm:text-4xl md:text-[2.75rem]">
            Drive 3X More Sales with
            <br className="hidden sm:block" />
            WhatsApp Business Suites
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-[2rem] max-w-[536px] text-sm leading-6 text-gray-600 sm:text-base">
            Engage customers where they are most active and turn conversations
            into real business growth with WhatsApp Business Suite.
          </p>

          {/* BUTTONS */}
          <div className="mt-[2rem] flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#6D28D9] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#5b21b6]">
              Start Free Trial
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* IMAGE / VIDEO PLACEHOLDER */}
        <div className="mt-12 flex justify-center">
          <div className="relative h-[220px] w-full max-w-4xl rounded-3xl bg-[#d9d9d9] sm:h-[320px] md:h-[420px]">
            
            {/* Horizontal dashed line */}
            <div className="absolute left-1/2 top-8 w-[80%] -translate-x-1/2 border-t-2 border-dashed border-sky-400" />

            {/* Cross line */}
            <div className="absolute left-1/2 top-3 h-16 w-16 -translate-x-1/2">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rotate-45 bg-sky-400" />
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 -rotate-45 bg-sky-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}