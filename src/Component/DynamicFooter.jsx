
"use client";

import { usePathname } from "next/navigation";
import Footer from "../Component/Footer/FinalFooter";
import SlugFooter from "../app/service/Footer/Footer";

export default function DynamicFooter() {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/service/");
  return isLandingPage ? <SlugFooter /> : <Footer />;
}