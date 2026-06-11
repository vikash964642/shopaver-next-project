// import { Link } from "react-router-dom";
import Link from "next/link";
function ControllBusiness() {
  return(
    <>
  <section className="bg-[#F6EDFF]  mt-[38px]">
    <div className="max-w-screen-lg mx-auto bg-[#F6EDFF] ">
      <h3 className="text-[32px] lg:text-[48px] font-bold text-center lg:px-[150px] px-[40px] pt-[70px]">
        Take Control of your Business with{" "}
        <span className="text-[#5801B7]">Shopaver POS</span>{" "}
      </h3>
      <p className="text-center text-[16px] lg:text-[28px] font-medium pt-[39px] px-[15px]">Experience hassle-free billing and inventory management</p>
    </div>
<div className="flex justify-center pt-[44px] pb-[60px]">
    <Link href="https://app.shopaver.com/Sign-up" target="_blank"><button className="w-[302px] h-[58px] bg-[#5801B7] rounded-[50px] text-[#ffffff] text-[21px] font-bold">Start Your Free Trial Now!</button></Link>  
  
</div> 

 </section>

 </>
  )
}

export default ControllBusiness;
