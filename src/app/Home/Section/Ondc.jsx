// import React from 'react'
import OndcImg from '../../../../../public/assets/img/ONDCHomepage1.webp';
import { Link } from 'react-router-dom';

const Ondc = () => {
  const ScrollTop=()=>{
    window.scrollTo({top: 0});
  }
  return (
    <section className=' pt-20'>
        <div className='max-w-screen-lg mx-auto flex lg:items-center  flex-col-reverse lg:flex-row'>
          <div className='md:pt-8 pl-[44px] lg:pl-[10px] pt-[10px] lg:pt-[12px]'>
           
          <h3 className="md:text-[29px] text-[22px] font-bold  md:leading-[30px] leading-[23.32px] lg:mt-[10px] max-[400px]:text-[18px]">Maximize Visibility with <span className="md:text-(--primary)"> ONDC </span>
          </h3>
            

          
          
            <p className='font-medium text-[13px] lg:text-[16px] leading-[18.4px] md:leading-[21.28px] mt-[16px] lg:mt-[10px] w-[279px] lg:w-[408px]'>Explore e-commerce&#39;s future with ONDC: Empowerment, Innovation, Inclusive growth.</p>
            <div className=" max-md:flex max-md:justify-end lg:pr-0 pr-[45px] lg:pt-[18px]">
            <Link to='/ondc-solutions' onClick={ScrollTop} className="text-(--primary) cursor-pointer md:text-[15.6px] font-bold text-[14px] mt-[20px] lg:mt-[15px] ">
            View More &gt;&gt;
            </Link>
          </div>            
          </div>
          <div className='lg:p-5 p-6 flex justify-center'>
            <img src={OndcImg}  alt="ONDC Solutions"  />
          </div>
        </div>
    </section>
  )
}

export default Ondc
