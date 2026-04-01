// import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
const {text , width} = props ;
  return (
    <button className={`w-[125px] h-[40px] xl:w-[142px] xl:h-[44px] cursor-pointer md:bg-white px-[16px] py-2 rounded-[4px]  md:border-2 md:border-[#5801B7] md:text-primary hidden lg:block ${width} hover:bg-primary hover:text-white`}>
     {text}
    </button>
  );
};
Button.propTypes = {
text : PropTypes.string,
width : PropTypes.string,
}
export default Button;
