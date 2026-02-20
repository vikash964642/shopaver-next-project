import PropsType from "prop-types";
import Image from "next/image";
const BlackBox = (props) => {
  const { head, title, img, para, alt } = props;

  return (
    <div className="max-w-screen-lg mx-auto ">
      <div className="flex flex-col justify-center items-center md:pt-[102px] pt-[69px]  ">
        <h3 className="font-bold md:text-[42px] text-[32px] leading-[41px] md:leading-[51.43px] text-center text-white">
          {head}
        </h3>
        <p className=" text-white md:text-[24px] text-[15px] lg:leading-[43px] leading-[20px] mt-[20px] font-medium px-[46px] text-center">
          {title}
        </p>
      
      </div>
      <div className=" mx-[30px] gap-[12px] md:gap-[42px] lg:mx-[0px] lg:gap-[0px] mt-[40px] lg:mt-[81px] pb-[101px] flex lg:justify-between  flex-wrap max-[400px]:justify-center">
      <div className="w-[145px] lg:w-[180px] h-[256px] bg-[#242424] m-[10px] md:m-0 flex flex-col justify-start items-start rounded-[8.21px] pt-[15px]">
          <div className="h-[117px] w-[117px] rounded-full bg-(--secondary) flex justify-center items-center ml-[13px] lg:ml-[30px]">
          <Image src={`/icons/${img[0]}`} height={116} width={116} alt={alt[0]} className=" " />
          </div>
          <p className="text-white text-[14px] lg:text-[18px] font-semibold leading-[24px] pt-[22px] ml-[20px] mr-[10px]">
            {para[0]}
          </p>
        </div>
        <div className="w-[145px] lg:w-[180px] h-[256px] bg-[#242424] m-[10px] md:m-0 flex flex-col justify-start items-start rounded-[8.21px] pt-[15px]">
          <div className="h-[117px] w-[117px] rounded-full bg-(--secondary) flex justify-center items-center ml-[13px] lg:ml-[30px]">
          <Image src={`/icons/${img[1]}`} height={116} width={116} alt={alt[1]} className=" " />
          </div>
          <p className="text-white text-[14px]  lg:text-[18px] font-semibold leading-[24px] pt-[22px] ml-[20px] mr-[10px]">
            {para[1]}
          </p>
        </div>
        <div className="w-[145px] lg:w-[180px] h-[256px] bg-[#242424] m-[10px] md:m-0 flex flex-col justify-start items-start rounded-[8.21px] pt-[15px]">
          <div className="h-[117px] w-[117px] rounded-full bg-(--secondary) flex justify-center items-center ml-[13px] lg:ml-[30px]">
          <Image src={`/icons/${img[2]}`} height={116} width={116} alt={alt[2]} className=" " />
          </div>
          <p className="text-white text-[14px]   lg:text-[18px] font-semibold leading-[24px] pt-[22px] ml-[20px] mr-[10px]">
            {para[2]}
          </p>
        </div>
        <div className="w-[145px] lg:w-[180px] h-[256px] bg-[#242424] m-[10px] md:m-0 flex flex-col justify-start items-start rounded-[8.21px] pt-[15px]">
          <div className="h-[117px] w-[117px] rounded-full bg-(--secondary) flex justify-center items-center ml-[13px] lg:ml-[30px]">
          <Image src={`/icons/${img[3]}`} height={116} width={116} alt={alt[3]} className=" " />
          </div>
          <p className="text-white text-[14px]   lg:text-[18px] font-semibold leading-[24px] pt-[22px] ml-[20px] mr-[10px]">
            {para[3]}
          </p>
        </div>
        <div className="w-[145px] lg:w-[180px] h-[256px] bg-[#242424] m-[10px] md:m-0 flex flex-col justify-start items-start rounded-[8.21px] pt-[15px]">
          <div className="h-[117px] w-[117px] rounded-full bg-(--secondary) flex justify-center items-center ml-[13px] lg:ml-[30px]">
          <Image src={`/icons/${img[4]}`} height={116} width={116} alt={alt[4]} className=" " />
          </div>
          <p className="text-white text-[14px]   lg:text-[18px] font-semibold leading-[24px] pt-[22px] ml-[20px] mr-[10px]">
            {para[4]}
          </p>
        </div>
       
      </div>
    </div>
  );
};

BlackBox.propTypes = {
  head: PropsType.string,
  title: PropsType.string,
  alt: PropsType.string,
  img: PropsType.array,
  para: PropsType.array,
};

export default BlackBox;
