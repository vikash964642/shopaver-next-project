"use client";
import Link from "next/link";
import Image from "next/image";

const WhatsappCommerce = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className=" pt-20 lg:mt-[128px] ">
      <div className="max-w-screen-lg mx-auto items-center justify-around relative ">
        <div className="lg:h-[335px] lg:w-[835px] row  bg-(--secondary) rounded-[25px] flex flex-col-reverse items-center lg:flex-row-reverse md:pl-[45px] mx-[24px] md:mx-[0px]">
          <div className="flex p-5  md:rounded-3xl ">
            <div className="lg:w-[66%] mt-[45px] lg:mt-[0px]">
              <h3 className="text-[22px] md:text-[32px] font-bold text-(--primary) ">
                Whatsapp Commerce
              </h3>
              <h3 className="text-[20px] md:text-[22px] leading-[22px] md:leading-[36.4px] pt-[2px] max-[400px]:text-[15px] flex flex-wrap: wrap">
                Grow Faster and Sell Smarter
              </h3>
              <p className="font-medium  text-[16px] pb-9 max-md:text-sm flex-shrink pr-[20px] lg:pr-[0px] pt-[10px] lg:pt-[0px]">
                Put your business on WhatsApp Commerce and engage customers
                through their favorite chat app. Showcase products with images,
                prices, and details directly in the chat. Effortlessly manage
                your&nbsp;
                <a
                  href="https://shopaver.com/Blogs/whatsapp-business-boost-your-sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 no-underline"
                >
                  WhatsApp Business
                </a>
                , boost sales, and offer personalized support for an efficient
                shopping experience.
              </p>

              <div className="flex md:justify-start justify-end md:pb-8">
                <Link
                  href="/whatsapp-commerce"
                  onClick={ScrollTop}
                  className="text-(--primary) cursor-pointer md:text-[15.6px] font-bold text-[14px] "
                >
                  View More &gt;&gt;
                </Link>
              </div>
            </div>
            <div className="lg:w-[34%]"></div>
          </div>

          <div className=" max-md:pt-5">
            <Link href="/whatsapp-commerce" onClick={ScrollTop}>
              <Image
                src={"/img/WhatsappHomepageimg2.webp"}
                height={511}
                width={511}
                alt="WhatsApp Commerce"
                className="lg:absolute  right-0 -bottom-14 hidden lg:flex"
              />
              <Image
                src={"/img/WhatsappCommerseHomepageMobile.webp"}
                height={363}
                width={363}
                alt="Whatsapp commerce on mobile"
                className="lg:hidden"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappCommerce;
