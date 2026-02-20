// import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
const {text , width} = props ;
  return (
    <button className={`w-[142px] h-[44px] cursor-pointer bg-purple-950 text-white px-[16px] py-2 rounded-[4px] md:bg-white md:border-2 md:border-(--primary) md:text-(--primary) hidden lg:block ${width} hover:bg-(--primary) hover:text-white`}>
     {text}
    </button>
  );
};
Button.propTypes = {
text : PropTypes.string,
width : PropTypes.string,
}
export default Button;
