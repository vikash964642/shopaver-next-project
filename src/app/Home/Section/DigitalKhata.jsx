// import React from 'react'
// import { Link } from "react-router-dom";
// import DigitalKhataImg from "../../../../../public/assets/img/DigitalkhataHomepage2.webp";
// import DigitalKhataImgPhone from "../../../../../public/assets/img/DigitalKhataPhone.webp";

"use client";
import Image from "next/image";
import Link from "next/link";

const DigitalKhata = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="max-w-screen-lg mx-auto pt-[128px] md:pt-[120px] px-6 lg:px-4">
      <div className=" container mx-auto flex   justify-around bg-secondary rounded-3xl flex-col lg:flex-row">
        <div className="lg:flex-1">
          <Link href="/bahi-khata-software" onClick={ScrollTop}>
            <Image
              src={"/img/DigitalkhataHomepage2.webp"}
              height={354}
              width={468}
              alt="Digital Bahi Khata"
              className="p-[32px] md:px-[18px] "
            />
          </Link>
        </div>
        <div className="pl-[20px] lg:pl-14 lg:flex-1 lg:pt-[35px] flex flex-col justify-center ">
          <p className="text-base font-medium md:text-[15px] text-[14px">
            Track & manage your udhar with digital khata
          </p>
          <h3 className="md:text-primary md:text-[32px] text-[22px] md:leading-[30.18px] leading-[27.74px] font-bold md:mt-[8px] mt-[10.57px] ">
            Bahi Khata Software
          </h3>
          <p className="font-medium md:text-[16px] md:leading-[21.28px] text-sm mt-[10px] md:mt-[10px] mr-[40px] lg:mr-[0px] md:w-[408px] max-[400px]:mr-[5px]">
            Upgrade from manual khata to Shopaver’s advanced digital bahi khata.
            Effortlessly manage customer transactions, track purchases,
            payments, and outstanding balances. With&nbsp;
            <Link
              href="/pos-billing-software"
              onClick={ScrollTop}
              className="text-blue-600 no-underline"
            >
              real-time updates
            </Link>
            , automate processes, reduce errors, and access your credit and
            debit records securely, anytime, anywhere.
          </p>

          <div className=" text-primary font-bold md:text-[15.6px] text-sm flex lg:justify-start justify-end  lg:mt-[10px]">
            <Link
              href="/bahi-khata-software"
              onClick={ScrollTop}
              className="text-primary lg:pr-5 md:text-[15.6px] font-bold text-[14px] max-md:pb-7 pt-[20px] lg:pt-0  mr-[45px] lg:mr-[0px]"
            >
              View More &gt;&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalKhata;
