// import React from 'react'
import Image from 'next/image';

const Certification = () => {
  return (
   <section>
     <div className='container mx-auto flex items-center justify-around flex-col-reverse lg:flex-row max-md:p-6 lg:mt-[120px] mt-[90px] mb-[90px]'>
       <div className='mt-[10px] '>
         <Image src={"/img/certification.webp"} width={421} height={151} alt='certificationImg' />
       </div>
       <div className=''>
         <span className='text-primary text-[20px] font-bold md:font-medium md:text-[25px]'>Certification</span>
         <p className='leading-[27px] md:leading-[45px] font-bold md:font-semibold md:text-[36px] text-[25px] mt-[15px] lg:mt-[10px]'>Your data protection is our <br className='max-md:hidden' /> priority</p>
       </div>
     </div>
   </section>
  )
}

export default Certification
