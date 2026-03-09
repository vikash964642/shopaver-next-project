// import OnlineStoreImg from "../../../../../public/assets";
// import { Link } from "react-router-dom";
"use client";
import Link from "next/link";
import Image from "next/image";
function OnlineStore() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="max-w-screen-lg mx-auto pt-20 lg:pt-[135px]">
      <div className="container mx-auto flex items-center justify-around flex-col lg:flex-row">
        <div className="  bg-webgray3 w-[365px] max-[380px]:w-[90%] ma h-[320px] lg:h-[372px] lg:w-[448px] rounded-[20px] lg:rounded-[22.36px]">
          <Link href="/online-store" onClick={ScrollTop}>
            <Image
              src={"/img/OnlineStore1.webp"}
              height={448}
              width={470}
              alt="Online Store"
              className="lg:pt-[18px] pl-[8px] lg:pl-[0px]"
            />
          </Link>
        </div>
        <div className="lg:w-[465px] px-[49px] lg:px-[0px] mt-[65px] lg:mt-[18px]">
          <h3 className="md:text-[32px] text-[22px] font-bold md:leading-[30px] leading-[23.32px] lg:mt-[10px] md:text-primary">
            Online Store
          </h3>
            <h3 className="font-medium text-[20px] md:text-[22px] leading-[22px] md:leading-[28.4px] pt-[2px] max-[400px]:text-[15px] flex flex-wrap: wrap">
              Your Trusted Digital store – Fast and Secure
            </h3>
        
          <p className="font-medium text-[14px] md:text-[16px] md:leading-[21.28px] leading-[18.62px] md:mt-[18px] mt-[15px]">
            Shopaver Online Store is perfect for businesses of any size looking
            to set up and grow their&nbsp;
            <a
              href="https://shopaver.com/Blogs/grow-your-small-business-to-success"
              onClick={ScrollTop}
              rel="noopener noreferrer"
              className="text-blue-600 no-underline"
            >
              small business
            </a>
            &nbsp;effortlessly. Generate a unique store link, add inventory, and
            showcase products instantly. Sell, manage orders, and scale your
            business with ease on a user-friendly platform.
          </p>

          <div className=" max-md:flex flex md:justify-end lg:justify-start max-md:justify-end">
            <Link
              href="/online-store"
              onClick={ScrollTop}
              className="text-primary cursor-pointer font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[30px] lg:pt-[15px]"
            >
              View More &gt;&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineStore;
