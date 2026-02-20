import Image from "next/image"

function Contectsection() {
  return (
    <section className='lg:mt-[120px] mb-[150px]'>
        <div className='max-w-screen-lg mx-auto flex flex-col lg:flex-row  items-center'>
          <div className=' w-[356px] h-[183px] rounded-[15.32px] bg-(--secondary) px-[24px] '>
           <div className='flex justify-between pt-[12px]'>
             <p className='font-bold text-[17.74px] lg:text-[20px] leading-[32px]'>Phone Number</p>
             <Image src={"/icons/telephone-icon.png"} width={41.55} height={33.37} alt="Phone Number" className='w-[41.55px] h-[33.37px]' />
           </div>
           
           <div className='flex lg:mt-[11px]'>
            <p className='font-normal text-[18] leading-7'>Support :</p>
            <p className='font-normal text-[18] leading-7 pl-[12px]'>+91 9311660676</p>
           </div>
          </div>
          <div className=' w-[356px] h-[183px]  rounded-[15.32px] bg-(--secondary) lg:mx-[29px] px-[25px]  my-[25px] lg:my-[0px] '>
           <div className='flex justify-between pt-[12px]'>
             <p className='font-bold text-[17.74px] lg:text-[20] leading-[32px]'>Email Address</p>
             <Image src={"/icons/Contect-email-icon.svg"} height={41.93} width={41.12} alt="Email Address" className='w-[41.12px] h-[41.93px]' />
           </div>
           <div className=' '>
            <p className='font-normal text-[18] leading-[28px]'>support@shopaver.com</p>
           </div>
          </div>
          <div className='lg:w-[366px] w-[356px] h-[183px]  rounded-[15.32px] bg-(--secondary) px-[24px] '>
           <div className='flex justify-between pt-[12px]'>
             <p className='font-bold text-[17.74px] lg:text-[20] leading-[32px]'>Office Address</p>
             <Image src={"/icons/Address-icon.png"} height={41.90} width={30} alt="Office Address" className='w-[30px] h-[41.90px]' />
           </div>
           <div >
            <p className='font-normal text-[18] leading-[28px]'>
             KGC INFOTECH PVT LTD. <br />H-31, 5th Floor,<br/>Sector - 63, Noida<br/>Uttar Pradesh - 201301
                </p>
           </div>
          </div>
        </div>
    </section>
  )
}

export default Contectsection
