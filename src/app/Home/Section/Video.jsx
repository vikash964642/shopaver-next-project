// import React from 'react'
// import video from "../../../../../public/assets/video/shopaver_traler_website_edited.webm";

"use client";
import { useState, useEffect } from "react";

const HomeVideo = () => {
  const [videoWidth, setVideoWidth] = useState("100%");

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 425;
      return isSmallScreen ? `calc(100% - 40px)` : `calc(100% - 200px)`;
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const videoElement = document.querySelector(".video-container");
      if (!videoElement) return;

      const videoRect = videoElement.getBoundingClientRect();
      const videoTop = videoRect.top;
      const videoBottom = videoRect.bottom;

      // Calculate the position where the width should start reducing
      const scrollPositionToStartReducingUp = windowHeight * 0.25;
      const scrollPositionToStartReducingDown = windowHeight * 0.75;

      if (videoTop < windowHeight / 2 && videoBottom > windowHeight / 2) {
        // If the video is in the middle of the window, set full screen width
        setVideoWidth("100%");
      } else {
        // If not in the middle of the window
        if (window.scrollY < scrollPositionToStartReducingUp) {
          // If scrolling up and reached 25% of window height
          setVideoWidth(handleResize());
        } else if (window.scrollY > scrollPositionToStartReducingDown) {
          // If scrolling down and reached 75% of window height
          setVideoWidth(handleResize());
        } else {
          // If scrolling up and not reached 25% of window height yet
          setVideoWidth("100%");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setVideoWidth(handleResize()));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => setVideoWidth(handleResize()));
    };
  }, []);

  return (
    <section id="home-video" className="my-[90px]">
      <div
        className="video-container w-full border-none p-0 m-0 "
        style={{
          width: videoWidth,
          margin: "110px auto 0px auto",
          transition: "all .5s linear",
        }}
      >
        <video autoPlay loop muted className="w-full border-none m-0 p-0"  style={{ border: 'none !important', outline: 'none' }}>
          <source src={"/video/shopaver_traler_website_edited.webm"} type="video/webm"  />
        </video>
      </div>
    </section>
  );
};

export default HomeVideo;
