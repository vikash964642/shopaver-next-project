"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FinalFooter() {
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
      <div className="bg-secondary lg:mt-[120px]">
        <div className="flex lg:justify-between  px-8 flex-col lg:flex-row lg:pt-[50px] pt-[30px] max-[600px]:pr-[32px] max-[1124px]:pr-[15px] min-[1125px]:mr-[16px] min-[1125px]:ml-[35px] ">
          <div className="">
            <Image
              src={"/img/logo.webp"}
              height={50}
              width={140}
              onClick={handleClickHome}
              alt="shopaver logo"
              className="lg:cursor-pointer"
            ></Image>
            <p className="font-normal text-[13px] leading-[20.8px]  md:text-[15px] md:font-medium md:leading-[23px] mt-[10px] lg:mt-[15px]  min-[1024px]:w-[325px] min-[1250px]:w-[390px] max-[500px]:w-[343px]  max-[400px]:w-[auto]">
              Shopaver is the all-in-one solution for businesses, from online
              presence to in-person sales, compliance, billing and inventory
              management—empowering retail & e-commerce operations.
            </p>
            <div className="hidden lg:block mt-[40px]">
              <p className="text-[22px] md:font-semibold text-webtext">
                Address
              </p>
              <p className="font-semibold text-[15px] leading-[25px] text-webtext">
                H-31, 5th Floor,
                <br />
                Sector - 63, Noida
                <br />
                Uttar Pradesh - 201301
              </p>
              <div className="flex items-center gap-[20px] mt-[45px]">
                <a href="https://www.facebook.com/ShopaverApp" target="_blank">
                  <Image src="/icons/facebook.svg" width={24.17}
                    height={24.17} alt="facebook" />
                </a>

                <a
                  href="https://www.instagram.com/shopaver/"
                  target="_blank"
                >
                  <Image
                    src={"/icons/Instagram.svg"}
                    width={24.17}
                    height={24.17}
                    className=""
                    alt="instagram-icon"
                  ></Image>
                </a>
                <a
                  href="https://www.youtube.com/@Shopaver_software"
                  target="_blank"
                >
                  <Image
                    src={"/icons/youtube.svg"}
                    width={24.17}
                    height={24.17}
                    className=""
                    alt="youtube-icon"
                  ></Image>
                </a>
                <a
                  href="https://www.linkedin.com/company/shopaver/"
                  target="_blank"
                >
                  <Image
                    src={"/icons/Linkedin.svg"}
                    width={24.17}
                    height={24.17}
                    className=""
                    alt="Linkedin-icon"
                  ></Image>
                </a>
                <a href="https://x.com/ShopaverApp" target="_blank">
                  <Image src={"/icons/X.svg"} width={24.17}
                    height={24.17} className="" alt="x-icon"></Image>
                </a>
              </div>
            </div>
          </div>
          {/*mobile section */}
          <div className="flex justify-between max-[360px]:w-[275px]  max-[425px]:w-[300px]  max-[550px]:w-[340px] max-[1023px]:w-[415px] min-[1024px]:w-[35%]  min-[1125px]:w-[31%]  mt-[24px] lg:mt-[0px]">
            <div className="lg:ml-[12px]">
              <p className="text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px] min-[1024px]:text-[19px]  min-[1124px]:text-[22px]">
                Features
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
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
                  <Link href="/inventory-management-software" onClick={ScrollTop}>
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
                  <Link href="/whatsApp-business-suite" onClick={ScrollTop}>
                    WhatsApp Business Suite
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
              <p className="text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px]  min-[1024px]:text-[19px]  min-[1124px]:text-[22px]">
                Shopaver
              </p>
              <ul className="font-normal text-[13px] md:text-[15px] leading-[25px] md:leading-[35px] pt-[10px]">
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
            <div className="flex justify-between mt-[30px] lg:mt-[0px]  max-[360px]:w-[257px] max-[400px]:w-[310px] max-[425px]:w-[345px]  max-[550px]:w-[385px]  max-[1023px]:w-[460px]">
              <p className="text-[22px] md:font-bold font-semibold text-webtext max-[360px]:text-[18px]  min-[1024px]:text-[19px]  min-[1124px]:text-[22px]">
                Contact Info
              </p>
              <div className="flex items-center gap-[8px] lg:hidden max-[360px]:gap-[5px]">
                <a
                  href="https://www.facebook.com/ShopaverApp"
                  target="_blank"
                >
                  <Image
                    width={24.17}
                    height={24.17}
                    src={"/icons/facebook.svg"}
                    className="facebook2"
                    alt="facebook"
                  ></Image>
                </a>
                <a
                  href="https://www.instagram.com/shopaver/"
                  target="_blank"
                >
                  <Image
                    width={29}
                    height={29}
                    src={"/icons/Instagram.svg"}
                    className="insta2"
                    alt="instagram"
                  ></Image>
                </a>
                <a
                  href="https://www.youtube.com/@Shopaver_software"
                  target="_blank"
                >
                  <Image
                    width={25.13}
                    height={17.66}
                    src={"/icons/youtube.svg"}
                    className="youtube2"
                    alt="youtube"
                  ></Image>
                </a>
                <a
                  href="https://www.linkedin.com/company/shopaver/"
                  target="_blank"
                >
                  <Image
                    width={21.27}
                    height={21.27}
                    src={"/icons/Linkedin.svg"}
                    className="linkedin2"
                    alt="linkedin"
                  ></Image>
                </a>
                <a href="https://x.com/ShopaverApp/" target="_blank">
                  <Image
                    width={22}
                    height={22}
                    src={"/icons/X.svg"}
                    className="x2"
                    alt="x"
                  ></Image>
                </a>
              </div>
            </div>

            <p className="md:font-bold font-semibold text-[14px] md:text-[20px] md:leading-[30px] mt-[12px] ">
              Email
            </p>
            <a
              href="mailto:support@shopaver.com"
              className="font-normal text-[13px] leading-[19.5px] md:text-[16px] md:leading-[24px] text-primary"
            >
              support@shopaver.com
            </a>
            <p className="md:font-bold font-semibold text-[14px] md:text-[20px] md:leading-[30px] mt-[15px] ">
              Contact
            </p>

            <div className="md:mt-[8px] flex gap-[6px] flex-wrap">
              <p className="font-medium text-[13px] leading-[19.5px] md:text-[16px] md:leading-[24px] min-[1023px]:font-medium min-[1150px]:font-semibold">
                Support :{" "}
              </p>
              <a href="tel:+91 9311660676" className="text-primary">
                +91 9311660676
              </a>
            </div>
          </div>
          <div className="lg:flex hidden max-[1124px]:gap-[20px] min-[1125px]:gap-[80px]">
            {/* <div className="h-5 border-l mt-3 border-webgray"></div> */}
            <p className="font-bold text-[13.28px] bg-primary text-white w-[118px] h-[36px] rounded-[3.79px] pt-[8px] text-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.shopaver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download App
              </a>
            </p>
          </div>
        </div>

        <div className="lg:hidden pl-[32px] mt-[30px]">
          <p className="text-[22px] md:font-semibold font-semibold text-webtext max-[360px]:text-[18px]">
            Address
          </p>
          <p className="text-[13px] md:text-[16px] font-normal md:font-medium text-webtext ">
            H-31, 5th Floor, <br />
            Sector - 63, Noida
            <br />
            Uttar Pradesh - 201301
          </p>
        </div>
        <div className="flex items-center lg:hidden justify-between mx-[35px] sm:justify-center sm:gap-[50px] mt-[35px] max-[360px]:flex-wrap max-[360px]:justify-center">
          <div>
            <p className="font-semibold text-[14.3px] leading-[28.51px] ">
              Download the
            </p>
            <p className="text-[19.63px] font-bold leading-[28.51px] text-primary max-[360px]:leading-[20px]">
              Shopaver App
            </p>
          </div>
          <div className="flex w-[198.17px] h-[79px] border border-bordercolor rounded-[12.96px] items-center justify-around max-[360px]:mt-[25px]">
            <Image src={"/img/QRFooter.webp"} width={189} height={79} alt="QR-Img"></Image>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-[11.03px] leading-[15.27px] w-[97.47px]">
                Easiest way to get all your groceries
              </p>
              <p className="font-normal text-[6.74px] w-[94.4px]">
                Scan the QR code and download Shopaver App
              </p>
            </div>
          </div>
        </div>

        {/* <div className=" flex justify-center pb-[30px] lg:pb-[20px] mt-[17px]">
            <NavLink to="https://shopaver.com/" className='text-primary font-normal'>www.shopaver.com</NavLink>
          </div> */}
        <div className="hidden lg:flex justify-center items-center pb-[18px] pt-[40px]">
          <p className="font-semibold text-[16px]">
            Copyright © 2025 - Shopaver
          </p>

          <ul className="flex font-semibold text-[16px] list-disc">
            <li className="ml-6 border-b-2 border-black">
              <Link href="/privacy-policy" onClick={ScrollTop}>
                Privacy Policy
              </Link>
            </li>
            <li className="ml-6 border-b-2 border-black">
              <Link href="/terms-and-conditions" onClick={ScrollTop}>
                Terms & Conditions
              </Link>
            </li>
            <li className="ml-6 border-b-2 border-black">
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

export default FinalFooter;
