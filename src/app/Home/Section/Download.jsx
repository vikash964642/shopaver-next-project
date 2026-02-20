import Image from "next/image";

const Download = () => {
  return (
    <section className="bg-(--secondary) mx-[20px] lg:mx-[0px] rounded-[10px] mt-[100px]">
      <div className=" lg:h-[484px] flex lg:justify-center lg:gap-[50px] lg:flex-row flex-col max-w-screen-lg mx-auto ">
        <div className="lg:mt-[0px] mt-[20px]">
          <div className="lg:mt-[50px] flex flex-col items-center lg:items-start">
            <p className="lg:font-normal lg:text-[33.09px] text-(--webtext) font-normal text-[24px]">
              Download the
            </p>
            <p className="lg:font-bold lg:text-[58.52px] text-(--primary) font-bold text-[36px]">
              Shopaver App
            </p>
          </div>
          <div className="bg-white lg:h-[172px] lg:w-[451px]  rounded-[20px] flex lg:flex-row flex-col items-center lg:items-start mx-[20px] lg:gap-[36px] lg:mx-auto lg-mt-[0px] py-[25px] lg:py-[0px] mt-[25px] lg:mt-[50px] ">
            <Image
              src={"/img/QRHome.webp"}
              alt="Shopaver App QR Code"
              height={151} width={148}
              className="lg:pl-[22px] lg:py-[22px] h-[151px] w-[148px]"
            ></Image>
            <div className="pt-[21px]">
              <p className="lg:font-semibold lg:text-[23.82px] lg:leading-[32.96px] lg:pr-[70px] font-bold text-[25px] leading-[27.74px] lg:pl-[0px] pl-[26px] pr-[75px] max-[400px]:pr-[10px]">
                Easiest way to sell all your products
              </p>
              <p className="mt-[15px] lg:mt-[8px] lg:font-normal lg:text-[14.5px] lg:leading-[20.14px] lg:pr-[55px] font-semibold text-[16px] leading-[19.2px]  pl-[26px] pr-[75px] lg:pl-[0px] max-[400px]:pr-[10px]">
                Scan the QR code and download Shopaver App
              </p>
            </div>
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.shopaver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/img/Downloadimg11.webp"}
            height={461}
            width={523}
            alt="Product Billing App"
            className="mt-[40px] lg:mt-[20px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Download;
