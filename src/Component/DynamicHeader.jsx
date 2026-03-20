// ./Component/DynamicHeader.js
"use client";

import { usePathname } from "next/navigation";
import Header from "../Component/NewNavbar/Navbar";
import SlugHeader from "../app/service/Header/Header";

export default function DynamicHeader() {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/service/");
  return isLandingPage ? <SlugHeader /> : <Header />;
}