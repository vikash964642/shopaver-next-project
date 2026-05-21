import "./globals.css";
import DynamicBottomIcon from "../Component/DynamicBottomIcon";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DynamicHeader from "../Component/DynamicHeader";
import DynamicFooter from "../Component/DynamicFooter";
import Navbar from "../Component/NewNavbar/Navbar";
import { bricolage, dmSans, poppins } from "@/lib/fonts";
// ✅ Metadata (SEO + Google Verification)
export const metadata = {
  icons: {
    icon: "/icons/fav_icon.ico",
  },
  verification: {
    google: "n2ngjSrjVtZrrJ1OwaJH1hZcoB4yROu21VCAC3V4-t8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} ${poppins.variable}`}>
      <head>
        {/* ✅ Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-WKMQCLH8'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer');`,
          }}
        />
      </head>

      <body >
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKMQCLH8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ✅ Ionicons */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />

        {/* ✅ Layout Components */}
        {/* <DynamicHeader /> */}
        <Navbar />
        {children}
        {/* <DynamicFooter /> */}
      <DynamicBottomIcon />
      </body>
    </html>
  );
}
