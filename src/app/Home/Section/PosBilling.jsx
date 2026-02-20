// import React from 'react'
// import Homeimage1 from "../../../../../public/assets/img/pos_image.webp";

"use client";
import Image from "next/image";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Link from "next/link";

function PosBilling(props) {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="pt-11 lg:pt-[70px]">
      <div className="div-3 max-w-screen-lg mx-auto flex flex-col-reverse lg:flex-row ">
        <div className="para3 px-11 lg:pr-[0px] lg:mt-[62px]">
         


          
          <h3 className="md:text-(--primary) lg:text-[32px] text-[22px] font-bold">
            Pos Billing Software
          </h3>
          <h3 className="font-medium text-[20px] md:text-[22px] leading-[25px] md:leading-[25.4px] pt-[2px] max-[400px]:text-[15px] flex flex-wrap: wrap">
           {props.title}
          </h3>
          <p className="md:text-[16px] text-[14px] md:leading-[21.88px] leading-[18.62px] md:mt-[15px] mt-[16px] font-medium lg:w-[400px]">
            Shopaver POS is the perfect solution for businesses seeking a
            reliable, efficient point-of-sale system. Our user-friendly POS
            software simplify billing, invoicing,&nbsp;
            <Link
              href="/inventory-management-software"
              onClick={ScrollTop}
              className="text-blue-600 no-underline cursor-pointer"
            >
              inventory management
            </Link>
            , and sales tracking, ensuring quick and secure payments, making it
            easier to manage operations and improve business efficiency.
          </p>

          <Link
            href="/pos-billing-software"
            onClick={ScrollTop}
            className="text-(--primary) cursor-pointer font-bold md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[25px]"
          >
            View More &gt;&gt;
          </Link>
        </div>
        <div className="md:p-[0px] p-9">
          <Link href="/pos-billing-software" onClick={ScrollTop}>
            <Image src={"/img/pos_image.webp"} height={418} width={580} alt="Pos Billing Software"></Image>
          </Link>
        </div>
      </div>
    </section>
  );
}
PosBilling.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PosBilling;
