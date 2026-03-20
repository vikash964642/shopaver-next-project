
"use client";
import  { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showTrigger = 100; // Adjust this value as needed

    if (scrollY > showTrigger) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToTop}>
          <FaArrowUp className="top-btn-icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;

  @media (max-width: 768px) {
    right: 1rem;
  }

  .top-btn {
    width: 3rem;
    height: 3rem;
    background-color: #5801b7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #48009b; /* Darken the background on hover */
    }
  }

  .top-btn-icon {
    font-size: 1.5rem;
    color: #fff;
    {/*animation: bounce 1.2s infinite alternate;*/}
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-0.5rem);
    }
  }
`;

export default GoToTop;
