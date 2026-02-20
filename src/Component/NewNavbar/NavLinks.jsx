"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "./Mylinks";
import PropTypes from "prop-types";

const NavLinks = ({ handleClick }) => {
  const ScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [activeLink, setActiveLink] = useState(null);
  const [hoveredSublinkIndex, setHoveredSublinkIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle SSR → window is undefined initially
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLinkMouseEnter = (linkName) => {
    if (!isMobile) setActiveLink(linkName);
  };

  const handleLinkMouseLeave = () => {
    if (!isMobile) {
      setActiveLink(null);
      setHoveredSublinkIndex(null);
    }
  };

  const handleLinkClick = (linkName) => {
    if (isMobile) {
      setActiveLink((prev) => (prev === linkName ? null : linkName));
    }
  };

  const handleSublinkClick = () => {
    if (isMobile) setActiveLink(null);
    setHoveredSublinkIndex(null);
    handleClick();
  };

  const handleBlogLinkClick = (e, link) => {
    if (link.external === true) {
      e.preventDefault();
      window.open(link.link, "_blank");
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div
            className="px-3 border-t border-(--headerBorder) text-left md:cursor-pointer group"
            onMouseEnter={() => handleLinkMouseEnter(link.name)}
            onMouseLeave={handleLinkMouseLeave}
            onClick={() => handleLinkClick(link.name)}
          >
            {/* Corrected for Next.js */}
            <Link
             href={link.submenu ? "#" : (link.link ?? "#")}
              onClick={(e) => handleBlogLinkClick(e, link)}
            >
              <p className="pt-[25px] pb-[21px] flex justify-between items-center group hover:text-(--primary)">
                {link.name}
                <span className="text-xl md:mt-1 md:ml-2  md:block">
                  <ion-icon
                    name={activeLink === link.name ? "chevron-up" : "chevron-down"}
                  ></ion-icon>
                </span>
              </p>
            </Link>

            {/* Submenu */}
            {link.submenu && activeLink === link.name && (
              <div className="lg:absolute top-20.5 md:block">
                <div className="bg-white pr-2 pb-4 gap-7 lg:border border-(--headerBorder) lg:rounded lg-drop-shadow-md overflow-scroll">
                  {link.sublinks.map((mysublinks, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={handleSublinkClick}
                      onMouseOver={() => setHoveredSublinkIndex(subIndex)}
                      onMouseLeave={() => setHoveredSublinkIndex(null)}
                    >
                      <Link
                        href={mysublinks.link}
                        onClick={(e) => handleBlogLinkClick(e, mysublinks)}
                      >
                        <div className="flex hover:bg-(--secondary) items-center h-7 w-64 rounded my-3">
                          <div className="flex items-center justify-center w-7 mr-3">
                            <Image
                              src={`/icons/${mysublinks.img}.svg`}
                              width={16}
                              height={28}
                              alt={mysublinks.name}
                            />
                          </div>
                          <p
                            className={`text-[17px] font-medium ${
                              hoveredSublinkIndex === subIndex
                                ? "text-(--primary)"
                                : "text-black"
                            }`}
                            onClick={ScrollTop}
                          >
                            {mysublinks.name}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

NavLinks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavLinks;
