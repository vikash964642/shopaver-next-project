import PropTypes from "prop-types";
import Image from "next/image";


const FeatureNewBox = ({ img, head, para, showButton, alt }) => {
  return (
    
      
    
    <div className=" md:w-1/2 mx-auto flex flex-col md:px-8 py-4">
     
      <div className="flex flex-col items-center text-center justify-center ]">
        <div className="py-7 ">
          <Image src={`/img/${img}`} width={448} height={333} alt={alt}/>
        </div>
        <div className="pb-8 text-left md:pl-[5px]">
          <h3 className="text-[17.45px] md:text-[20px] lg:[22.37px] font-bold ">{head}</h3>
          <p className="text-[15px] md:text-[14px] font-medium pt-[20px] lg:pt-[15px] ">{para}</p>
          {showButton && (
            <button className="text-(--primary) text-base cursor-pointer font-bold pt-[31px]" onClick={() => alert('Button Clicked!')}>
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
    
  );
};

FeatureNewBox.propTypes = {
  img: PropTypes.string,
  head: PropTypes.string,
  para: PropTypes.string,
  alt: PropTypes.string,
  showButton: PropTypes.bool 


};


export default FeatureNewBox;
