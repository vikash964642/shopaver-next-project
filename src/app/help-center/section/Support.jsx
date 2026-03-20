import Image from "next/image"
function Support() {
  return (
    <section className=" bg-secondary my-[110px] h-full w-[354px] md:w-auto rounded-[40px] lg:rounded-none mx-auto lg:mx-0">
       <div className='max-w-screen-lg mx-auto'>
         <div className='flex justify-around flex-col lg:flex-row lg:pt-[58px] pt-[36px] '>
           <div className='lg:h-64 h-56  lg:w-[222px]  flex flex-col justify-center items-center'>
             <Image src={"/img/supportImg1.png"} height={94} width={94} alt="support-img"  />
             <h3 className='text-5 lg:text-[18px] font-bold leading-[26px] pt-[38px]'>24/7 Online Support</h3>
             <p className='text-[16px] lg:text-[12.5px] font-medium leading-[25px] lg:leading-5 px-[42px] pt-[12px] lg:px-0 text-center'>Get unique assistance and solutions from our team of software experts.</p>
           </div>
           <div className='lg:h-64 h-56  lg:w-[222px]  flex flex-col justify-center items-center my-[88px] lg:my-0'>
             <Image src={"/img/serviceImg-2.png"} height={99} width={99} alt="support-img2"  />
             <h3 className='text-5 lg:text-[18px] font-bold leading-[26px] pt-[38px]'>Site Based Support</h3>
             <p className='text-[16px] lg:text-[12.5px] font-medium leading-[25px] lg:leading-5 px-[28px] pt-[12px] lg:px-0 lg:w-[230px] text-center'>Get in-person assistance and personalized solution from our Software experts</p>
           </div>
           <div className='lg:h-64 h-56  lg:w-[222px]  flex flex-col justify-center items-center mb-[49px]'>
            <div className='flex justify-center'>
              <Image src={"/img/serviceImg-3.png"} height={92} width={82} alt="support-img3"   />
            </div>
             <h3 className='text-5 lg:text-[18px] font-bold leading-[26px] pt-[38px]'>Multi-lingual Support</h3>
             <p className='text-[16px] lg:text-[12.5px] font-medium leading-[25px] lg:leading-5 px-[36px] pt-[12px] lg:px-0 text-center'>In any language, at any place, our team will help you with a smiling face</p>
           </div>
          
         </div>
       </div>
    </section>
  )
}

export default Support
