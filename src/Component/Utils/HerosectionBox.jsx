
"use client";
import PropType from "prop-types";
const HerosectionBox = (props) => {
  const {head, subhead, para, button, padding} = props;
  return (
    <div>
        <div className="max-w-screen-lg mx-auto md:pt-28 pt-[51px]">
        <p className="flex justify-center items-center text-[22px] md:text-[36px] leading-[42px]  font-bold text-(--primary) pt-7">
          {head}
        </p>
        <h1 className={`flex justify-center items-center leading-[42.08px] text-[35.07px] md:text-[52px] ${padding}	font-bold py-[33px] md:py-0 md:pt-[42px] pl-[31px] pr-[26px] text-center md:leading-[62.4px] max-[400px]:text-[25px] max-[400px]:leading-[35px] `}>
          {subhead}
        </h1>
        <div className="flex justify-center items-center text-center  md:pt-[32px] md:pr-2">
          <p className={` text-[15px] leading-[20px] lg:leading-[23.69px] md:text-[18px] font-medium	${padding} lg:w-[758px]`}>
           {para}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[74px] lg:pt-[55px]">
        <button className="w-[164px] h-12 md:w-[197px] md:h-[57.79px] bg-(--primary) md:rounded-[64px] border text-white text-[17.5px]  md:text-[21px] font-bold rounded-[41px] cursor-pointer ">
          {button}
        </button>
      </div>
    </div>
  );
};

HerosectionBox.propTypes = {
  head: PropType.string,
  subhead: PropType.string,
  para: PropType.string,
  button: PropType.string,
  padding: PropType.string
}

export default HerosectionBox
