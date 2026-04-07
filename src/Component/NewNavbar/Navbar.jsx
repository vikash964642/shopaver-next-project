"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../Component/Utils/Buttons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleClick = () => {
    setOpen(false);
    ScrollTop();
  };

  const handleClickHome = () => {
    router.push("/");
    ScrollTop();
  };

  const isActive = (path) =>
    pathname === path
      ? "pt-[30px] pb-[28px] px-3 inline-block text-primary"
      : "pt-[30px] pb-[28px] px-3 inline-block hover:text-primary";

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-center font-medium justify-between lg:border-b border-headerBorder pb-2 lg:pb-0">
        {/* Left: Logo */}
        <div className="flex justify-between z-50 pt-8 lg:w-auto w-full pl-9 xl:ml-[45px] lg:pt-0 bg-white">
          <Image
            src={"/img/logo.webp"}
            width={156}
            height={36}
            alt="shopaver logo"
            className="lg:cursor-pointer h-9 custom-style"
            onClick={handleClickHome}
          />

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            {" "}
            {!open && <Button text="Menu" />}
            <div
              className="text-3xl lg:hidden text-primary"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex justify-between items-center mr-8">
          <ul className="lg:flex hidden lg:text-[13px] xl:text-[17.5px] items-center lg:gap-3 xl:gap-5">
            <li>
              <Link
                href="/about-us"
                className={isActive("/about-us")}
                onClick={handleClick}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/pricing-plan"
                className={isActive("/pricing-plan")}
                onClick={handleClick}
              >
                Pricing
              </Link>
            </li>

            {/* YOUR CUSTOM NAVLINKS COMPONENT */}
            <NavLinks handleClick={handleClick} />
          </ul>

          {/* Desktop Buttons */}
          <div className="items-center border-headerBorder  border-l-2 pl-5 mr-3 xl:mr-7 lg:flex hidden">
            <a
              href="https://app.shopaver.com/Sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:block hidden font-bold md:text-[13px] xl:text-[15px]"
            >
              <Button
                text="Start For Free"
                className=""
              />
            </a>
          </div>

          <a
            href="https://app.shopaver.com/log-in"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:block hidden font-bold lg:text-[13px] xl:text-[15px] cursor-pointer"
          >
            <Button text="Login" />
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden z-10 bg-white fixed w-full text-[22px] top-[35px] bottom-0 py-11 pl-4 duration-800 overflow-auto ${
            open ? "left-0;" : "left-[-100%]"
          }`}
        >
          <li className="pb-4">
            <Link
              href="/about-us"
              className="pt-[25px]  px-3"
              onClick={handleClick}
            >
              About Us
            </Link>
          </li>

          <li className="border-t border-headerBorder py-[19px]">
            <Link
              href="/pricing-plan"
              className="pt-[25px] pb-[21px] px-3"
              onClick={handleClick}
            >
              Pricing
            </Link>
          </li>

          <NavLinks handleClick={handleClick} />
         
          {/* Bottom Buttons */}
          <div className="flex justify-center  mt-[15px] fixed bottom-0 w-[90%] bg-white z-99 h-[100px]">
            <div className="flex flex-wrap justify-center gap-[18px]">
              <div className="bg-primary border-2 rounded-[30px] text-white w-[169px] text-[20px] h-[50px] flex justify-center pt-2 cursor-pointer">
                <Link href="https://app.shopaver.com/Sign-up">
                  Start For Free
                </Link>
              </div>

              <Link
                href="https://app.shopaver.com/log-in"
                className="border-primary border-2 rounded-[30px] cursor-pointer text-primary w-[168px] text-[20px] h-[50px] pt-2 text-center"
              >
                Login
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
