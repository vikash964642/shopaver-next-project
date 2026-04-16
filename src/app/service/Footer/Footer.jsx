"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Footer() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className="bg-primary lg:mt-[70px]">
        <div className="flex lg:justify-between  px-[24px] lg:px-[80px] xl:px-[100px] min-[1450px]:px-[125px] flex-col lg:flex-row lg:pt-[70px] lg:pb-0 pt-[30px] pb-[40px] ">
          <div className="">
            <div className="flex items-center gap-[10px] lg:gap-[18.5px]">
              <Image
                src={"/landingPage/slugFooterShopaverLogo.svg"}
                height={48.5}
                width={48.5}
                onClick={handleClickHome}
                alt="shopaver logo"
                className="w-[27.5px] h-[27.5px] lg:w-[48.5px] lg:h-[48.5px] lg:cursor-pointer"
              ></Image>
              <p className="text-[19.5px] sm:text-[25px] lg:text-[34.1px] text-[#FFF] font-semibold">
                Shopaver
              </p>
            </div>
            <p className="text-[#FFF] text-[11.2px] leading-[20.8px]  sm:text-[14px] lg:text-[16px] font-normal md:leading-[23px] mt-[10px] lg:mt-[15px]  min-[1024px]:w-[325px] min-[1250px]:w-[390px] max-[500px]:w-[343px]  max-[400px]:w-[auto]">
              Shopaver is the all-in-one solution for businesses, from online
              presence to in-person sales, compliance, billing, and inventory
              management—empowering retail and e-commerce efficiency.
            </p>
            <div className="hidden lg:block mt-[40px]">
              <p className="text-[22px] font-semibold text-[#FFF]">Address</p>
              <p className="font-normal text-[16px] leading-[25px] text-[#FFF]">
                G-57, Sector-63, NOIDA,
                <br />
                Uttar Pradesh - 201301
              </p>
              <div className="flex items-center gap-[20px] mt-[45px]">
                <a href="https://www.facebook.com/ShopaverApp" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5103_583)">
                      <path
                        d="M25.5 13C25.5 6.1 19.9 0.5 13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.05 4.8 24.0875 10.5 25.25V16.75H8V13H10.5V9.875C10.5 7.4625 12.4625 5.5 14.875 5.5H18V9.25H15.5C14.8125 9.25 14.25 9.8125 14.25 10.5V13H18V16.75H14.25V25.4375C20.5625 24.8125 25.5 19.4875 25.5 13Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5103_583">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a href="https://www.instagram.com/shopaver/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M7.25 0H17.75C21.75 0 25 3.25 25 7.25V17.75C25 19.6728 24.2362 21.5169 22.8765 22.8765C21.5169 24.2362 19.6728 25 17.75 25H7.25C3.25 25 0 21.75 0 17.75V7.25C0 5.32718 0.763837 3.48311 2.12348 2.12348C3.48311 0.763837 5.32718 0 7.25 0ZM7 2.5C5.80653 2.5 4.66193 2.97411 3.81802 3.81802C2.97411 4.66193 2.5 5.80653 2.5 7V18C2.5 20.4875 4.5125 22.5 7 22.5H18C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18V7C22.5 4.5125 20.4875 2.5 18 2.5H7ZM19.0625 4.375C19.4769 4.375 19.8743 4.53962 20.1674 4.83265C20.4604 5.12567 20.625 5.5231 20.625 5.9375C20.625 6.3519 20.4604 6.74933 20.1674 7.04235C19.8743 7.33538 19.4769 7.5 19.0625 7.5C18.6481 7.5 18.2507 7.33538 17.9576 7.04235C17.6646 6.74933 17.5 6.3519 17.5 5.9375C17.5 5.5231 17.6646 5.12567 17.9576 4.83265C18.2507 4.53962 18.6481 4.375 19.0625 4.375ZM12.5 6.25C14.1576 6.25 15.7473 6.90848 16.9194 8.08058C18.0915 9.25268 18.75 10.8424 18.75 12.5C18.75 14.1576 18.0915 15.7473 16.9194 16.9194C15.7473 18.0915 14.1576 18.75 12.5 18.75C10.8424 18.75 9.25268 18.0915 8.08058 16.9194C6.90848 15.7473 6.25 14.1576 6.25 12.5C6.25 10.8424 6.90848 9.25268 8.08058 8.08058C9.25268 6.90848 10.8424 6.25 12.5 6.25ZM12.5 8.75C11.5054 8.75 10.5516 9.14509 9.84835 9.84835C9.14509 10.5516 8.75 11.5054 8.75 12.5C8.75 13.4946 9.14509 14.4484 9.84835 15.1517C10.5516 15.8549 11.5054 16.25 12.5 16.25C13.4946 16.25 14.4484 15.8549 15.1517 15.1517C15.8549 14.4484 16.25 13.4946 16.25 12.5C16.25 11.5054 15.8549 10.5516 15.1517 9.84835C14.4484 9.14509 13.4946 8.75 12.5 8.75Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Shopaver_software"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="19"
                    viewBox="0 0 27 19"
                    fill="none"
                  >
                    <path
                      d="M13.2103 18.2637H13.3564C14.7051 18.2588 21.5392 18.21 23.3819 17.7193C23.9389 17.5695 24.4465 17.2775 24.8539 16.8726C25.2614 16.4676 25.5544 15.9639 25.7036 15.4116C25.8694 14.7941 25.9859 13.9767 26.0646 13.1332L26.081 12.9642L26.1171 12.5417L26.1303 12.3727C26.2369 10.8873 26.25 9.49625 26.2517 9.19236V9.07047C26.25 8.7552 26.2353 7.26986 26.1171 5.72276L26.104 5.55213L26.0892 5.38312C26.0072 4.45356 25.8858 3.5305 25.7036 2.85121C25.5544 2.29897 25.2614 1.79521 24.8539 1.39025C24.4465 0.985302 23.9389 0.693348 23.3819 0.543564C21.4785 0.0365314 14.2441 0.000780106 13.2415 -0.000844955H13.0085C12.5015 -0.000844955 10.4045 0.00890541 8.2058 0.0836601L7.92686 0.0934105L7.78411 0.0999107L7.50353 0.111288L7.22294 0.122663C5.40162 0.202293 3.66726 0.330675 2.86818 0.545189C2.31132 0.69483 1.80385 0.986544 1.39643 1.39119C0.989016 1.79584 0.695915 2.29927 0.546397 2.85121C0.364265 3.52888 0.242843 4.45356 0.160802 5.38312L0.147675 5.55375L0.134548 5.72276C0.0531029 6.82391 0.00822929 7.92741 0 9.03147L0 9.23136C0.00328166 9.58075 0.0164083 10.7882 0.105013 12.1208L0.116499 12.2882L0.121422 12.3727L0.134548 12.5417L0.170647 12.9642L0.187055 13.1332C0.265815 13.9767 0.382314 14.7957 0.548038 15.4116C0.697305 15.9639 0.990295 16.4676 1.39773 16.8726C1.80516 17.2775 2.31276 17.5695 2.86982 17.7193C3.6689 17.9305 5.40326 18.0605 7.22458 18.1418L7.50353 18.1532L7.78575 18.1629L7.92686 18.1678L8.20744 18.1792C9.76904 18.2289 11.3313 18.2565 12.8937 18.262L13.2103 18.2637ZM10.5013 13.0471V5.21735L17.3223 9.1306L10.5013 13.0471Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/shopaver/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5103_576)">
                      <path
                        d="M0 1.57575C0 0.705375 0.72325 0 1.61562 0H20.3844C21.2767 0 22 0.705375 22 1.57575V20.4242C22 21.2946 21.2767 22 20.3844 22H1.61562C0.72325 22 0 21.2946 0 20.4242V1.57575ZM6.79662 18.4167V8.48238H3.49525V18.4167H6.79662ZM5.14663 7.12525C6.2975 7.12525 7.01388 6.3635 7.01388 5.40925C6.99325 4.43438 6.29887 3.69325 5.16862 3.69325C4.03837 3.69325 3.3 4.43575 3.3 5.40925C3.3 6.3635 4.01638 7.12525 5.12463 7.12525H5.14663ZM11.8951 18.4167V12.8686C11.8951 12.5716 11.9171 12.2746 12.0051 12.0629C12.243 11.4703 12.7861 10.8556 13.6991 10.8556C14.894 10.8556 15.3711 11.7659 15.3711 13.1024V18.4167H18.6725V12.7188C18.6725 9.66625 17.0445 8.24725 14.872 8.24725C13.1202 8.24725 12.3351 9.20975 11.8951 9.88762V9.922H11.8731L11.8951 9.88762V8.48238H8.59513C8.63638 9.41463 8.59513 18.4167 8.59513 18.4167H11.8951Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5103_576">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://x.com/ShopaverApp" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <rect width="22.213" height="22" rx="2" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.19184 4.22818C4.27582 4.35369 5.57782 6.17641 7.085 8.27861L9.8254 12.101L9.59113 12.3508C8.98351 12.9987 4.29418 18.2493 4.22757 18.3563C4.17049 18.4481 4.29259 18.4768 4.72868 18.4741L5.30533 18.4705L7.78514 15.705C9.14909 14.184 10.3091 12.9539 10.3632 12.9715C10.4172 12.9892 11.3485 14.2353 12.4325 15.7407L14.4035 18.4777H16.5303C17.6999 18.4777 18.6569 18.4574 18.6569 18.4325C18.6569 18.4077 17.3391 16.5528 15.7285 14.3105C14.1178 12.0682 12.8001 10.2063 12.8001 10.1731C12.8001 10.1222 17.2715 5.09039 18.0448 4.27102L18.2969 4.00389H17.6948H17.0927L14.6897 6.67522C13.3682 8.14446 12.2571 9.3451 12.2208 9.34326C12.1845 9.34151 11.3028 8.15029 10.2614 6.69621L8.36785 4.05246L6.2035 4.02623L4.03906 4L4.19184 4.22818ZM12.3534 11.1572C14.8648 14.6055 16.9554 17.4884 16.9991 17.5637C17.0651 17.6776 16.9048 17.7006 16.0414 17.7006H15.0043L10.4177 11.4174C7.89513 7.96164 5.80862 5.0766 5.78102 5.00617C5.74141 4.90515 5.94749 4.87911 6.75891 4.8829L7.78703 4.88766L12.3534 11.1572Z"
                      fill="#5801B7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/*mobile section */}
          <div className="flex justify-between max-[360px]:w-full  max-[425px]:w-[325px]  max-[550px]:w-[340px] max-[1023px]:w-[415px] min-[1024px]:w-[35%]  min-[1125px]:w-[31%]  mt-[24px] lg:mt-[0px]">
            <div className="lg:ml-[12px]">
              <p className="text-[19px] sm:text-[20.5px] lg:text-[22px] font-semibold text-[#FFF] ">
                Features
              </p>
              <ul className="font-normal text-[11.2px] sm:text-[14px] lg:text-[16px] leading-[25px] md:leading-[35px] pt-[10px] text-[#FFF]">
                <li>
                  <Link href="/pos-billing-software" onClick={ScrollTop}>
                    POS Billing
                  </Link>
                </li>
                <li>
                  <Link href="/quick-billing-software" onClick={ScrollTop}>
                    Quick Billing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inventory-management-software"
                    onClick={ScrollTop}
                  >
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link href="/bahi-khata-software" onClick={ScrollTop}>
                    Digital Khata
                  </Link>
                </li>
                {/* <li>
                  <Link to="/ondc-solutions" onClick={ScrollTop}>
                    ONDC Solutions
                  </Link>
                </li> */}
                <li>
                  <Link href="/online-store" onClick={ScrollTop}>
                    Online Store
                  </Link>
                </li>
                <li>
                  <Link href="/whatsapp-commerce" onClick={ScrollTop}>
                    Whatsapp Commerce
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" max-[1123px]:mr-[15px]   max-[1124px]:mr-[15px]">
              <p className=" font-semibold text-[#FFF] text-[19px] sm:text-[20.5px] lg:text-[22px] ">
                Shopaver
              </p>
              <ul className="font-normal text-[11.2px] sm:text-[14px] lg:text-[16px] leading-[25px] md:leading-[35px] pt-[10px] text-[#FFF]">
                {/* <li>
                  <Link to="/" onClick={ScrollTop}>
                    Home
                  </Link>
                </li> */}
                <li>
                  <Link href="/about-us" onClick={ScrollTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shopaver.com/Blogs/"
                    target="_blank"
                    onClick={ScrollTop}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" onClick={ScrollTop}>
                    Contact Us
                  </Link>
                </li>
                {/* <li><Link to='/'>Careers</Link></li> */}
                {/* <li><Link to='/'>Resources</Link></li> */}
                {/* <li><Link to='/'>Sitemap</Link></li> */}
                <li>
                  <Link href="/privacy-policy" onClick={ScrollTop}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" onClick={ScrollTop}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-[30px] lg:mt-[0px]  max-[360px]:w-full max-[400px]:w-[320px] max-[425px]:w-[345px]  max-[550px]:w-[360px] max-[639px]:w-[432px] max-[1023px]:w-[415px]">
              <p className="text-[19px] sm:text-[20.5px] lg:text-[22px]  font-semibold text-[#FFF] ">
                Contact Info
              </p>
              <div className="flex items-center gap-[9px] lg:hidden max-[360px]:gap-[6px]">
                <a href="https://www.facebook.com/ShopaverApp" target="_blank">
                  {/* <Image
                    width={24.17}
                    height={24.17}
                    src={"/icons/facebook.svg"}
                    className="facebook2"
                    alt="facebook"
                  ></Image> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.17"
                    height="21.17"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5103_583)">
                      <path
                        d="M25.5 13C25.5 6.1 19.9 0.5 13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.05 4.8 24.0875 10.5 25.25V16.75H8V13H10.5V9.875C10.5 7.4625 12.4625 5.5 14.875 5.5H18V9.25H15.5C14.8125 9.25 14.25 9.8125 14.25 10.5V13H18V16.75H14.25V25.4375C20.5625 24.8125 25.5 19.4875 25.5 13Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5103_583">
                        <rect width="21.17" height="21.17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://www.instagram.com/shopaver/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M6.8777 1.77148H14.287C17.1097 1.77148 19.403 4.06485 19.403 6.88746V14.2968C19.403 15.6537 18.864 16.9549 17.9046 17.9144C16.9452 18.8738 15.6439 19.4128 14.287 19.4128H6.8777C4.05509 19.4128 1.76172 17.1194 1.76172 14.2968V6.88746C1.76172 5.53062 2.30072 4.22935 3.26015 3.26992C4.21959 2.31049 5.52086 1.77148 6.8777 1.77148ZM6.70128 3.53562C5.85911 3.53562 5.05142 3.87017 4.45591 4.46568C3.8604 5.06119 3.52585 5.86887 3.52585 6.71105V14.4732C3.52585 16.2285 4.94597 17.6487 6.70128 17.6487H14.4635C15.3056 17.6487 16.1133 17.3141 16.7088 16.7186C17.3043 16.1231 17.6389 15.3154 17.6389 14.4732V6.71105C17.6389 4.95574 16.2188 3.53562 14.4635 3.53562H6.70128ZM15.2132 4.85871C15.5056 4.85871 15.7861 4.97488 15.9929 5.18165C16.1996 5.38843 16.3158 5.66887 16.3158 5.9613C16.3158 6.25372 16.1996 6.53416 15.9929 6.74094C15.7861 6.94771 15.5056 7.06388 15.2132 7.06388C14.9208 7.06388 14.6403 6.94771 14.4336 6.74094C14.2268 6.53416 14.1106 6.25372 14.1106 5.9613C14.1106 5.66887 14.2268 5.38843 14.4336 5.18165C14.6403 4.97488 14.9208 4.85871 15.2132 4.85871ZM10.5824 6.18181C11.7521 6.18181 12.8738 6.64647 13.7009 7.47357C14.528 8.30066 14.9927 9.42245 14.9927 10.5921C14.9927 11.7618 14.528 12.8836 13.7009 13.7107C12.8738 14.5378 11.7521 15.0025 10.5824 15.0025C9.41268 15.0025 8.2909 14.5378 7.4638 13.7107C6.6367 12.8836 6.17205 11.7618 6.17205 10.5921C6.17205 9.42245 6.6367 8.30066 7.4638 7.47357C8.2909 6.64647 9.41268 6.18181 10.5824 6.18181ZM10.5824 7.94594C9.88056 7.94594 9.20749 8.22474 8.71123 8.72099C8.21497 9.21725 7.93618 9.89032 7.93618 10.5921C7.93618 11.294 8.21497 11.967 8.71123 12.4633C9.20749 12.9595 9.88056 13.2383 10.5824 13.2383C11.2842 13.2383 11.9573 12.9595 12.4535 12.4633C12.9498 11.967 13.2286 11.294 13.2286 10.5921C13.2286 9.89032 12.9498 9.21725 12.4535 8.72099C11.9573 8.22474 11.2842 7.94594 10.5824 7.94594Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Shopaver_software"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                  >
                    <path
                      d="M9.23254 12.8887H9.3346C10.2772 12.8852 15.0535 12.8508 16.3413 12.5045C16.7306 12.3988 17.0854 12.1928 17.3701 11.907C17.6549 11.6213 17.8596 11.2658 17.9639 10.8761C18.0798 10.4403 18.1612 9.86353 18.2162 9.26836L18.2277 9.1491L18.2529 8.85094L18.2621 8.73168C18.3366 7.68354 18.3458 6.70192 18.347 6.48748V6.40147C18.3458 6.179 18.3355 5.13086 18.2529 4.03915L18.2438 3.91874L18.2334 3.79948C18.1761 3.14353 18.0912 2.49218 17.9639 2.01283C17.8596 1.62314 17.6549 1.26766 17.3701 0.981905C17.0854 0.696149 16.7306 0.49013 16.3413 0.384436C15.011 0.0266476 9.955 0.00141907 9.25433 0.000271797H9.09149C8.73714 0.000271797 7.27158 0.00715256 5.73493 0.0599031L5.53998 0.0667839L5.44021 0.0713711L5.24412 0.0793991L5.04802 0.0874262C3.77512 0.143617 2.563 0.23421 2.00453 0.385582C1.61535 0.491178 1.26069 0.697024 0.975949 0.982568C0.691211 1.26811 0.486366 1.62336 0.38187 2.01283C0.25458 2.49103 0.16972 3.14353 0.112382 3.79948L0.103208 3.91989L0.0940341 4.03915C0.037113 4.81618 0.00575135 5.59486 0 6.37395L0 6.515C0.00229351 6.76155 0.0114676 7.61359 0.0733924 8.55393L0.0814197 8.67205L0.08486 8.73168L0.0940341 8.85094L0.119263 9.1491L0.13073 9.26836C0.185775 9.86353 0.267194 10.4415 0.383017 10.8761C0.487338 11.2658 0.692104 11.6213 0.976854 11.907C1.2616 12.1928 1.61636 12.3988 2.00568 12.5045C2.56415 12.6536 3.77627 12.7453 5.04917 12.8027L5.24412 12.8107L5.44136 12.8176L5.53998 12.821L5.73608 12.829C6.82746 12.8641 7.91928 12.8836 9.01121 12.8875L9.23254 12.8887ZM7.33924 9.20758V3.68251L12.1063 6.4439L7.33924 9.20758Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/shopaver/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5476_2684)">
                      <path
                        d="M0 1.11193C0 0.49775 0.510363 0 1.14007 0H14.3843C15.014 0 15.5244 0.49775 15.5244 1.11193V14.4124C15.5244 15.0266 15.014 15.5244 14.3843 15.5244H1.14007C0.510363 15.5244 0 15.0266 0 14.4124V1.11193ZM4.79605 12.9958V5.98561H2.46643V12.9958H4.79605ZM3.63173 5.02795C4.44385 5.02795 4.94936 4.49042 4.94936 3.81705C4.9348 3.12913 4.44482 2.60615 3.64725 2.60615C2.84969 2.60615 2.32865 3.1301 2.32865 3.81705C2.32865 4.49042 2.83416 5.02795 3.6162 5.02795H3.63173ZM8.39382 12.9958V9.08078C8.39382 8.8712 8.40935 8.66162 8.47144 8.5122C8.6393 8.09401 9.02256 7.6603 9.66682 7.6603C10.51 7.6603 10.8467 8.30262 10.8467 9.24572V12.9958H13.1763V8.97502C13.1763 6.82101 12.0275 5.81969 10.4945 5.81969C9.25834 5.81969 8.70431 6.49888 8.39382 6.97723V7.00148H8.3783L8.39382 6.97723V5.98561H6.06517C6.09428 6.64345 6.06517 12.9958 6.06517 12.9958H8.39382Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5476_2684">
                        <rect width="15.5244" height="15.5244" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://x.com/ShopaverApp/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.17"
                    height="21.17"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <rect width="22.213" height="22" rx="2" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.19184 4.22818C4.27582 4.35369 5.57782 6.17641 7.085 8.27861L9.8254 12.101L9.59113 12.3508C8.98351 12.9987 4.29418 18.2493 4.22757 18.3563C4.17049 18.4481 4.29259 18.4768 4.72868 18.4741L5.30533 18.4705L7.78514 15.705C9.14909 14.184 10.3091 12.9539 10.3632 12.9715C10.4172 12.9892 11.3485 14.2353 12.4325 15.7407L14.4035 18.4777H16.5303C17.6999 18.4777 18.6569 18.4574 18.6569 18.4325C18.6569 18.4077 17.3391 16.5528 15.7285 14.3105C14.1178 12.0682 12.8001 10.2063 12.8001 10.1731C12.8001 10.1222 17.2715 5.09039 18.0448 4.27102L18.2969 4.00389H17.6948H17.0927L14.6897 6.67522C13.3682 8.14446 12.2571 9.3451 12.2208 9.34326C12.1845 9.34151 11.3028 8.15029 10.2614 6.69621L8.36785 4.05246L6.2035 4.02623L4.03906 4L4.19184 4.22818ZM12.3534 11.1572C14.8648 14.6055 16.9554 17.4884 16.9991 17.5637C17.0651 17.6776 16.9048 17.7006 16.0414 17.7006H15.0043L10.4177 11.4174C7.89513 7.96164 5.80862 5.0766 5.78102 5.00617C5.74141 4.90515 5.94749 4.87911 6.75891 4.8829L7.78703 4.88766L12.3534 11.1572Z"
                      fill="#5801B7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-[11.2px] sm:text-[14px] lg:text-[16px] font-normal text-[#FFF] flex items-center gap-[3px] mt-[12px]">
              <p className="">Email :</p>
              <a href="mailto:support@shopaver.com" className="">
                support@shopaver.com
              </a>
            </div>

            <div className="mt-[16px] flex items-center gap-[3px] text-[11.2px] sm:text-[14px] lg:text-[16px] font-normal text-[#FFF]">
              <p className="">Number :</p>
              <a href="tel:+91 9311660676" className="text-[#FFF]">
                +91 9311660676
              </a>
            </div>

            <p className="mt-[16px] text-[11.2px] sm:text-[14px] lg:text-[16px] font-normal text-[#FFF]">
              Website : www.shopaver.com
            </p>
            <div className="block md:hidden mt-[12px]">
              <p className="text-[19px] sm:text-[20.5px] font-semibold text-[#FFF]">
                Address
              </p>
              <p className="font-normal text-[11.2px] sm:text-[14px] leading-[25px] text-[#FFF]">
                G-57, Sector-63, NOIDA,
                <br />
                Uttar Pradesh - 201301
              </p>
            </div>
            <Link
              href="https://play.google.com/store/apps/details?id=com.shopaver"
              className="mt-[27px] w-[151px] h-[41px] rounded-[8px] bg-[#FFF] flex justify-center items-center gap-[8px]"
            >
              <Image
                src={"/landingPage/ShopaverAndroidIcon.svg"}
                width={18}
                height={20}
                alt="AndroidLink"
              ></Image>
              <p className="text-[#5801B7] text-[14.25px] font-medium">
                Download App
              </p>
            </Link>
            <Link
              href="https://apps.apple.com/in/app/shopaver/id6747590415"
              className="mt-[11px] w-[151px] h-[41px] rounded-[8px] bg-[#FFF] flex justify-center items-center gap-[8px]"
            >
              <Image
                src={"/landingPage/ShopaverIosIcon.svg"}
                width={18}
                height={20}
                alt="AndroidLink"
              ></Image>
              <p className="text-[#5801B7] text-[14.25px] font-medium">
                Download App
              </p>
            </Link>
          </div>
        </div>

        {/* <div className=" flex justify-center pb-[30px] lg:pb-[20px] mt-[17px]">
            <NavLink to="https://shopaver.com/" className='text-primary font-normal'>www.shopaver.com</NavLink>
          </div> */}
        <div className="hidden lg:flex justify-center items-center pb-[18px] pt-[40px] text-[#FFF]">
          <p className="font-semibold text-[16px]">
            Copyright © 2025 - Shopaver
          </p>

          <ul className="flex font-semibold text-[16px] list-disc">
            <li className="ml-6 border-b-2 border-[#FFF]">
              <Link href="/privacy-policy" onClick={ScrollTop}>
                Privacy Policy
              </Link>
            </li>
            <li className="ml-6 border-b-2 border-[#FFF]">
              <Link href="/terms-and-conditions" onClick={ScrollTop}>
                Terms & Conditions
              </Link>
            </li>
            <li className="ml-6 border-b-2 border-[#FFF]">
              <Link href="/cancellation-and-refund-policy" onClick={ScrollTop}>
                Cancellation & Refund
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
