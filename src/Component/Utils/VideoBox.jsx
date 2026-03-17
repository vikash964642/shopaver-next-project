// import React from 'react'
import propType from "prop-types";
const VideoBox = (props) =>{
  const { video} = props;


  return (
    <div className=" md:pt-28 pt-20 ">
        <video autoPlay loop muted className="outline-none w-full">
            <source src={`/video/${video}`} type="video/mp4" />
          </video>
        </div>
  );
};
VideoBox.propTypes  = {
  video: propType.string,
}

export default VideoBox
