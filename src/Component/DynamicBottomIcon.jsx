


"use client";

import { usePathname } from "next/navigation";
import GoToTop from "../Component/GoToTop";
import WhatsappFeature from "../Component/WhatsappFeature";

export default function DynamicBottomIcon() {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/service/");
  return isLandingPage ? <WhatsappFeature /> : <GoToTop />;
}