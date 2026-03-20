import HerosectionBox from "../../../Component/Utils/HerosectionBox";
import Link from "next/link";
function Herosection() {
  return (
    <section>
    <div>
       <HerosectionBox padding={'px-[30px]'}  head={'Quick Billing Software'} para={<>Quickly generate customer bills and speed up checkout with ease. Simplify your business with our quick billing software. Create simple, instant invoices anytime, anywhere. </>} subhead={'Grow your Business with Fast & Easy Invoicing Software '} button={<Link href="/contact-us">Get Free Demo</Link>} />
    </div>
    </section>
  );
}

export default Herosection;
