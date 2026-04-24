import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ServiceLayout({ children }) {
  return (
    <div className="font-sans">
      {children}
         <ToastContainer />
    </div>
  );
}
