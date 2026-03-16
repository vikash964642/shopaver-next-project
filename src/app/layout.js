import { Lato } from "next/font/google";
import "./globals.css";
import Header from "../Component/NewNavbar/Navbar";
import FinalFooter from "../Component/Footer/FinalFooter";
import ScrollToTopButton from "../Component/GoToTop";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SlugHeader from "../app/service/Header/Header"
import DynamicHeader from "../Component/DynamicHeader";
import DynamicFooter from "../Component/DynamicFooter"
const latoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  icons: {
    icon: "/icons/fav_icon.ico",
  },
};

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <head />

      <body className={latoFont.className}>
        {/* Ionicons Script */}
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

        {/* <Header /> */}
          <DynamicHeader />
        {children}
     <DynamicFooter />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
