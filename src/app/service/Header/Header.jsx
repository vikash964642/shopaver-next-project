"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      children: [
        { name: "Pos Billing", href: "/pos-billing-software" },
        { name: "Quick Billing", href: "/quick-billing-software" },
        { name: "Inventory", href: "/inventory-management-software" },
        { name: "Khata", href: "/bahi-khata-software" },
        { name: "Online Store", href: "/online-store" },
        { name: "Whatsapp Commerce", href: "/whatsapp-commerce" },
      ],
    },
    { name: "Pricing", href: "/pricing-plan" },
    { name: "Contact", href: "/contact-us" },
    { name: "Blog", href: "https://shopaver.com/Blogs/" },
  ];

  return (
    <>
      {/* ---------- Desktop Header ---------- */}
      <header className="hidden md:block bg-white sticky top-0 w-full z-50 pt-[15px]">
        <div className="flex justify-between items-center  max-w-5xl md:mx-[20px] xl:mx-auto  h-[40.5px] px-4 sm:px-6 lg:px-[10px] border border-[#D2D2D2] rounded-[12px]">
          <div className="flex items-center gap-[9.2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.174" cy="12.1779" r="12.1779" fill="#5801B7" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6754 17.933C15.0517 17.933 14.5447 18.4392 14.5446 19.0629C14.5446 19.6867 15.0517 20.1927 15.6754 20.1927C16.299 20.1925 16.8043 19.6865 16.8043 19.0629C16.8042 18.4394 16.299 17.9332 15.6754 17.933ZM7.28382 17.933C6.66013 17.933 6.15404 18.4392 6.15393 19.0629C6.15393 19.6867 6.66014 20.1927 7.28382 20.1927C7.9074 20.1926 8.4137 19.6866 8.4137 19.0629C8.41359 18.4393 7.90741 17.9331 7.28382 17.933ZM19.067 5.58142L17.5162 5.84997C17.2934 5.88855 17.1182 6.05695 17.067 6.27185L17.0533 6.35486L16.8785 8.4447H6.36292C5.45077 8.44492 4.74212 9.2213 4.80725 10.1156L4.81995 10.2279L5.52796 15.1205C5.65839 16.0167 6.39844 16.6914 7.29065 16.7484L7.41272 16.7523H15.5524C16.5018 16.7523 17.2989 16.0551 17.4362 15.1283L17.4508 15.0062L18.1324 6.87927L19.2584 6.68396C19.5372 6.63553 19.7322 6.38882 19.7223 6.11365L19.7145 6.03747C19.6661 5.75855 19.4184 5.56364 19.1432 5.57361L19.067 5.58142ZM16.3395 14.9105C16.3079 15.2887 16.0125 15.5858 15.6432 15.6263L15.5563 15.6302H7.41663C7.05641 15.6301 6.74667 15.3862 6.65686 15.0443L6.63929 14.9564L5.93128 10.0648C5.89606 9.82103 6.06599 9.60091 6.30139 9.5658L6.3678 9.56091H16.7887L16.3395 14.9105Z"
                fill="white"
              />
            </svg>
            <p className="text-[#2E2E2E] text-[18px] font-semibold">Shopaver</p>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center outline-none space-x-6 relative">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdown(link.name)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <span className="flex items-center cursor-pointer md:text-[15px] lg:text-[17.5px] text-[rgba(41,0,41,0.68)] hover:text-[#5801B7] transition">
                    {link.name}
                    <span
                      className={`ml-1 transition-transform duration-300 flex items-center ${
                        desktopDropdown === link.name
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    >
                      <ion-icon
                        name="chevron-down"
                        class="text-[20px]"
                      ></ion-icon>
                    </span>
                  </span>

                  {desktopDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-[200px] bg-white shadow-lg rounded">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-[16px] hover:bg-purple-50 hover:text-purple-700 transition"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="md:text-[15px] lg:text-[17.5px] text-[rgba(41,0,41,0.68)] hover:text-[#5801B7] transition"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="flex items-center space-x-3 ml-4">     
            <Link
              href="/login"
              className="py-[4.58px] px-[15px] text-[#240029] text-[11.66px] rounded-[6.661px] bg-[rgba(41,0,41,0.05)] shadow-[inset_0_0_0_0.833px_rgba(41,0,41,0.11)] hover:bg-gray-100 transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-[10px] py-[4.58px] rounded-[6.661px] bg-[#5801B7] shadow-[inset_0_0_0_0.833px_rgba(41,0,41,0.11)] text-[#FFF] text-center text-[11.658px] font-normal"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* ---------- Mobile Header ---------- */}
      <header className="md:hidden bg-white sticky top-0 w-full z-50 px-5 border-b border-[#A1A1A1] flex justify-between items-center h-[60px]">
        {/* Logo */}
        <div className="flex items-center gap-[9.2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <circle cx="12.174" cy="12.1779" r="12.1779" fill="#5801B7" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6754 17.933C15.0517 17.933 14.5447 18.4392 14.5446 19.0629C14.5446 19.6867 15.0517 20.1927 15.6754 20.1927C16.299 20.1925 16.8043 19.6865 16.8043 19.0629C16.8042 18.4394 16.299 17.9332 15.6754 17.933ZM7.28382 17.933C6.66013 17.933 6.15404 18.4392 6.15393 19.0629C6.15393 19.6867 6.66014 20.1927 7.28382 20.1927C7.9074 20.1926 8.4137 19.6866 8.4137 19.0629C8.41359 18.4393 7.90741 17.9331 7.28382 17.933ZM19.067 5.58142L17.5162 5.84997C17.2934 5.88855 17.1182 6.05695 17.067 6.27185L17.0533 6.35486L16.8785 8.4447H6.36292C5.45077 8.44492 4.74212 9.2213 4.80725 10.1156L4.81995 10.2279L5.52796 15.1205C5.65839 16.0167 6.39844 16.6914 7.29065 16.7484L7.41272 16.7523H15.5524C16.5018 16.7523 17.2989 16.0551 17.4362 15.1283L17.4508 15.0062L18.1324 6.87927L19.2584 6.68396C19.5372 6.63553 19.7322 6.38882 19.7223 6.11365L19.7145 6.03747C19.6661 5.75855 19.4184 5.56364 19.1432 5.57361L19.067 5.58142ZM16.3395 14.9105C16.3079 15.2887 16.0125 15.5858 15.6432 15.6263L15.5563 15.6302H7.41663C7.05641 15.6301 6.74667 15.3862 6.65686 15.0443L6.63929 14.9564L5.93128 10.0648C5.89606 9.82103 6.06599 9.60091 6.30139 9.5658L6.3678 9.56091H16.7887L16.3395 14.9105Z"
              fill="white"
            />
          </svg>
          <p>Shopaver</p>
        </div>

        {/* Hamburger */}
        <div className="flex items-center gap-[9px]">
          <Link
            href="/login"
            className="py-[4.58px] px-[15px] text-[#240029] text-[11.66px] rounded-[6.661px] bg-[rgba(41,0,41,0.05)] shadow-[inset_0_0_0_0.833px_rgba(41,0,41,0.11)] hover:bg-gray-100 transition"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-[10px] py-[4.58px] rounded-[6.661px] bg-[#5801B7] shadow-[inset_0_0_0_0.833px_rgba(41,0,41,0.11)] text-[#FFF] text-center text-[11.658px] font-normal"
          >
            Sign up
          </Link>
          <button
            className="flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* {mobileMenuOpen ? "✕" : "☰"} */}
            <ion-icon
              class="text-[25px] text-[#1D1D1D]"
              name={mobileMenuOpen ? "close" : "menu"}
            ></ion-icon>
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-[60px] left-0 h-full w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <span
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.name ? null : link.name,
                      )
                    }
                    className="flex justify-between items-center cursor-pointer text-[11.658px]  text-[rgba(41,0,41,0.68)] py-2 px-2 hover:bg-gray-100 rounded"
                  >
                    {link.name}
                    <span
                      className={`ml-1 transition-transform duration-300 flex items-center ${
                        mobileDropdown === link.name ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ion-icon
                        name="chevron-down"
                        class="text-[20px]"
                      ></ion-icon>
                    </span>
                  </span>
                  {mobileDropdown &&
                    link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block pl-6 py-2 text-[11.658px] text-[rgba(41,0,41,0.68)] hover:bg-purple-50 hover:text-[#5801B7] rounded transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-2 py-2 text-[11.658px]  text-[rgba(41,0,41,0.68)] hover:text-[#5801B7] transition"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        </div>
      </header>
    </>
  );
}
