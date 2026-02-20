
import Image from "next/image";

function GetInTouch() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto lg:mt-[110px] lg:mb-[154px] mb-[100px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="lg:text-[48px] text-[36px] font-semibold leading-[43px] lg:leading-[30px] px-[75px] lg:px-0 text-center">
              Having Trouble? Get in touch
            </p>
          </div>
          <div className="flex flex-col lg:justify-around lg:flex-row items-center w-full lg:pt-[80px] pt-[75px]">
            <div className="flex flex-col items-center">
              <Image src={"/img/GetInTouch1.png"} height={120} width={100} alt="phone number" className="pl-[30px] lg:pl-5"></Image>
              <p className="  text-[17px] lg:text-[16px] lg:leading-7  font-medium leading-[31px] pt-3 pl-[25px]">
                Call Us
              </p>
              <p className="text-5 lg:text-[18px] lg:leading-7 font-bold leading-[31px]  ">
                +91 9773994025
              </p>
            </div>
            <div className="py-[77px] lg:py-0 flex flex-col items-center">
              <Image src={"/img/GetInTouch2.png"} height={120} width={100} alt="Support Email Address" className="pl-[30px] lg:pl-5"></Image>
              <p className="text-[17px] lg:text-[16px] lg:leading-7  font-medium leading-[31px] pt-3 pl-[25px]">Email Us</p>
              <p className="text-5 lg:text-[18px] lg:leading-7 font-bold leading-[31px]">support@shopaver.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={"/img/GetInTouch3.png"} height={120} width={100} alt="Contact email" className="pl-[30px] lg:pl-5"></Image>
              <p className="text-[17px] lg:text-[16px] lg:leading-7  font-medium leading-[31px] pt-3 ">Schedule Training </p>
              <p className="text-5 lg:text-[18px] lg:leading-7 font-bold leading-[31px]">Contact your Email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
