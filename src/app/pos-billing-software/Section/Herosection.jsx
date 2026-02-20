// import { Link } from "react-router-dom";
import Link from "next/link";
import HerosectionBox from "@/Component/Utils/HerosectionBox";
function Herosecion() {
  return (
   <>
    <div>
<HerosectionBox padding={'md:px-[56px] px-[28px]'} head={'POS Billing Software'} para={<> Say goodbye to manual errors, long queues and inventory confusion. Our all-in-one POS billing software helps you create bills, speed up checkouts, manage stock in real time and run your business efficiently anytime, anywhere.</>} subhead={<>POS Billing Made Simple, Fast and Accurate for Your Business</>} button={<Link href="/contact-us">Get Free Demo</Link>} />
    </div>
    </>
  );
}

export default Herosecion;
