// import IventoryImg from "../../../../../public/assets/img/InventoryHome.webp";
// import { Link } from "react-router-dom";
"use client";
import Link from "next/link";
import Image from "next/image";

const InventoryManagement = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="max-w-screen-lg mx-auto pt-20">
      <div className="container mx-auto flex items-center justify-around flex-col-reverse lg:flex-row">
        <div className="lg:w-[420px] px-[44px] lg:px-[0px] mt-[36px] lg:mt-[18px]">
          <h3 className="md:text-[32px] text-[22px] font-bold md:leading-[39px] leading-[28.32px] lg:mt-[10px] max-[400px]:text-[18px]">
            <span className="md:text-primary">
              Best Inventory management software
            </span>
          </h3>
          <h3 className="font-medium text-[20px] md:text-[22px] leading-[22px] md:leading-[28.4px] pt-[2px] max-[400px]:text-[15px] flex flex-wrap: wrap">
            Track your Stock in Real-Time
          </h3>
          <p className="font-medium text-[14px] md:text-[16px] md:leading-[21.28px] leading-[18.62px] md:mt-[18px] mt-[15px]">
            Struggling with stock shortages, overstocking, or manual errors? Our
            Inventory Management Software tracks products with barcode, SKU, and
            HSN details. It offers real-time monitoring, automated reordering,
            and customizable alerts to improve&nbsp;
            <Link
              href="/quick-billing-software"
              onClick={ScrollTop}
              className="text-blue-600 no-underline cursor-pointer"
            >
              billing
            </Link>
            , reduce waste and prevent stockouts.
          </p>
          <div className=" max-md:flex flex md:justify-end lg:justify-start max-md:justify-end">
            <Link
              href="/inventory-management"
              onClick={ScrollTop}
              className="text-primary font-bold cursor-pointer md:text-[15.6px] text-sm flex md:justify-start justify-end pt-[30px] lg:pt-[15px]"
            >
              View More &gt;&gt;
            </Link>
          </div>
        </div>
        <div className="p-[25px] md:p-[0px] cursor-pointer">
          <Link href="/inventory-management-software" onClick={ScrollTop}>
            <Image src={"/img/InventoryHome.webp"} height={321} width={521} alt="Inventory management Software" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InventoryManagement;
