import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export default function ServiceLayout({ children }) {
  return (
    <div className={poppinsFont.className}>
      {children}
         <ToastContainer />
    </div>
  );
}