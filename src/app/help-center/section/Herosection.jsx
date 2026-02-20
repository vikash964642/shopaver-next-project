function Herosection() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto lg:my-[110px] my-[58px]">
        <div>
          <h1 className=" text-(--primary) text-[24px] lg:text-[36px] lg:leading-[30px] lg:text-left font-bold leading-[32px] text-center">
            Support
          </h1>
          <h2 className="text-[35px] lg:text-[52px] lg:leading-[62px] lg:text-left lg:text-[#1B1B1B] font-bold leading-[42px] text-center pt-[28px] pb-[22px] px-[86px] lg:px-0">
          Need Help? You’re in the Right Place!
          </h2>
          <p className="lg:text-[18px] text-[16px] font-medium lg:leading-[28px] leading-[21px] lg:pb-[42px] px-[54px] pb-[75px] lg:px-0 text-center lg:text-left">
            Our team is here to assist you anytime, anywhere,if you face any
            challenge while using Software.
          </p>
          <div className="px-[30px] lg:px-0 flex gap-6 justify-center lg:justify-start">
           <a  href="/contact-us" rel="noopener noreferrer">
             <button className="text-(--primary) border border-(--primary) lg:text-[21px] font-bold leading-[32px] lg:h-[57px] h-[48px] lg:w-[197px] w-[164px] rounded-[50px] cursor-pointer">
               Contact Us
             </button>
           </a>
            <a
              href="https://app.shopaver.com/Sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:ml-[25px]"
            >
              <button className="bg-(--primary) text-white lg:text-[21px] font-bold leading-[32px] lg:h-[57px] h-[48px] lg:w-[197px] w-[164px] rounded-[50px] w-full cursor-pointer">
                Register Now
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
