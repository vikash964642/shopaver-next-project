"use client";

import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const FeaturesBox = (props) => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { img, head, para, link, alt } = props;

  return (
    <div className=" w-[284px] mx-[20px] flex flex-col py-4">
      <div className="flex flex-col items-center text-center md:h-[284px] lg:w-[284px] border-webBorder justify-center border rounded-[28px] shadow-sm ">
        <div className="py-9 h-[94px] w-[94px] rounded-full bg-secondary flex justify-center items-center mt-[23px] ">
          <Link href={link} onClick={ScrollTop}>
            <Image src={`/icons/${img}`} alt={alt} height={50} width={50} />
          </Link>
        </div>
        <div className="pb-[40px] px-[24px]">
          <h3 className="text-[20px] font-bold pt-[15px]">{head}</h3>
          <p className={`text-[12.25px] font-medium pt-[5px]`}>{para}</p>
        </div>
      </div>
    </div>
  );
};

FeaturesBox.propTypes = {
  img: PropTypes.string,
  head: PropTypes.string,
  para: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
};

export default FeaturesBox;
