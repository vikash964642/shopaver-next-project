
import "./globals.css";
import ScrollToTopButton from "../Component/GoToTop";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DynamicHeader from "../Component/DynamicHeader";
import DynamicFooter from "../Component/DynamicFooter"
import { Lato, Poppins } from "next/font/google";
// Define fonts
const latoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export const metadata = {
  icons: {
    icon: "/icons/fav_icon.ico",
  },
};

export default function RootLayout({ children,params }) {

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
